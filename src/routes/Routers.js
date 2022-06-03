import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import RegisterForm from "../components/RegisterForm";
import Main from "../components/Main";
import RequireAuth from "./RequireAuth";
import Profile from "../components/Profile";
import Settings from "../components/Settings";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route
        path="/settings"
        element={
          <RequireAuth>
            <Settings />
          </RequireAuth>
        }
      />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routers;
