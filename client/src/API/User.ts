import axios from 'axios'

const loginRequest = async (loginPayload: any) => {
    const response = await axios.get('http://localhost:3001/exercises')
    console.log(response);
}

export default {loginRequest}