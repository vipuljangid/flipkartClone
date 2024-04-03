import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../redux/actions/productAction';
import { Box, makeStyles, Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core'
import clsx from 'clsx'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { DetailLeft } from './DetailLeft';




const useStyle = makeStyles({
  component: {
    marginTop: 55,
    background: '#F2F2F2',
  },
  wrapper: {
    margin: '0px 80px',
    background: '#fff',
    display: 'flex',
  },
  left: {
    minWidth: '39%',
    margin: '42px 0px 0px 0px',
    paddingLeft: 30,

  },
  right: {
    marginTop: '34px',
    '& > *': {
      marginTop: 12,
    },
  },
  smallText: {
    fontSize: '14px',
    '&>*': {
      fontSize: '14px',
    },
  },
  greyText: {
    color: '#878787'
  },
  assured: {
    width: 65,
    alignItems: 'center',
    marginLeft: '9px',

  },
  rating: {
    border: '2px solid green',
    borderRadius: '5px',
    padding: '2px 8px',
    color: 'white',
    background: ' green',
    fontWeight: '600',
    fontSize: '11px',
  },
  bold: {
    fontWeight: '600'
  },
  blueText: {
    color: '#2874f0',
    fontWeight: '600',
    cursor: 'pointer'

  },
  offer: {
    '&>*': {
      fontSize: '13px',
      marginTop: '12px',

    }
  },
  offerLogo: {
    color: '#00cc00',
    marginRight: '8px',
    fontSize: 15,

  },
})
const DetailView = ({ match }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))
  const { product } = useSelector(state => state.getProductDetails)

  // const {params} = useParams();
  useEffect(() => {
    dispatch(getProductDetails(match.params.id))
  }, [dispatch])
  return (
    <Box className={classes.component}>
      {product && Object.keys(product).length &&
        <Box className={classes.wrapper}>
          <Box className={classes.left}>
            <DetailLeft product={product}/>
          </Box>
          <Box className={classes.right}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography className={clsx(classes.smallText, classes.greyText)}><span className={classes.rating}> 4.3<img src="star" /></span> 25 Ratings & 5 Reviews <span >< img src={fassured} alt="Flipkart Assured" className={classes.assured} /></span></Typography>
            <Typography>
              <span style={{ fontSize: '30px', fontWeight: '500' }}>₹{product.price.cost}</span> &nbsp; &nbsp; &nbsp;
              <span className={classes.greyText} style={{ fontSize: '16px' }}><strike>₹{product.price.mrp}</strike></span> &nbsp; &nbsp; &nbsp;
              <span style={{ fontSize: '16px', color: '#388e3c', fontWeight: '550' }}>{product.price.discount}off</span> &nbsp; &nbsp; &nbsp;
            </Typography>

            <Box className={classes.offer}>
              <Typography style={{ fontWeight: '700', fontSize: '16px' }}>Available offers</Typography>
              <Typography><LocalOfferIcon className={classes.offerLogo} /><span className={classes.bold}>Bank Offer </span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card <span className={classes.blueText}>T&C</span></Typography>
              <Typography><LocalOfferIcon className={classes.offerLogo} /><span className={classes.bold}>Special Price </span> Get extra ₹1081 off (price inclusive of discount) <span className={classes.blueText}>T&C</span></Typography>
              <Typography><LocalOfferIcon className={classes.offerLogo} /><span className={classes.bold}>Partner Offer </span>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100* <span className={classes.blueText}>Know More</span></Typography>
              <Typography> <LocalOfferIcon className={classes.offerLogo} /><span className={classes.bold}>Partner Offer </span>Order More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction <span style={{ marginLeft: '23px' }} className={classes.blueText}>Know More</span></Typography>
              <Typography><LocalOfferIcon className={classes.offerLogo} /><span className={classes.blueText}>View 1 more offer</span></Typography>
            </Box>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontWeight: '600', verticalAlign: 'baseLine' }} className={classes.greyText}>Delivery</TableCell>
                  <TableCell>{date.toDateString()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: '600', verticalAlign: 'baseLine' }} className={classes.greyText}>Warrenty</TableCell>
                  <TableCell>1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase <span className={classes.blueText}>Know More</span></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: '600', verticalAlign: 'baseLine' }} className={classes.greyText}>Seller</TableCell>
                  <TableCell className={classes.smallText}>
                    <Typography><span className={classes.blueText}>DealsParadize</span> </Typography>
                    <Typography> 7 Days Replacement Policy</Typography>
                    <Typography> View <span className={classes.blueText}>more sellers</span>  starting from ₹6,985</Typography>
                  </TableCell>
                </TableRow>
                <TableRow >
                  <TableCell colSpan={2}>
                    <img src={sellerURL} alt="404" width='344px' />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: '600', verticalAlign: 'baseLine' }} className={classes.greyText}>Description</TableCell>
                  <TableCell>{product.description}<span className={classes.blueText}>Read More</span></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      }

    </Box>
  )
}

export default DetailView;
