import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import SignUp from "../Pages/SignUp";
import ResetPassword from "../Pages/ForgetPassword/Resetpassword";
import Product from "../Pages/Product";
import Protected from "./Proteced";
import Services from "../Pages/Services";
<<<<<<< HEAD
=======
import Profile from "../Pages/Profile";
>>>>>>> 5640793e67b5069cbca2edaf77365850b04eb820
import FormCategory from "../Pages/category/FormCategory";
import Category from "../Pages/category/Category";

import Category from "../Pages/category/Category";
import EditUserForm from "../Pages/users/EditUserForm";
import User from "../Pages/users/User";


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
<<<<<<< HEAD
       {/* <Route exact path="/user" element={<User/>}/> */}
=======
          <Route exact path="/user" element={<User/>}/>
          <Route exact path="/edituser/:id" element={<EditUserForm/>}/>
         <Route exact path="/profile" element={<Profile />} />
>>>>>>> 5640793e67b5069cbca2edaf77365850b04eb820
       </Routes>

      

    </div>
  );
}

export default Router;
