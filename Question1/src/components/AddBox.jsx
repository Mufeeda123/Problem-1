import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function AddBox({addTodo,setTodo,todo}) {
  return (
    <>
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
    </>
  );
}
export default AddBox;
