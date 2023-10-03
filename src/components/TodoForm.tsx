"use client"
import React, { useState } from 'react'
import { db } from '../DataAccess/Firebase'
import { collection, addDoc } from 'firebase/firestore'

const TodoForm: React.FC = () => {

    const [value, setValue] = useState("")

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (value.trim() !== '') {
            await addDoc(collection(db, 'Todos'), {
                text: value,
                completed: false
            })
            setValue('');
        } else {
            alert('Enter a valid todo')
            return
        }
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='todo-input' 
                placeholder='Enter a todo'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            
            <button type='submit'className='todo-btn'>Add Todo</button>
        </form>
    )
}

export default TodoForm;