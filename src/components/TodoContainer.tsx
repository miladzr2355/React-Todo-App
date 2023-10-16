"use client"
import TodoForm from './TodoForm'
import Todo from './Todo'
import { useFirebaseTodoList } from '../hooks/useFirebaseTodoList'

const TodoContainer: React.FC = () => {
    const { todos, toggleComplete, deleteTodo, error } = useFirebaseTodoList()
    
    return (
        <div className='TodoWrapper'>
            <h1>Plan your day!</h1>

            <TodoForm/>
            
            {
                todos.map((todo) => (
                    <Todo 
                        task={todo} 
                        key={todo.id} 
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                    />
                ))
            }

            {error && <div className="ErrorMessage">{error}</div>}
        </div>
    )
}

export default TodoContainer