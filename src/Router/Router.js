import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
function Router() {
  return (
    <div>
      <Routes>
        <Route exact path="/signup" element={<SignIn />} />
        <Route exact path="/signin" element={<SignUp />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Router;
