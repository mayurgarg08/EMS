import React from "react";

const NewTask = ({ data, onAccept }) => {
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-6 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl shadow-lg transition-transform hover:scale-105 duration-300">
      <div className="flex justify-between items-center">
        <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {data.category}
        </span>
        <span className="text-xs text-white opacity-80">{data.taskDate}</span>
      </div>
      <h2 className="mt-6 text-white text-2xl font-bold">{data.taskTitle}</h2>
      <p className="text-white text-sm mt-3 opacity-90">
        {data.taskDescription}
      </p>
      <div className="mt-8">
        <button
          onClick={() => onAccept(data)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold py-3 text-sm shadow-md transition-all duration-200"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
