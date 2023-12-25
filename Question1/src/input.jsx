import React, { useReducer, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

const ADD_TODO = "ADD_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";
const CLEAR_LIST = "CLEAR_LIST";
const SET_TODOS = "SET_TODOS";
const SET_TODO = "SET_TODOS";

const initialState = {
  toDos: [],
  toDo: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return { ...state, toDo: action.payload };
    case SET_TODOS:
      return { ...state, toDos: action.payload };
    case ADD_TODO:
      return { ...state, toDos: [...state.toDos, action.payload] };
    case "TOGGLE_TODO":
      return {
        ...state,
        toDos: state.toDos.map((todo) =>
          todo.id === action.payload ? { ...todo, status: !todo.status } : todo
        ),
      };

    case "SETUPDATE_TODO":

    case "UPDATE_TODO":
      return {
        ...state,
        toDos: state.toDos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isEditing: !todo.isEditing }
            : todo
        ),
      };

    case CLEAR_LIST:
      return [];
    default:
      return state;
  }
};

function Input() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isupdate, setisupdate] = useState(false);

  const setTodo = (e) => {
    dispatch({ type: SET_TODO, payload: e.target.value });
  };
  const AddTodo = () => {
    dispatch({
      type: ADD_TODO,
      payload: {
        id: Date.now(),
        text: state.toDo,
        status: false,
      },
    });
  };
  const toggletodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };
  const setupdatetodo = (e) => {
    dispatch({
      type: "SETUPDATE_TODO",
      payload: e.target.value,
      isupdate: false,
    });
  };
  const deleteTodo = (id) => {
    dispatch({ type: ADD_TODO, payload: id });
  };

  return (
    <>
      <div className="flex flex-col mt-14 justify-center items-center">
        <div className="pb-9 font-bold text-blue-500 text-xl">
          <h2>Hii, Happy Day 😊😎 </h2>
        </div>
        <div className="flex flex-row ">
          <input
            value={state.toDo}
            onChange={setTodo}
            type="text"
            placeholder="🖊️ Add item..."
            className=" w-[300px] h-[40px] bg-yellow-100 border border-slate-400"
          />
          <div className="flex flex-row cursor-pointer ml-3 w-[40px] h-[40px] bg-blue-300 rounded-[52%] justify-center items-center">
            <AiOutlinePlus onClick={AddTodo} />
          </div>
        </div>
        <div className="flex flex-col mt-[12px] items-center">
          {state.toDos.map((obj) => (
            <div
              className=" w-[350px]   h-[45px]  justify-center items-center bg-yellow-200 border border-slate-400 bg-yellow-200"
              key={obj.id}
            >
              <div className="flex flex-row mt-3">
                <input
                  onChange={toggletodo}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                  className="w-[20px] h-[20px] ml-1"
                />
                <p className="text-orange-500 font-semibold ml-2 ">
                  {obj.text}
                </p>

                <AiOutlineEdit
                  className=" cursor-pointer text-blue-500 w-1/5 h-6  ml-auto"
                  onClick={setupdatetodo}
                />
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
    </>
  );
}
export default Input;
