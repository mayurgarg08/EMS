import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl shadow-lg transition-transform hover:scale-105 duration-300">
      <div className="flex justify-between items-center">
        <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {data.category}
        </span>
        <span className="text-xs text-white opacity-80">{data.taskDate}</span>
      </div>
      <h2 className="mt-6 text-white text-2xl font-bold">{data.taskTitle}</h2>
      <p className="text-white text-sm mt-3 opacity-90">
        {data.taskDescription}
      </p>
      <div className="mt-8">
        <button className="w-full bg-green-500 text-white rounded-full cursor-default font-semibold py-3 text-sm shadow-md transition-all duration-200">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
