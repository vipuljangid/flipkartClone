import axios from 'axios'
import { host } from '../../constant'


export const authenticateSignup= async(user)=>{
    try {
        return await axios.post(`${host}signup`,user)
    } catch (error) {
        console.error('Error: while calling signup api',error.message)
        
    }
}

export const authenticateLogin= async(user)=>{
    try {
        return await axios.post(`${host}login`,user)
    } catch (error) {
        console.error('Error: while calling login api',error.message)
        
    }
}