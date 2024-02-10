import axios from 'axios'
const BASE_URL = 'http://localhost:8080';

interface LoginDataProps{

}
export const fetchUser = async(loginData:LoginDataProps)=>{
    console.log(loginData);
    
    try {
        const usersResponse = await axios.post(`${BASE_URL}/users`,{loginData}, {
            headers: {
              "Content-Type": "application/json",
            }
            });
        
            return usersResponse.data;
    } catch (error:any) {
        throw new Error(`Failed to fetch users. ${error.message}`);
    }
   
    }