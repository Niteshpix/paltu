import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import ResetPassword from "../Pages/ForgetPassword/Resetpassword";

function Router() {
  return (
    <div>
      <Routes>
        <Route exact path="signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/forget-password" element={<ResetPassword/>} />
      </Routes>
    </div>
  );
}

export default Router;
