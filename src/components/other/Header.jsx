import React from "react";

function Header({ data, changeUser }) {
  if (!data) {
    return null;
  }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
    //window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl text-white font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{data.firstName} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-white px-5 py-2 rounded text-lg font-medium"
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
