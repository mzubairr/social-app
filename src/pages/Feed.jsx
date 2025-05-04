import React, { useEffect, useState } from 'react'
import AddPost from '../components/AddPost'
import { collection, deleteDoc, doc, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../lib/firebase';

const Feed = () => {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const getPosts = async () => {

            const q = query(
                collection(db, "posts"),
                orderBy("createdAt", 'desc'),
                limit(30)
            );
            onSnapshot(q, (querySnapshot) => {
                const posts = [];
                querySnapshot.forEach((doc) => {
                    posts.push({ ...doc.data(), id: doc.id });
                });
                setPostData(posts)
            });
        }
        getPosts()
    }, [])

    return (
        <>
            <AddPost />
            {postData.map((post, index) => (
                <div key={post.id}>
                    {index + 1} <h1>{post.content}</h1>
                    <p>{post.from}</p>
                    <p>likes: {post.likes}</p>
                    <button
                        onClick={async () => {
                            await deleteDoc(doc(db, "posts", post.id));
                        }}
                    >
                        delete
                    </button>
                </div>
            ))}


        </>
    )
}

export default Feed