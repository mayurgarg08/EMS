import React from "react";

const ActiveTask = ({ data, onStatusChange }) => {
  const handleMarkAsCompleted = () => {
    onStatusChange(data, "completed");
  };

  const handleMarkAsFailed = () => {
    onStatusChange(data, "failed");
  };

  return (
    <div className="flex-shrink-0 h-full w-[320px] p-6 bg-gradient-to-br from-red-400 to-red-500 rounded-2xl shadow-lg transition-transform hover:scale-105 duration-300">
      <div className="flex justify-between items-center">
        <span className="bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {data.category}
        </span>
        <span className="text-xs text-white opacity-80">{data.taskDate}</span>
      </div>
      <h2 className="mt-6 text-white text-2xl font-bold">{data.taskTitle}</h2>
      <p className="text-white text-sm mt-3 opacity-90">
        {data.taskDescription}
      </p>
      <div className="flex justify-between mt-8">
        <button
          onClick={handleMarkAsCompleted}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold py-2 px-4 text-xs shadow-md transition-all duration-200"
        >
          Mark as Completed
        </button>
        <button
          onClick={handleMarkAsFailed}
          className="bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold py-2 px-4 text-xs shadow-md transition-all duration-200"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default ActiveTask;
