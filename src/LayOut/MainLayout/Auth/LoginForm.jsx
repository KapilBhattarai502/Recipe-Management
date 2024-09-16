import React, { useEffect, useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:6700/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        response.json().then(({token}) => {
         localStorage.setItem("jwt",token);
        });
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <h1 className="text-lg text-center">Login Here !</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <label id="email" className="">
          {" "}
          Email:
          <input
            type="email"
            htmlFor={"email"}
            className="border-2 border-slate-500 rounded-md ml-2 w-full p-1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </label>
        <br />
        <label id="password">
          {" "}
          Password:
          <input
            type="password"
            htmlFor={"password"}
            className="border-2 border-slate-500 rounded-md ml-2 w-full p-1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </label>
        <div className="text-center">
          <button className="mt-2 text-sm text-center">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
