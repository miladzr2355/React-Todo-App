import { useState, useEffect } from 'react'
import { onSnapshot, query, collection, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../dataAccess/Firebase'
import { ITodo } from '../types/types'

export function useFirebaseTodoList() {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [error, setError] = useState<string | null>(null)
  
    useEffect(() => {
        const q = query(collection(db, 'Todos'))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todosList: ITodo[] = []

            querySnapshot.forEach((doc) => {
                todosList.push({
                    id: doc.id,
                    task: doc.data().text,
                    completed: doc.data().completed,
                })
            })

            setTodos(todosList)
        }, () => {
            setError('Error fetching todos, try again later!');
        })
  
        return () => unsubscribe()
    }, [])
  
    const toggleComplete = async (todo: ITodo) => {
        try {
            await updateDoc(doc(db, 'Todos', todo.id), {
                completed: !todo.completed,
            }) 
        } catch (e) {
            setError('Error toggling complete, try again later!')
        }
    }
  
    const deleteTodo = async (todo: ITodo) => {
        try {
            await deleteDoc(doc(db, 'Todos', todo.id))
        } catch (e) {
            setError('Error deleting todo, try again later!')
        }
    }
  
    return {
        todos,
        toggleComplete,
        deleteTodo,
        error
    }
}