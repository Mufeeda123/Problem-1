import React, { useState } from "react";
import TaskList from "../components/tasklist";
import ShowCompletedForm from "../components/showcompleted";
import EditBox from "../components/Editbox";
import AddBox from "../components/AddBox";

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
          ? {
              ...to,
              list: updateodo.updatelist,
              completed: updateodo.completed,
            }
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
        <ShowCompletedForm
          handleShowCompleted={handleShowCompleted}
          showCompleted={showCompleted}
        />
        <AddBox addTodo={addTodo} setTodo={setTodo} todo={todo} />

        <EditBox
          selectedTodoIndex={selectedTodoIndex}
          updateodo={updateodo}
          handleUpdate={handleUpdate}
          setUpdateTodo={setUpdateTodo}
        />

        <TaskList
          todos={todos}
          showCompleted={showCompleted}
          selectedTodoIndex={selectedTodoIndex}
          todo={todo}
          setTodos={setTodos}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}

export default AddTaskForm;
