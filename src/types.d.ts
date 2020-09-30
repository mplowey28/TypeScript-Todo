type Todo = {
    id: string,
    text: string;
    complete: boolean;
}

type ToggleTodo = (selectedTodo: todo) => void;

type addTodo = (newTodo: string) => void;

type deleteTodo = (id: string) => void;