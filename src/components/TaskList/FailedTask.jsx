import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl shadow-lg transition-transform hover:scale-105 duration-300">
      <div className="flex justify-between items-center">
        <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {data.category}
        </span>
        <span className="text-xs text-black opacity-70">{data.taskDate}</span>
      </div>
      <h2 className="mt-6 text-black text-2xl font-bold">{data.taskTitle}</h2>
      <p className="text-black text-sm mt-3 opacity-80">
        {data.taskDescription}
      </p>
      <div className="mt-8">
        <button className="w-full bg-red-500 cursor-default text-white rounded-full font-semibold py-3 text-sm shadow-md transition-all duration-200">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
