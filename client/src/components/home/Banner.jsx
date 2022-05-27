//HOME BANNER

import { makeStyles } from '@material-ui/core'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { BannerData } from '../Constants/CatergoryData'

const useStyle=makeStyles({
  image:{
    width:'100%',
    height:'280px'
  }
})

const Banner = () => {
  const classes=useStyle();
  return (
    <Carousel 
    autoPlay='true'
    animation='slide'
    indicators={false}
    navButtonsAlwaysVisible={true}
    >
    {
        BannerData.map(image=>(
          <img src={image} className={classes.image}/>
        ))
    }
</Carousel>
  )
}

export default Banner