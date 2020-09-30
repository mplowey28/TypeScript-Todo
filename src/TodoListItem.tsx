import React from 'react'
import "./TodoListItem.css"

interface TodoListItemProps {
    todo: Todo
    toggleTodo: ToggleTodo
    deleteTodo: deleteTodo
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
    return (
    <li>
        <label className={todo.complete ? "complete" : undefined }>
            <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
            {todo.text}
            {todo.complete && <button onClick={() => deleteTodo(todo.id)}>X</button>}
        </label>
    </li>)
}

export default TodoListItem
