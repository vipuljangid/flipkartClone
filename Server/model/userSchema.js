import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
   
    username:{
        type:String,
        required:true,
        trim:true,
        min:2,
        max:20,
        unique:true, 
    },
    email:{
        type:String,
      required:false,
      unique:false,  
    },
    password:{
        type:String,
        required:true,
        trim:true,
        min:2,
        max:20, 
        
    }
})
const User=mongoose.model('user',userSchema);
export default User;