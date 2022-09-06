import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import SignUp from "../Pages/SignUp";
import ResetPassword from "../Pages/ForgetPassword/Resetpassword";
import Product from "../Pages/Product";
import Protected from "./Proteced";
import Services from "../Pages/Services";
import FormCategory from "../Pages/category/FormCategory";
import Category from "../Pages/category/Category";


function Router() {
  return (
    <div>
      <Routes>

        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/dashboard" element={<Protected Component={Dashboard}/>} />
        <Route excat path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
         <Route path="/category" element={<Protected Component={Category} />} />
         <Route path="/category/create" element={<Protected Component={FormCategory} />} />
         <Route path="/services" element={<Protected Component={Services} />} />
       <Route exact path="/forget-password" element={<ResetPassword />} />
       {/* <Route exact path="/user" element={<User/>}/> */}
       </Routes>

      

    </div>
  );
}

export default Router;
