import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";

const Body = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUser = async () => {
    try {
      const user = await axios.get("http://localhost:3000/profile", {
        withCredentials: true,
      });
      dispatch(addUser(user.data.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
        console.error("Error fetching user data:", err);
      }
    }
  };
  useEffect(() => {
    if (!userData) {
      getUser();
    }
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
