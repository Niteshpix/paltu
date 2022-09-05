import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import SignUp from "../Pages/SignUp";
import ResetPassword from "../Pages/ForgetPassword/Resetpassword";
import Product from "../Pages/Product";
import Category from "../Pages/Category";
import Protected from "./Proteced";
import Services from "../Pages/Services";
import Profile from "../Pages/Profile";




function Router() {
  return (
    <div>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/dashboard" element={<Protected Component={Dashboard}/>} />
        <Route excat path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
         <Route path="/category" element={<Protected Component={Category} />} />
         <Route path="/services" element={<Protected Component={Services} />} />
       <Route exact path="/forget-password" element={<ResetPassword />} />
       {/* <Route exact path="/user" element={<User/>}/> */}
       <Route exact path="/profile" element={<Profile />} />
       </Routes>
    </div>
  );
}

export default Router;
