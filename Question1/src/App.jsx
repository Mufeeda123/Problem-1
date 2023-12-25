import React, { useState } from "react";
import AddTaskForm from "./pages/AddTaskForm";

const App = () => {
  return (
    <>
    <div className="w-full h-[1000px] bg-black">
      <div className="flex flex-col   justify-center items-center">
        <div className="pb-1 mt-14 font-bold text-blue-500 text-xl">
          <h2>Hii, Happy Day 😊😎 </h2>
        </div>
        <AddTaskForm />
      </div>
      </div>
    </>
  );
};

export default App;
