import singup from '../assets/images/signup.svg';
import googleImg from '../assets/images/google.svg';
import facebook from '../assets/images/facebook.svg';
import {
    Box,
    Button,
    Checkbox,
    FilledInput,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    Typography,
    Divider
} from '@mui/material';
import { useState, useRef } from 'react';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Link } from 'react-router-dom';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const [msg, setMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const submitHandler = async (event) => {
        event.preventDefault();

        setIsLoading(true);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!email || !password) {
            setMsg('Please fill all fields');
            setIsLoading(false);
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMsg('User Signup Successful');
            emailRef.current.value = '';
            passwordRef.current.value = '';
        } catch (error) {
            setMsg(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main>
            <Box
                sx={{
                    bgcolor: '#F4F4F4',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Grid container spacing={0} sx={{ py: 1, position: 'relative' }}>
                    {msg && (
                        <Typography
                            sx={{ color: 'red', width: '100%', textAlign: 'center', position: 'absolute', top: -20 }}
                        >
                            {msg}
                        </Typography>
                    )}
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                            }}
                        >
                            <img src={singup} alt="singup-img" width={300} />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Box
                            sx={{
                                pl: 5,
                                pr: 5,
                                pt: 2,
                                pb: 1,
                                bgcolor: '#FFF',
                                borderRadius: 2,
                            }}
                        >
                            <Typography variant="body1" fontWeight={600}>
                                Welcome to
                            </Typography>
                            <Typography
                                variant="h6"
                                component="h6"
                                fontWeight={'bold'}
                                color="#6358DC"
                            >
                                Design School
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Button fullWidth sx={{ my: 1.5, boxShadow: 3 }}>
                                    <img src={googleImg} alt="Sign-in google" width={150} />
                                </Button>
                                <Button fullWidth sx={{ my: 1, boxShadow: 3 }}>
                                    <img src={facebook} alt="Sign-in facebook" width={150} />
                                </Button>

                                <Divider sx={{ width: '100%' }}>OR</Divider>

                                <form style={{ width: '100%' }} onSubmit={submitHandler}>
                                    <FormControl fullWidth variant="filled" sx={{ my: 1 }}>
                                        <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
                                        <FilledInput
                                            id="filled-adornment-email"
                                            type="email"
                                            inputRef={emailRef}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <FormControl fullWidth variant="filled">
                                        <InputLabel htmlFor="filled-adornment-password">
                                            Password
                                        </InputLabel>
                                        <FilledInput
                                            id="filled-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            inputRef={passwordRef}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={handleClickShowPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
                                        sx={{ my: 2 }}
                                    >
                                        <FormControlLabel
                                            control={<Checkbox defaultChecked />}
                                            label="Remember me"
                                        />
                                        <a href="#">Forget password?</a>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        fullWidth
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Loading...' : 'Sign up'}
                                    </Button>
                                </form>

                                <Typography variant="body1" mt={2}>
                                    <Link to={"/login"}>Already a user?</Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </main>
    );
}

export default Signup;