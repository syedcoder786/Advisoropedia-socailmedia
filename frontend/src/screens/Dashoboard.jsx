import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

  return (
    <div>
      <NavbarComponent />
      <DashboardComponent />
    </div>
  );
};

export default Dashoboard;
