import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="border-2 rounded-xl border-emerald-500 p-12 bg-black shadow-lg">
        <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">
          Enter your credentials
        </h2>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-500 text-white font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 mb-4 w-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-500 text-white font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 mb-4 w-full"
            type="password"
            placeholder="Enter your password"
          />
          <button className="mt-6 text-white font-semibold bg-emerald-600 hover:bg-emerald-700 text-lg py-3 px-8 w-full rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
