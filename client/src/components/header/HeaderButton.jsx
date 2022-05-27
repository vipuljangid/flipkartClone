//HEADER BUTTON

import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { LoginContext } from "../context/contextProvider";
import { useSelector } from 'react-redux';
import LoginDialog from "../login/Login";
import Profile from "./Profile";

const useStyle = makeStyles({
    login: {
        background: '#FFFFFF',
        color: '#2874f0',
        fontWeight: '700',
        textTransform: 'none',
        padding: '3px 39px',
        borderRadius: '1px'
    },
    component: {
        margin: '0  120px 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: '50px',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#FFFFFF'
        }
    },
    cart: {
        display: 'flex',
    }

})
const HeaderButton = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext)
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;


    const openDialog = () => {
        setOpen(true)
    }
    return (
        <Box className={classes.component}>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <Link >
                        <Button variant='contained' onClick={openDialog} className={classes.login} >Login</Button>
                    </Link>
            }
            <Box style={{ marginTop: '5px' }}><Typography>More</Typography></Box>
            <Link to='/cart' className={classes.cart}>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
                <Typography>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
    )
}

export default HeaderButton;