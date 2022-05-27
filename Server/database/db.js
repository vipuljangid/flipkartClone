
import mongoose from 'mongoose';


const Connection = async()=>{
    const URL=`mongodb://localhost:27017/flipkart?readPreference=primary&appname=MongoDB%20Compass&ssl=false`
    try {
         await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

}
export default Connection;