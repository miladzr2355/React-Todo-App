"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ITodo }from '../types/types'

interface TodoProps{
    task: ITodo;
	toggleComplete: (id: string) => void;
	deleteTodo: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ task, toggleComplete, deleteTodo }) => {
	return (
		
		<div className='Todo'>
			<div className='TodoInner'>
				<input className='TodoInput' type="checkbox" onChange={() => toggleComplete(task.id)}/>

				<p className={`${task.completed ? 'completed' : 'incompleted'}`}>
					{task.task}
				</p>
			</div>

			<div>
				<FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
			</div>
		</div>
	)
}

export default Todo