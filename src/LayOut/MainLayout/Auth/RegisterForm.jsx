import React from 'react'

const RegisterForm = () => {
  return (
    <div>
    <h1 className="text-lg text-center">Register Here !</h1>
    <form>
    <label id="username" className="">
        {" "}
        Username:
        <input
          type="email"
          htmlFor={"usrname"}
          className="border-2 border-slate-500 rounded-md ml-2 w-full p-1"
          required
        />
      </label>
      <label id="email" className="">
        {" "}
        Email:
        <input
          type="email"
          htmlFor={"email"}
          className="border-2 border-slate-500 rounded-md ml-2 w-full p-1"
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
          required
        />
      </label>
      <div className="text-center">
      <button className="mt-2 text-sm text-center">Register</button>
      </div>
    </form>
    
  </div>
  )
}

export default RegisterForm