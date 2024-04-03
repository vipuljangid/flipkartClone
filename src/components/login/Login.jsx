import React from 'react'
import { Box, Button, Dialog, DialogContent, makeStyles, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import { authenticateLogin, authenticateSignup } from '../services/api.js'
const useStyle = makeStyles({
    component: {
        height: '85vh',
        width: '112vh',
    },
    error: {
        color: 'red',
        fontSize: 10,
        lineHeight: 0,
    },
    loginLeft: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '85vh',
        width: '40%',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        backgroundPosition: 'center 85%',
        padding: ' 35px 28px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: '400',
            fontSize: '18px'
        }
    },
    loginRight: {
        display: 'flex',
        width: '60%',
        flex: '1',
        flexDirection: 'column',
        padding: '56px 35px 16px',
        '& >*': {
            margin: '7px 0px'
        }
    }
})

const accountInitialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations '
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupIntialValue = {
    username: '',
    password: '',
    email: '',
};

const loginIntialValue = {
    username: '',
    password: '',
}

const Login = ({ open, setOpen, setAccount }) => {
    const classes = useStyle();
    const [login, setLogin] = useState(loginIntialValue)
    const [signup, setSignup] = useState(signupIntialValue)
    const [account, toggleAccount] = useState(accountInitialValue.login)
    const [error, setError] = useState(false)

    const closeDialog = () => {
        setOpen(false)
        toggleAccount(accountInitialValue.login)
    }
    const toggleUserAccount = () => {
        toggleAccount(accountInitialValue.signup)
    }

    const onChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
        console.log(signup)
    }

    const onLoginChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
        console.log(login)
    }

    const loginUser = async () => {
        let res = await authenticateLogin(login);
        if (!res)
            setError(true);
        else {
            setError(false)
            closeDialog()
            setAccount(login.username)
        }
    }
    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        closeDialog();
        setAccount(signup.username);
    }

    return (
        <Dialog open={open} onClose={closeDialog} >
            <DialogContent className={classes.component}>
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.loginLeft}>
                        <Typography style={{ fontWeight: '600', fontSize: '26px' }}>{account.heading}</Typography>
                        <Typography style={{ color: '#dbdbdb', marginTop: '10px' }}>{account.subHeading}</Typography>
                    </Box>
                    {account.view === 'login' ?
                        <Box className={classes.loginRight}>
                            <TextField onChange={(e) => onLoginChange(e)} name='username' label='Enter Email/Mobile number' />
                            <TextField onChange={(e) => onLoginChange(e)} name='password' label='Enter Password' />
                            {error && <Typography className={classes.error}>Invalid Username or Passoword</Typography>}
                            <Typography style={{ fontSize: '12px', marginTop: '10px', color: '#878787' }}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button variant='contained' onClick={() => loginUser()} style={{ background: '#fb641b', textTransform: 'none', fontWeight: '600', height: '3rem', color: '#FFFFFF' }}>Login</Button>
                            <Typography style={{ textAlign: 'center', color: '#878787', fontSize: '13px', marginBottom: '1rem' }}>OR</Typography>
                            <Button variant='contained' style={{ background: '#fff', color: '#2874f0', textTransform: 'none', fontWeight: '600', textTransform: 'none', boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)' }}>Request OTP</Button>
                            <Typography onClick={() => toggleUserAccount()} style={{ color: '#2874f0', marginTop: 'auto', textAlign: 'center', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer' }}  >New to Flipkart? Create an account</Typography>
                        </Box> :

                        <Box className={classes.loginRight}>
                            <TextField onChange={(e) => onChange(e)} name='username' label='Enter Username' />
                            <TextField onChange={(e) => onChange(e)} name='password' label='Enter Password' />
                            <TextField onChange={(e) => onChange(e)} name='email' label='Enter Email address' />
                            <Button onClick={() => signupUser()} variant='contained' style={{ background: '#fb641b', textTransform: 'none', fontWeight: '600', height: '3rem', color: '#FFFFFF' }}>Signup</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;