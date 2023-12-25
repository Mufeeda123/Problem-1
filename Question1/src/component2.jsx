import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task !== "") {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <div className="p-6">
      <input
        className="bg-slate-100 rounded-md p-4 m-4"
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Create a new todo"
      />
      <button
        onClick={addTask}
        className="bg-green-500 text-white p-3 m-3 rounded-md font-bold hover:bg-green-600"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
