import mongoose from "mongoose";
// import { products } from "../constants/Products";

const productSchema= new mongoose.Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String,
})

const Product=mongoose.model('product',productSchema);
export default Product;

