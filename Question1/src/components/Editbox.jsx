import React  from "react"
import { AiOutlineEdit} from "react-icons/ai";

function EditBox({selectedTodoIndex,updatetodo,handleUpdate,setUpdateTodo}){
    return(
        <>
        {selectedTodoIndex !== null && (
            <div className="flex flex-col mt-4 justify-center items-center">
              <div className="flex flex-row ">
                <input
                  type="text"
                  value={updatetodo.updatelist}
                  placeholder="🖊️ Update item..."
                  className="w-[300px] h-[45px]  bg-blue-400 border border-slate-400"
                  onChange={(event) =>
                    setUpdateTodo({
                      ...updatetodo,
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
          </>

    )
}
export default EditBox
