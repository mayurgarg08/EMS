import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedUserData = userData.map((user) => {
      if (user.firstName === asignTo) {
        return {
          ...user,
          tasks: [...user.tasks, task],
          taskCounts: {
            ...user.taskCounts,
            newTask: user.taskCounts.newTask + 1,
          },
        };
      }
      return user;
    });

    setUserData(updatedUserData);

    setTaskTitle("");
    setTaskDescription("");
    setAsignTo("");
    setTaskDate("");
    setCategory("");
  };

  return (
    <div className="flex justify-center p-10">
      <div className="p-8 bg-[#1C1C1C] mt-10 rounded w-full  scale-[1.05]">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-wrap w-full justify-between gap-8 text-base"
        >
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
                type="date"
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
                value={asignTo}
                onChange={(e) => {
                  setAsignTo(e.target.value);
                }}
                className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
                type="text"
                placeholder="Employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-2/5 flex flex-col justify-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className="w-full h-44 text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-400 mb-8"
              placeholder="Task description..."
            ></textarea>

            {/* Button slightly lifted */}
            <button className="bg-emerald-500 py-2.5 hover:bg-emerald-600 px-5 rounded text-sm text-white w-full mt-3 mb-2">
              Assign Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
