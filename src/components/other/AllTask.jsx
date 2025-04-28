import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const calculateTaskCounts = (tasks) => {
    if (!tasks) return { newTask: 0, active: 0, completed: 0, failed: 0 };

    return {
      newTask: tasks.filter((task) => task.newTask).length,
      active: tasks.filter((task) => task.active).length,
      completed: tasks.filter((task) => task.completed).length,
      failed: tasks.filter((task) => task.failed).length,
    };
  };

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div>
        {Array.isArray(userData) &&
          userData.map((elem, idx) => {
            const taskCounts = calculateTaskCounts(elem.tasks); // <-- calculate fresh counts here

            return (
              <div
                key={idx}
                className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
              >
                <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
                <h3 className="text-lg font-medium w-1/5 text-blue-400">
                  {taskCounts.newTask}
                </h3>
                <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                  {taskCounts.active}
                </h5>
                <h5 className="text-lg font-medium w-1/5 text-white">
                  {taskCounts.completed}
                </h5>
                <h5 className="text-lg font-medium w-1/5 text-red-600">
                  {taskCounts.failed}
                </h5>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllTask;
