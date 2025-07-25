import axios from "axios";
import React, { useState } from "react";
import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("Mayank@gmail.com");
  const [password, setPassword] = useState("Mayank@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      setError(""); // Reset error state before making the request
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
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
      console.error("Error logging in:", err);
    }
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
        {error && <p  style={{color : "red",fontSize : 15}}>{error}</p>}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="btn btn-primary mt-5"
            onClick={handleLogin}
            style={{ width: "40%" }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
