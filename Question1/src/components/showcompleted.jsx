import React from "react";

function showCompletedForm({handleShowCompleted,showCompleted,}) {
  return (
    <>
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
    </>
  )
}

export default showCompletedForm;
