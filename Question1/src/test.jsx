import "./App.css";
import React, { useReducer } from "react";

const ADD_ITEM = "ADD_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";
const CLEAR_LIST = "CLEAR_LIST";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        { name: action.payload, serialNumber: state.length + 1 },
      ];
    case UPDATE_ITEM:
      return state.map(item=>
          item.id===action.payload.id  ? {...item,name:action.payload.name} : item
      )
    case CLEAR_LIST:
      return [];
    default:
      return state;
  }
};

function App() {
  const [items, dispatch] = useReducer(reducer, []);

  const addItem = (itemName) => {
    dispatch({ type: ADD_ITEM, payload: itemName });
  };
  const updateItem = (id, newName) => {
    dispatch({ type: UPDATE_ITEM, payload: { id, name: newName } });
  };
  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  return (
    <>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              Serial Number:{item.serialNumber},Name:{item.name}
            </li>
          ))}
        </ul>
        <button onClick={() => addItem("New Item")}>Add Item</button>
        <button onClick={() => updateItem(1, "Updated Item")}>
          Update Item
        </button>
        <button onClick={clearList}>Clear List</button>
      </div>
    </>
  );
}
export default App;
