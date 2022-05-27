
import mongoose from 'mongoose';

const url=`mongodb+srv://vipul:vipul@cluster0.gwcdj.mongodb.net/cluster0?retryWrites=true&w=majority`;
const Connection = async()=>{

    try {
         await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

}
export default Connection;