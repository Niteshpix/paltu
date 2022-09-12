import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import SignUp from "../Pages/SignUp";
import ResetPassword from "../Pages/ForgetPassword/Resetpassword";
import Protected from "./Proteced";
import Profile from "../Pages/Profile";
import FormCategory from "../Pages/category/FormCategory";
import Category from "../Pages/category/Category";
import User from "../Pages/users/User";
import ProfilePhotoChange from "../Pages/users/ProfilePhotoChange";
import EditUserForm from "../Pages/users/EditUserForm";
import Services from "../Pages/Service/Services";
import FormService from "../Pages/Service/FormService";
import ChangePass from "../Pages/ChangePass";
import VerifiedAccounts from "../Pages/users/VerifiedAccount";
import SignIn from "../Pages/SignIn";
import UpdatePasswordForm from "../Pages/ForgetPassword/forgotPasswordForm";

function Router() {
  return (
    <div>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route
          exact
          path="/dashboard"
          element={<Protected Component={Dashboard} />}
        />
        <Route excat path="/" element={<Home />} />
        <Route path="/category" element={<Protected Component={Category} />} />
        <Route
          path="/category/create"
          element={<Protected Component={FormCategory} />}
        />
        <Route path="/services" element={<Protected Component={Services} />} />
        <Route
          path="/services/create"
          element={<Protected Component={FormService} />}
        />

        <Route exact path="/forget-password" element={<ResetPassword />} />

        {/* <Route exact path="/user" element={<User/>}/> */}

        <Route exact path="/user" element={<Protected Component={User} />} />
        <Route exact path="profile/edituser/:id" element={<EditUserForm />} />
        <Route
          exact
          path="/profile"
          element={<Protected Component={Profile} />}
        />
        <Route
          exact
          path="/photochnage"
          element={<Protected Component={ProfilePhotoChange} />}
        />
        <Route
          exact
          path="/changepassword"
          element={<Protected Component={ChangePass} />}
        />
        <Route exact path="/verified-account" element={<VerifiedAccounts />} />
        <Route exact path="/otp" element={<UpdatePasswordForm/>} />

      </Routes>
    </div>
  );
}

export default Router;
