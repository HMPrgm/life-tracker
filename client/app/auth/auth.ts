import axios from 'axios'


export interface RegisterData {
    email: string;
    username: string;
    password: string;
}
export async function register(input:RegisterData): Promise<any> {
    try {
        const response = await axios.post("http://localhost:5000/auth/register", input)
        return response;
    } catch (e) {
        console.log(e)
    }
}

export interface LoginData {
    email: string;
    password: string;
}
export async function login(input:LoginData): Promise<any> {
    try {
        console.log(input)
        const response = await axios.post("http://localhost:5000/auth/login", input)
        return response;
    } catch (e) {
        console.log(e)
    }
}
export async function logout(): Promise<any> {
    try {
        const response = await axios.get("http://localhost:5000/auth/logout")
        return response;
    } catch (e) {
        console.log(e)
    }
}

export async function getUserData(): Promise<any> {
    try {
        const response = await axios.get("http://localhost:5000/auth/checkAuth")
        console.log(response.data)
    } catch (e) {
        console.log(e)
    }
}