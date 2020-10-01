import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import * as uuid from "uuid";

const initialTodos: Array<Todo> = [
  {text: "Take out the do", complete: true, id: uuid.v4()},
  {text: "Mop the floor", complete: false, id: uuid.v4()}
];

const App: React.FC = () => {
const [todos, setTodos] = useState(initialTodos);

const toggleTodo: ToggleTodo = selectedTodo => {
  const newTodos = todos.map(todo => {
    if (todo === selectedTodo) {
      return {
        ...todo,
        complete: !todo.complete
      };
    }
    return todo
  });
  setTodos(newTodos)
}

const addTodo: addTodo = newTodo => {
  newTodo.trim() !== '' && setTodos([...todos, { text: newTodo, complete: false, id: uuid.v4() }]);
}

const deleteTodo: deleteTodo = id => {
  setTodos(todos => todos.filter(item => item.id !== id))
}

  return (
    <React.Fragment>
      <AddTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </React.Fragment>
  );
}

export default App;
