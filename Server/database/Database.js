
import mongoose from 'mongoose';

const url=`mongodb+srv://vipul:vipul1@payroll.7r1ghhm.mongodb.net/Flipkart?retryWrites=true&w=majority`;
const Connection = async()=>{

    try {
         await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfuly');
    } catch(error) {
        console.log('Error: ', error.message);
    }

}
export default Connection;