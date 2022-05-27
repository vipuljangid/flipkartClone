// import React from 'react'
import { products } from './constants/Products.js'
import Product from './model/productSchema.js'
products

const defaultData = async() => {
        try {
          await Product.deleteMany({});
          await Product.insertMany(products);
          console.log('Data is inserted in database')
        } catch (error) {
          console.error('Error :',error.message )
          
        }
}

export default defaultData