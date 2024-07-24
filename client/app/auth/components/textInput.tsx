import React from 'react'

TextInput.defaultProps = {
    type: 'text',
    placeholder: ''
}

interface propTypes {
    type: string,
    id: string,
    placeholder: string,
    name: string,
    handleChange: React.ChangeEventHandler
}

export default function TextInput({ type, id, placeholder, name, handleChange }: propTypes) {
    return (
        <div className='flex flex-col'>
            <label className='font-bold text-lg'
            htmlFor={id}>{name}</label>
            <input className='p-1 border-2 border-black rounded'
            type={type} placeholder={placeholder} id={id} onChange={handleChange} />
        </div>
    )
}
