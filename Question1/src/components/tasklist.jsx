// TaskList.js
import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

function TaskList({
  todos,
  setTodos,
  todo,
  showCompleted,
  selectedTodoIndex,
  onEdit,
  onDelete,
}) {
  return (
    <div className="flex flex-col mt-[10px] items-center">
      {todos.map((to) => (
        <div
          key={to.index}
          className={`w-[350px] h-[45px] justify-center items-center bg-yellow-200 border border-slate-400 bg-yellow-200 ${
            selectedTodoIndex === to.index ? "hidden" : ""
          } ${!showCompleted && to.completed ? "hidden" : ""}`}
        >
          <div className="flex flex-row mt-3">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-[20px] h-[20px] ml-1 "
              checked={to.completed}
              onChange={() => {
                const updatedTodos = todos.map((item) =>
                  item.index === to.index
                    ? { ...item, completed: !item.completed }
                    : item
                );
                setTodos(updatedTodos);
              }}
            />
            <p
              className={`text-orange-500 font-semibold ml-2 ${
                to.completed ? "line-through text-orange-300" : ""
              }`}
            >
              {to.list}
            </p>

            <AiOutlineEdit
              className="cursor-pointer text-blue-500 w-1/5 h-6 -mr-[14px] ml-auto"
              value={todo}
              onClick={() => onEdit(to.index)}
            />

            <div>
              <AiOutlineDelete
                className="cursor-pointer text-red-500 h-6 w-[20px] "
                onClick={() => onDelete(to.index)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
