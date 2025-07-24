import React, { useState } from "react";


const Login = () => {

    const [emailId , setEmailId] = useState("");
    const [password , setPassword] = useState("");

  return (
    <div className="w-full flex justify-center items-center  my-20">
      <div className="card bg-base-300 w-96 shadow-sm p-10 ">
        <fieldset className="fieldset">
          <legend className="fieldset-legend" style={{ fontSize: 15 }}>
            Email Id
          </legend>
          <input
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            type="text"
            className="input"
            placeholder="Enter your EmailId"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend" style={{ fontSize: 15 }}>
            Password
          </legend>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="input"
            placeholder="Enter your Password"
          />
        </fieldset>
        <button className="btn mt-5">Login</button>
      </div>
    </div>
  );
};

export default Login;
