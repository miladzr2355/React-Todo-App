"use client"
import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { ITodo } from '../types/types'
import { db } from '../DataAccess/Firebase'
import { query, collection, onSnapshot, updateDoc, deleteDoc , doc } from 'firebase/firestore'

const TodoContainer: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const q = query(collection(db, 'Todos'))

        const unsubsribe = onSnapshot(q, (querySnapshot) => {
            let todosList: ITodo[] = [];

            querySnapshot.forEach(doc => {
                todosList.push({id: doc.id, task: doc.data().text, completed: doc.data().completed })
            });

            setTodos(todosList)
        })

        return () => unsubsribe();
    }, [])

    const toggleComplete = async(todo: ITodo) => {
        await updateDoc(doc(db, 'Todos', todo.id), {
            completed: !todo.completed
        })
    }

    const deleteTodo = async(todo: ITodo) => {
        await deleteDoc(doc(db, "Todos", todo.id));
    }
    
    return (
        <div className='TodoWrapper'>
            <h1>Plan your day!</h1>

            <TodoForm/>
            
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