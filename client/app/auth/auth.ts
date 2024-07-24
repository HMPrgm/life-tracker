import axios from 'axios'


export interface RegisterData {
    email: string;
    username: string;
    password: string;
}
export async function register(input:RegisterData): Promise<any> {
    try {
        alert("Here")
        const response = await axios.post("http://localhost:5000/auth/register", input)
        alert(response)
        return response;
    } catch (e) {
        console.log(e)
    }
}