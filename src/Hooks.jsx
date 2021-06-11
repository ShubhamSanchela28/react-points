import React, { useEffect, useReducer, useRef, useState } from "react";
import { UseInfiniteScroll } from "./UseInfiniteScroll";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

function Hooks() {
  let infiniteScroll = UseInfiniteScroll();

  const [tableContent, setTableContent] = useState([]);

  const [count, setCount] = useState(0);
  const [name, setName] = useState({ fname: "fname", lname: "lname" });
  const [title, setTitle] = useState("BIO");

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((json) => setTableContent(json));
    document.title = `You clicked ${count} times`;
    setName({ fname: "Shubham", lname: "Sanchela" });
    localStorage.setItem(title, "React Hook Application");
  },[]);

  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <div>
      <h1>This Hooks Page</h1>
      Count : {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <br />
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <br />
      You Clicked {count} times <br />
      <button onClick={() => setCount(count + 1)}>Click ME</button>
      <h1>Title : {title} </h1>
      <h1>Name : {name.fname} </h1>
      <h1>Surname : {name.lname} </h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {tableContent.slice(0, infiniteScroll).map((content) => {
            return (
              <tr key={content.id}>
                <td style={{ paddingTop: "10px" }}>{content.userId}</td>
                <td style={{ paddingTop: "10px" }}>{content.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Hooks;
