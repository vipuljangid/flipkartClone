import { Box, Button, makeStyles } from '@material-ui/core';
import React from 'react'
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const useStyle=makeStyles({
    image: {
        padding: '15px 17px',
        border: '1px solid #f0f0f0',
        width: '96%',
    
      },
      cart: {
        background: '#ff9f00',
        color: '#FFF',
        width: '47%',
        // marginLeft:'12px',
        padding: '18px 0px',
        borderRadius: '2px'
      },
      buy: {
        background: '#fb641b',
        color: '#FFF',
        width: '47%',
        padding: '18px 0px',
        borderRadius: '2px'
      },
      icons: {
        marginRight: '4px',
        height: '20px',
        width: '20px'
      }
})

export const DetailLeft = ({ product }) => {
    const classes=useStyle();
    const dispatch=useDispatch();
    const addItem=()=>{
        dispatch(addToCart(product.id))
    }
    return (
        <Box>
            <img src={product.detailUrl} className={classes.image} /><br />
            <Button variant='contained' onClick={()=>addItem()} style={{ marginRight: '2%' }} className={classes.cart}><Cart className={classes.icons} /> Add to cart</Button>
            <Button variant='contained' className={classes.buy}><Flash className={classes.icons} /> Buy Now</Button>
        </Box>
    )
}

// export default DetailLeft;