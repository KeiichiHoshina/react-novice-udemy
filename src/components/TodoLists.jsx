import React, { useEffect, useState } from "react";
import Header from "./Header";

const TodoLists = ({ userId }) => {
  const [todos, setTodos] = useState([]);

  const [word, setWord] = useState("");

  const handleCreate = () => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        title: word,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setTodos([...todos, json]))
      .catch((error) => console.log(error));
  };

  const handleUpdate = (id, completed) => {
    const correctId = id - (userId - 1) * 20;

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...todos[correctId - 1],
        completed: !completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) =>
        setTodos(
          todos.map((todo, index) => (index === correctId - 1 ? json : todo))
        )
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <React.Fragment>
      <Header />
      <ul className="todoWrapper">
        {todos.map((todo, todoIndex) => (
          <li key={todoIndex} className="todo">
            <div>{todo.title}</div>
            <button
              onClick={() => handleUpdate(todo.id, todo.completed)}
              className={`todoBtn ${
                todo.completed ? "completed" : "incomplete"
              }`}
            >
              {todo.completed ? "完了" : "未完了"}
            </button>
          </li>
        ))}
        <li className="todo">
          <input type="text" onChange={(e) => setWord(e.target.value)} />
          <button className="todoBtn createBtn" onClick={handleCreate}>
            追加
          </button>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default TodoLists;
