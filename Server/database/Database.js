
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config()
const url=process.env.MONGODB

const Connection = async()=>{

    try {
         await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfuly');
    } catch(error) {
        console.log('Error: ', error.message);
    }

}
export default Connection;