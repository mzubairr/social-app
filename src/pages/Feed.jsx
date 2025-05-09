import React from 'react'
import AddPost from '../components/AddPost'
import { Container, Card, CardContent, Avatar, Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import Renderpost from '../components/Renderpost';

const Feed = () => {

    return (
        <>
            <Container maxWidth="sm">
                {/* create post section */}
                <AddPost />

                {/* story section */}
                <Box display="flex" gap={2} justifyContent={'center'} sx={{ margin: '20px 0px' }}>

                    <Card sx={{ maxWidth: 150 }}>
                        <CardActionArea sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                                alt="User image"
                            />
                            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
                                <Box sx={{ position: 'absolute', bottom: 35 }} size="large" aria-label="story add">
                                    <ViewCompactIcon sx={{ bgcolor: "blue", color: 'white', borderRadius: 30, padding: '1px 7px', fontSize: 39 }} />
                                </Box>
                                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
                                    Create Story
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card
                        sx={{
                            width: '100%',
                            maxWidth: 150,
                            backgroundImage: `url('https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg')`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    >
                        <CardActionArea sx={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'column',
                                    height: '100%',
                                    color: 'white'
                                }}
                            >
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Typography variant="body2">
                                    Zubair
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card
                        sx={{
                            width: '100%',
                            maxWidth: 150,
                            backgroundImage: `url('https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg')`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    >
                        <CardActionArea sx={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'column',
                                    height: '100%',
                                    color: 'white'
                                }}
                            >
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Typography variant="body2">
                                    Zubair
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>

                {/* main section */}
                <Renderpost />
            </Container>
        </>
    )
}

export default Feed