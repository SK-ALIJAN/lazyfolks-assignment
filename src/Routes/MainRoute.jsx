import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomeRoute/HomePage";
import Login from "./LoginRoute/Login";
import Signup from "./SignupRoute/Signup";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" />
    </Routes>
  );
};

export default MainRoute;
