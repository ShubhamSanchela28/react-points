import React, { useState } from "react";

function LiftingTodo() {
  const [todos, setTodos] = useState(["item1", "item2", "item3"]);
  return (
    <div>
      <TodoCount todos={todos} />
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

export default LiftingTodo;

function TodoCount() {
  return <div>Total Todos : </div>;
}

function TodoList({ todos }) {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}

function AddTodo({ setTodos }) {
  function handleSubmit(event) {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    setTodos((prevTodos) => [...prevTodos, todo]);
    console.log(todo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" id="todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}
