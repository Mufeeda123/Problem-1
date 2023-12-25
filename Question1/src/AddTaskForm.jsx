import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import TaskList from "./TaskList";

function AddTaskForm() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [updateodo, setUpdateTodo] = useState(null);
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);
  const [showCompleted, setShowCompleted] = useState(true);

  const addTodo = () => {
    setTodos([...todos, { list: todo, index: Date.now(), completed: false }]);
    setTodo("");
  };

  const onDelete = (index) => {
    setTodos(todos.filter((to) => to.index !== index));
    // Clear the edit box when deleting the todo
    if (updateodo && updateodo.index === index) {
      setUpdateTodo(null);
      setSelectedTodoIndex(null);
    }
  };

  const onEdit = (index) => {
    const editTodo = todos.find((to) => to.index === index);
    setTodo(""); // Clear the input field in "Add box"
    setUpdateTodo({
      updatelist: editTodo.list,
      index: editTodo.index,
      completed: editTodo.completed,
    });
    setSelectedTodoIndex(index);
  };

  const handleUpdate = () => {
    if (updateodo) {
      const updatedTodos = todos.map((to) =>
        to.index === updateodo.index
          ? { ...to, list: updateodo.updatelist, completed: updateodo.completed }
          : to
      );
      setTodos(updatedTodos);
      setUpdateTodo(null);
      setSelectedTodoIndex(null);
    }
  };

  const handleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white mt-8 rounded-md shadow-md">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row mb-2">
          
          <button
            className={`bg-blue-400 px-3 py-1 rounded ${
              showCompleted ? "bg-blue-600" : ""
            }`}
            onClick={handleShowCompleted}
          >
            {showCompleted ? "Hide Completed" : "Show Completed"}
          </button>
         
        </div>

        <div className="flex flex-row">
          <input
            type="text"
            onChange={(event) => setTodo(event.target.value)}
            value={todo}
            placeholder="🖊️ Add item..."
            className="w-[300px] h-[40px] bg-green-400 border border-slate-400 placeholder-red-500"
          />
          <div className="flex flex-row cursor-pointer ml-3 w-[40px] h-[40px] bg-green-300 rounded-[52%] justify-center items-center">
            <AiOutlinePlus onClick={addTodo} />
          </div>
        </div>

        {selectedTodoIndex !== null && (
          <div className="flex flex-col mt-4 justify-center items-center">
            <div className="flex flex-row ">
              <input
                type="text"
                value={updateodo.updatelist}
                placeholder="🖊️ Update item..."
                className="w-[300px] h-[45px]  bg-blue-400 border border-slate-400"
                onChange={(event) =>
                  setUpdateTodo({
                    ...updateodo,
                    updatelist: event.target.value,
                  })
                }
              />
              <div className="flex flex-row cursor-pointer ml-3 mt-yyyy w-[40px] h-[40px] bg-blue-300 rounded-[52%] justify-center items-center">
                <AiOutlineEdit onClick={handleUpdate} />
              </div>
            </div>
          </div>
        )}

       <TaskList 
        todos={todos}
        showCompleted={showCompleted}
        selectedTodoIndex={selectedTodoIndex}
        todo={todo}
        onEdit={onEdit}
        onDelete={onDelete}/>
      </div>
    </div>
  );
}

export default AddTaskForm;
