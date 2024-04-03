//BACKEND

import  express  from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './database/Database.js';
import defaultData from './defaults.js';
import router from './routes/router.js';
import dotenv from 'dotenv';
const app=express();

dotenv.config()
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
const port=8000;
app.use('/',router)
const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD
Connection();
defaultData();
app.listen(port,()=>{
    console.log(`Flipkart clone server is running at port:${port}`) 
})