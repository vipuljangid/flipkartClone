//HOME CATEGORY

import { Box,makeStyles,Typography } from '@material-ui/core'
import React from 'react'
import { CategoryData } from '../Constants/CatergoryData'
 const useStyle=makeStyles({
     component:{
         display:'flex',
         margin:'62px  7px 0 7px',
         justifyContent:'space-between'
     },
       CategoryData:{
       textAlign:'center'
      },
      CategoryText:{
        textAlign:'center'
      },
      CategoryImg:{
       textAlign:'center',
       width:'65px'
     }
 })

const Category = () => {
    const classes=useStyle();
  return (
    <Box className={classes.component}>
        {CategoryData.map(data=>(
            <Box className={classes.CategoryData} >
              <img className={classes.CategoryImg} src={data.url}/>
              <Typography className={classes.CategoryText} >{data.text}</Typography>
            </Box>
        ))}
    </Box>
  )
}

export default Category
