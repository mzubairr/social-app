import React from 'react'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../lib/firebase';

export default function AddPost() {

    const addPost = async (e) => {
        // input value get start
        e.preventDefault();
        const postText = e.target.children[2].value;
        console.log(postText);
        // input value get end

        // firestore data save start
        try {
            await addDoc(collection(db, "posts"), {
                content: postText,
                from: "zubair",
                likes: 675,
                image:
                    "https://cometinsure.com/blog/wp-content/uploads/2024/08/Best-Fuel-Average-Cars-in-Pakistan.jpg",
                isShareAble: true,
                createdAt: serverTimestamp(),
                scss: [2, 4, 5]
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        //     // firestore data save end
    }

    return (
        <form onSubmit={addPost}>
            <label htmlFor="post">Post</label> <br />
            <input type="text" name="post" id="post" placeholder='Write Post' />
        </form>
    )
}