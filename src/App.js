import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  deleteTodoAction,
  todoAddAction,
  getTodosAction,
  editingTodoAction,
  todoEditAction,
  toggleTodoAction,
} from "./actions/todoActions";

function App() {
  const [name, setName] = useState("");

  const todos = useSelector((state) => state.todos);
  const todoupdate = useSelector((state) => state.todoupdate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAction());
  }, []);

  useEffect(() => {
    if (todoupdate) {
      setName(todoupdate.name);
    }
  }, [todoupdate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoupdate) {
      dispatch(todoEditAction(name, todoupdate.id));
    } else {
      dispatch(
        todoAddAction({
          id: Date.now(),
          name: name,
        })
      );
    }

    setName("");
  };

  const deleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  };

  const editTodo = (todo) => {
    dispatch(editingTodoAction(todo));
  };

  const toggleTodo = (id) => {
    dispatch(toggleTodoAction(id));
  };

  return (
    <div className="App">
      <h1>Todo app with Redux</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add todo.."
        />
        <button>{todoupdate ? "Edit todo" : "Add todo"}</button>
      </form>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              textDecoration: todo.completed && "line-through",
            }}
          >
            {todo.name}
          </p>
          <input type="checkbox" onClick={() => toggleTodo(todo.id)} />
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
          <button onClick={() => editTodo(todo)}>Edit todo</button>
        </div>
      ))}
    </div>
  );
}

export default App;
