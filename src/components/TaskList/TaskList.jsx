import React, { useState, useEffect } from "react";
import ActiveTask from "./ActiveTask";
import NewTask from "./NewTask";
import CompleteTask from "./ComleteTask";
import FailedTask from "./FailedTask";
import TaskListNumber from "../other/TaskListNumber"; // <-- Import this!!

const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (data?.tasks) {
      setTasks(data.tasks);
    }
  }, [data]);

  const handleStatusChange = (task, newStatus) => {
    const updatedTasks = tasks.map((t) => {
      if (t === task) {
        if (newStatus === "completed") {
          return { ...t, active: false, completed: true, newTask: false };
        } else if (newStatus === "failed") {
          return { ...t, active: false, failed: true, newTask: false };
        }
      }
      return t;
    });

    setTasks(updatedTasks);
    updateLocalStorageTasks(updatedTasks);
  };

  const handleAcceptTask = (task) => {
    const updatedTasks = tasks.map((t) => {
      if (t === task) {
        return { ...t, active: true, newTask: false };
      }
      return t;
    });

    setTasks(updatedTasks);
    updateLocalStorageTasks(updatedTasks);
  };

  const updateLocalStorageTasks = (updatedTasks) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser?.role === "employee") {
      loggedInUser.data.tasks = updatedTasks;
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    }
  };

  if (!tasks.length) {
    return <div>No Tasks Available</div>;
  }

  // Calculate live counts
  const taskCounts = {
    newTask: tasks.filter((t) => t.newTask).length,
    active: tasks.filter((t) => t.active).length,
    completed: tasks.filter((t) => t.completed).length,
    failed: tasks.filter((t) => t.failed).length,
  };

  return (
    <>
      <TaskListNumber taskCounts={taskCounts} />{" "}
      {/* <-- Pass live counts here */}
      <div
        id="tasklist"
        className="h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 mt-10 py-5 flex-nowrap"
      >
        {tasks.map((ele, idx) => {
          if (ele.active) {
            return (
              <ActiveTask
                key={idx}
                data={ele}
                onStatusChange={handleStatusChange}
              />
            );
          }
          if (ele.newTask) {
            return <NewTask key={idx} data={ele} onAccept={handleAcceptTask} />;
          }
          if (ele.completed) {
            return <CompleteTask key={idx} data={ele} />;
          }
          if (ele.failed) {
            return <FailedTask key={idx} data={ele} />;
          }
          return null;
        })}
      </div>
    </>
  );
};

export default TaskList;
