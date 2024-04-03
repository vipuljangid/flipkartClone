//HOME MIDSECTION

import { Box, makeStyles } from '@material-ui/core';
import React from 'react'
import { ImageURL } from '../Constants/CatergoryData'

const useStyle = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 15,
  }
})

const MidSection = () => {
  const classes = useStyle();
  return (
    <Box className={classes.wrapper}>
      {ImageURL.map(image => (
        <img src={image} style={{ width: '33%' }} />
      ))}
    </Box>
  )
}

export default MidSection