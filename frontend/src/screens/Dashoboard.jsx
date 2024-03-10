import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import DashboardComponent from "../components/DashboardComponent";
import NavbarComponent from "../components/NavbarComponent";

const Dashoboard = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  // useEffect(() => {
  //   console.log("dashboard");
  // }, []);

  return (
    <div className="">
      <NavbarComponent />

      <DashboardComponent />
    </div>
  );
};

export default Dashoboard;
