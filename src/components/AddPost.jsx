import React, { useRef } from 'react'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../lib/firebase';
import { Avatar, Box, Button, ButtonGroup, Card, CardContent, Divider, IconButton, InputAdornment, TextField } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function AddPost() {
    let postValue = useRef()
    const addPost = async (e) => {
        e.preventDefault();
        const postText = postValue.current.value;

        // firestore db
        if (postText) {
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
                postValue.current.value = ''
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }
    return (

        <>
            <Card sx={{ borderRadius: 3, margin: '20px 0px' }}>
                <CardContent >
                    <form onSubmit={addPost}>
                        <Box display="flex" gap={2} alignItems={'center'}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <TextField
                                inputRef={postValue}
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                type='text'
                                placeholder='Write Post'
                                variant="filled"
                                fullWidth
                                size='small'
                                InputProps={{
                                    style: { borderRadius: "70px" },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton type='submit' size="small" aria-label="show 4 new mails" color="inherit">
                                                <ChevronRightIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )

                                }}
                            />
                        </Box>
                    </form>
                    <Divider sx={{ paddingTop: 1 }} />
                    <ButtonGroup aria-label="Basic button group" fullWidth sx={{ margin: 'auto', paddingTop: 1 }}>
                        <Button variant="text"><VideocamIcon sx={{ color: '#f13353', fontSize: '30px' }} /> Live Video</Button>
                        <Button variant="text" color="inherit"><CollectionsIcon sx={{ color: '#45bd62', fontSize: '30px' }} />Photo/Video</Button>
                        <Button variant="text" color="inherit"><EmojiEmotionsIcon sx={{ color: '#f7ba2b', fontSize: '30px' }} />Feeling/Activity</Button>
                    </ButtonGroup>
                </CardContent>
            </Card>
        </>
    )
}