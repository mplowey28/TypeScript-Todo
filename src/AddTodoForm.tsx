import React, { useState, ChangeEvent, FormEvent } from 'react'
import './AddTodoForm.css';

interface AddTodoFormProps {
    addTodo: addTodo
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value); 

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    };

    return (
      <form>
          <input type="text" value={newTodo} onChange={handleChange}></input>
          <button type="submit" onClick={handleSubmit}>Add Todo</button>
      </form>
    )
}

export default AddTodoForm
