'use client'
import React, { useState } from 'react'
import TextInput from '../components/textInput';
import { register, RegisterData } from '../auth';


export default function Page() {
    const [formData, setFormData] = useState<RegisterData>({
        email: '',
        username: '',
        password: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    }
    const handleSubmit = async () => {
        console.log(await register(formData))
    }

    return (
        <div className=''>
            <h2 className='text-center text-5xl font-bold my-24'>Register</h2>
            <form className="flex flex-col my-10 mx-[10vw] lg:mx-[30vw] gap-2">
                <TextInput type='email' name='Email' id='email' placeholder='email@gmail.com' handleChange={handleChange}></TextInput>
                <TextInput name='Username' id='username' placeholder='username' handleChange={handleChange}></TextInput>
                <TextInput type='password' name='Password' id='password' placeholder='************' handleChange={handleChange}></TextInput>

                <button className='border-2 border-black rounded text-black text-lg px-2 py-1 my-4 hover:text-white hover:bg-black mx-auto transition-colors duration-500 ease-out'
                    type="button" onClick={handleSubmit}>Register</button>
            </form>
        </div>
    )
}

