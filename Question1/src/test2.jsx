import "./App.css";
import React, { useReducer } from "react";

const initialState = {
  toDos: [],
  toDo: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return { ...state, toDos: action.payload };
    case "SET_TODO":
      return { ...state, toDo: action.payload };
    case "ADD_TODO":
      return { ...state, toDos: [...state.toDos, action.payload] };
    case "TOGGLE_TODO":
      return {
        ...state,
        toDos: state.toDos.map((todo) =>
          todo.id === action.payload ? { ...todo, status: !todo.status } : todo
        ),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={state.toDo}
          onChange={(e) =>
            dispatch({ type: "SET_TODO", payload: e.target.value })
          }
          type="text"
          placeholder="🖊 Add item..."
        />
        <i
          onClick={() =>
            dispatch({
              type: "ADD_TODO",
              payload: { id: Date.now(), text: state.toDo, status: false },
            })
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {state.toDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={() =>
                  dispatch({ type: "TOGGLE_TODO", payload: obj.id })
                }
                value={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i
                onClick={() =>
                  dispatch({ type: "REMOVE_TODO", payload: obj.id })
                }
                className="fas fa-times"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
