import React, { useState } from "react";
import TaskList from "../components/TaskList";
import EditBox from "../components/EditBox";
import AddBox from "../components/AddBox";

function AddTaskForm() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [updatetodo, setUpdateTodo] = useState(null);
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);

  const addTodo = () => {
    setTodos([...todos, { list: todo, index: Date.now() }]);
    setTodo("");
  };

  const onDelete = (index) => {
    setTodos(todos.filter((to) => to.index !== index));
  };

  const onEdit = (index) => {
    const editTodo = todos.find((to) => to.index === index);
    setTodo("");
    setUpdateTodo({
      updatelist: editTodo.list,
      index: editTodo.index,
    });
    setSelectedTodoIndex(index);
  };

  const handleUpdate = () => {
    if (updatetodo) {
      const updatedTodos = todos.map((to) =>
        to.index === updatetodo.index
          ? {
              ...to,
              list: updatetodo.updatelist,
            }
          : to
      );
      setTodos(updatedTodos);
      setUpdateTodo(null);
      setSelectedTodoIndex(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white mt-8 rounded-md shadow-md">
      <div className="flex flex-col justify-center items-center">
        <AddBox addTodo={addTodo} setTodo={setTodo} todo={todo} />

        <EditBox
          selectedTodoIndex={selectedTodoIndex}
          updatetodo={updatetodo}
          handleUpdate={handleUpdate}
          setUpdateTodo={setUpdateTodo}
        />

        <TaskList
          todos={todos}
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
