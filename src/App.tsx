import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const initialTodos: Array<Todo> = [
  {text: "Take out the do", complete: true},
  {text: "Mop the floor", complete: false}
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
  newTodo.trim() !== '' && setTodos([...todos, { text: newTodo, complete: false }]);
}

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo}/>
    </React.Fragment>
  );
}

export default App;
