//HOME

import { makeStyles, Box } from '@material-ui/core'
import React, { useEffect } from 'react'
// import { products } from '../Constants/CatergoryData';
import Banner from './Banner'
import Category from './Category'
import MidSection from './MidSection'
import Slide from './slide'

const useStyles = makeStyles({
  component: {
    background: '#F2F2F2',
    padding: '14px 8px'
  },
  imageAd: {
    width: '15%',
    background:'#FFFFFF',
    padding:5 ,
    margin:'12px 0px 0px 10px'
  }

})

const Home = () => {
  const adURL = 'https://rukminim2.flixcart.com/flap/464/708/image/2af118ba18955d4c.jpg?q=70';
  const classes = useStyles();
  
  return (
    <>
      <Category />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: 'flex' }}>
          <Box style={{ width: '84%' }}>
            <Slide title='Deals Of The Day' timer={true} />
          </Box>
          <Box className={classes.imageAd}>
          <img src={adURL} style={{width:'205px'}} />
          </Box>
        </Box>
        <Box>
          <Slide title='Top Deals On Fashion' timer={false} />
          <MidSection />
          <Slide title='Top Fashion Styles' timer={false}  />
          <Slide title="Men's Footwear" timer={false}  />
          <Slide title='Back to Office Essentials' timer={false}  />
          <Slide title='Top Offers On' timer={false}  />
          <Slide title='Best of Appliances' timer={false}  />
          <Slide title='Best Price On Fashion' timer={false}  />
          <Slide title='Best of Electronics' timer={false}  />
          <Slide title='Trending Offers' timer={false}  />
          <Slide title='Holi Essentials, Curated for You' timer={false}  />
          <Slide title='Top Deals' timer={false}  />
          <Slide title='Home Makeover' timer={false}  />
          <Slide title='Best Battery Phones' timer={false}  />
          <Slide title='Fashion For Everyone' timer={false}  />
        </Box>
      </Box>
    </>
  )
}

export default Home;