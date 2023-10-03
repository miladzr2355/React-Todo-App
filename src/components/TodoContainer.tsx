"use client"
import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { ITodo }from '../types/types'
import { v4 as uuidv4 } from 'uuid'
uuidv4();

const TodoContainer: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (todo: string) => {
        const newTodo: ITodo = {
          id: uuidv4(),
          task: todo,
          completed: false
        };

        setTodos([...todos, newTodo]);
    };

    const toggleComplete = (taskId: string) => {
        setTodos(todos.map(todo => 
            todo.id === taskId ? 
            {...todo, completed: !todo.completed} : 
            todo))
    }

    const deleteTodo = (taskId: string) => {
        setTodos(todos.filter(todo => todo.id !== taskId))
    }
    
    return (
        <div className='TodoWrapper'>
            <h1>Plan your day!</h1>

            <TodoForm addTodo={addTodo}/>
            
            {
                todos.map((todo, index) => (
                    <Todo 
                        task={todo} 
                        key={index} 
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                    />
                ))
            }
        </div>
    )
}

export default TodoContainer;