import axios from "axios";
import React, { useState } from "react";
import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("Mayank@gmail.com");
  const [password, setPassword] = useState("Mayank@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    const response = await axios.post(
      "http://localhost:3000/login",
      {
        emailId: emailId,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
    dispatch(addUser(response.data.data));
    navigate("/");
  };

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
        <button className="btn mt-5" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
