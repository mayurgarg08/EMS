import React from "react";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
import Header from "../other/Header";

const AdminDashboard = (props) => {
  return (
    <div className="w-full h-screen p-10 bg-black text-white">
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
