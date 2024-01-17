import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomeRoute/HomePage";
import Login from "./LoginRoute/Login";
import Signup from "./SignupRoute/Signup";
import NotFoundPage from "./NotFoundPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoute;
