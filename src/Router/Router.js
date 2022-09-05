import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import ResetPassword from "../Pages/ForgetPassword/Resetpassword";
import Product from "../Pages/Product";
import Category from "../Pages/category/Category";
import FormCategory from "../Pages/category/FormCategory";

function Router() {
  return (
    <div>
      <Routes>
        <Route excat path="/" element={<Home />} />
        <Route excat path="/signup" element={<SignUp />} />
        <Route excat path="/signin" element={<SignIn />} />
        <Route excat path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/create" element={<FormCategory />} />

        <Route exact path="/forget-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default Router;
