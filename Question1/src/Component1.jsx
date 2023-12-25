// App.js
import './App.css';
import { useState } from 'react';
import AddTask from './components/AddTask';
import Todo from './components/Todo';

function App() {
  const [toDos, setToDos] = useState([]);

  const addTask = (newTask) => {
    setToDos([...toDos, { id: Date.now(), text: newTask, status: false }]);
  };

  const deleteTask = (taskId) => {
    setToDos(toDos.filter((task) => task.id !== taskId));
  };

  const toggleStatus = (taskId) => {
    setToDos(
      toDos.map((task) =>
        task.id === taskId ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <div className="app">
      {/* ... other components ... */}
      <AddTask onAddTask={addTask} />
      <div className="todos">
        {toDos.map((task) => (
          <Todo
            key={task.id}
            task={task}
            onDeleteTask={deleteTask}
            onToggleStatus={toggleStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
