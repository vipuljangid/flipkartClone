import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles, Box, Typography, Button } from '@material-ui/core'
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productAction';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const useStyle = makeStyles({
  component: {
    marginTop:12,
    background: '#FFFFFF',
  },
  img: {
    height: 120,
    // background:'#FFFFFF'
  },
  deal: {
    padding: '12px 14px',
    display: 'flex',
    // alignItems:'center',
    // justifyConte   nt:'center',
  },
  dealText: {
    fontWeight: '700',
    lineHeight: '35px',
    display: 'flex',
    textAlign: 'center',
    fontSize:'22px'
    
  },
  dealTitle: {
    display: 'flex',
    alignItems: 'center',
    color: '#7f7f7f',
  },
  button: {
    marginLeft: 'auto',
    backgroundColor: '#2874f0',
    borderRadius: '2px '
  },
  text: {
    fontSize: 14,
    marginTop: '7px',
  },
  wrapper:{
    padding:'25px 0px'
  },




})


const Slide = ({ title, timer}) => {
  const classes = useStyle();
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  
  const renderer = ({ hours, minutes, seconds }) => {
    return <span>{hours} :{minutes}   :{seconds} Left</span>;
  };

  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;
  // console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts())
}, [dispatch])
  
  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>
          {title}
        </Typography>
        <Box className={classes.dealTitle}>
          {
            timer &&
            <>
              <img src={timerURL} style={{ width: '25px', padding: '0px 5px' }} />
              <Countdown date={Date.now() + 5.04e+7}
                renderer={renderer} />
            </>
          }
        </Box>
        <Button variant="contained" color="primary" className={classes.button}>View All</Button>
      </Box>
        <hr/>
        
      <Carousel responsive={responsive}
        infinite={true}
        draggable={true}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        showDots={false}
      >
        {
          products?.map(product => (
            <Link to={`product/${product.id}`}>
            <Box textAlign="center" className={classes.wrapper}>
              <img src={product.url} className={classes.img} />
              <Typography className={classes.text} style={{ fontWeight: '600' }}>{product.title.shortTitle}</Typography>
              <Typography className={classes.text} style={{ color: 'green' }}>{product.discount}</Typography>
              <Typography className={classes.text} style={{ opacity: '0.7' }}>{product.tagline}</Typography>
            </Box>
          </Link>
          ))
        }
      </Carousel>
    </Box>
  )
}

export default Slide





