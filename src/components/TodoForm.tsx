"use client"
import React, { useState } from 'react'
import { db } from '../dataAccess/Firebase'
import { collection, addDoc } from 'firebase/firestore'

const TodoForm: React.FC = () => {
    const [value, setValue] = useState("")

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (value.trim() === '') {
            alert('Enter a valid todo')
            return
        }
        
        addDoc(collection(db, 'Todos'), {
            text: value,
            completed: false,
        })
        .then(() => {
            setValue('')
        })
        .catch(() => {
            alert('Something went wrong while adding the todo. Please try again later!')
        })
    }

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='todo-input' 
                placeholder='Enter a todo'
                value={value}
                onChange={handleInputValue}
            />
            
            <button type='submit' className='todo-btn'>Add Todo</button>
        </form>
    )
}

export default TodoForm