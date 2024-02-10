import axios from 'axios'
const BASE_URL = 'http://localhost:8080';

interface LoginDataProps{

}
interface RegisterDataProps{
role?:string,
name:string,
email:string,
password:string
}
export const fetchUser = async(loginData:LoginDataProps)=>{
    console.log(loginData);
    
    try {
        const usersResponse = await axios.post(`${BASE_URL}/user/login`,{loginData}, {
            headers: {
              "Content-Type": "application/json",
            }
            });
        
            return usersResponse.data;
    } catch (error:any) {
        throw new Error(error.response.data.error); // Throw an error with the message from the backend
    }
   
    }
export const fetchRegister = async(registerData:RegisterDataProps)=>{
    console.log(registerData);
    
    try {
        const usersResponse = await axios.post(`${BASE_URL}/user/register`,{registerData}, {
            headers: {
              "Content-Type": "application/json",
            }
            });
       
            return usersResponse.data; // Return only the data part of the response
        } catch (error:any) {
            throw new Error(error.response.data.error); // Throw an error with the message from the backend
        }
   
    }