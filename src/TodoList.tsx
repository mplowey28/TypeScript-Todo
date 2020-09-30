import React from 'react'
import TodoListItem from './TodoListItem'
interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo; 
    deleteTodo: deleteTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <ul>
           {todos.map(todo => {
               return <TodoListItem key={todo.id} todo={todo}  toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
           })} 
        </ul>
    )
}

export default TodoList
