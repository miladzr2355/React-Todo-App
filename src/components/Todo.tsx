"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ITodo } from '../types/types'

interface TodoProps{
    task: ITodo
	toggleComplete: (todo: ITodo) => void
	deleteTodo: (todo: ITodo) => void
}

const Todo: React.FC<TodoProps> = ({ task, toggleComplete, deleteTodo }) => {
	const handleComplete = () => {
		toggleComplete(task)
	}

	const handleDeleteTodo = () => {
		deleteTodo(task)
	};

	return (
		<div className='Todo'>
			<div className='TodoInner'>
				<input 
					className='TodoInput' 
					type="checkbox" 
					onChange={handleComplete}
					checked={task.completed}
				/>

				<p className={`${task.completed ? 'completed' : 'incompleted'}`}>
					{task.task}
				</p>
			</div>

			<div>
				<button className='SubmitNewTodoBtn' onClick={handleDeleteTodo}>
					<FontAwesomeIcon icon={faTrash}/>
				</button>
			</div>
		</div>
	)
}

export default Todo