import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../lib/firebase';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';

const Renderpost = () => {
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
            {
                postData.map((post) => (
                    <Card key={post.id} sx={{ maxWidth: '100%', mb: 2 }}>
                        <CardHeader
                            avatar={
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            }
                            action={
                                <IconButton aria-label="settings" onClick={async () => {
                                    await deleteDoc(doc(db, "posts", post.id));
                                }}>
                                    <CloseIcon />
                                </IconButton>
                            }
                            title={post.from}
                            subheader={post.createdAt ? post.createdAt.toDate().toLocaleDateString() : ''}
                        />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {post.content}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton sx={{ color: '#f13353' }} aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            {post.likes}
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                ))
            }
        </>
    )
}

export default Renderpost


