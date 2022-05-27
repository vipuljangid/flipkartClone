//PROFILE

import React, { useState } from 'react'
import { makeStyles, Menu, MenuItem, Typography } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyle = makeStyles({
    component: {
        margin: '2.5rem',
    },
    logout: {
        marginLeft:'0.8rem',
        fontSize:'16px'
    }
})

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false)
    const classes = useStyle();
    const handleClose = () => {
        setOpen(false);
    }
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    const logout=()=>{
        setAccount('');
    }
    return (
        <>
            <Typography onClick={handleClick} style={{ marginTop: '5px', cursor: 'pointer' }}>{account}</Typography>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
                <MenuItem onClick={()=>{handleClose(); logout()}} >
                    <PowerSettingsNewIcon fontSize='small' color='primary'/>
                <Typography className={classes.logout}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Profile;