import React from "react";

const TaskListNumber = ({ taskCounts }) => {
  if (!taskCounts) {
    return null;
  }

  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="flex-none rounded-xl py-6 px-9 w-[23%] bg-green-400 text-white">
        <div className="font-semibold text-3xl">{taskCounts.newTask}</div>
        <div className="font-medium text-xl">New Task</div>
      </div>
      <div className="rounded-xl py-6 px-9 w-[23%] bg-red-400 text-white">
        <div className="font-semibold text-3xl">{taskCounts.active}</div>
        <div className="font-medium text-xl">Active Task</div>
      </div>
      <div className="rounded-xl py-6 px-9 w-[23%] bg-blue-400 text-white">
        <div className="font-semibold text-3xl">{taskCounts.completed}</div>
        <div className="font-medium text-xl">Completed Task</div>
      </div>
      <div className="rounded-xl py-6 px-9 w-[23%] bg-yellow-400 text-white">
        <div className="font-semibold text-3xl">{taskCounts.failed}</div>
        <div className="font-medium text-xl">Failed Task</div>
      </div>
    </div>
  );
};

export default TaskListNumber;
