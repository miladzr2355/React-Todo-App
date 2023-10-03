"use client"
import React, { useState } from 'react'

interface TodoFormProps {
    addTodo: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {

    const [value, setValue] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (value.trim() !== '') {
            addTodo(value);
            setValue('');
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
            <button type='submit'className='todo-btn'>
                Add Todo
            </button>
        </form>
    )
}

export default TodoForm;