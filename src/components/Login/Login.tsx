import LoginForm, { ILoginFormData } from "./forms/LoginForm";
import { NavLink } from "react-router-dom";
import React from "react";
import SignUpFormik from "./forms/SignUpForm_formik";
import LoginFormFormik from "./forms/LoginForm_formik";

interface IPropsLogin {
  onSubmit: (FormData: ILoginFormData) => void,
  conditionMessage: string,
}

const Login:React.FC<IPropsLogin> = (props) => {
  return (
    <div>
      {/* <LoginForm onSubmit={props.onSubmit} /> */}
      <p>{props.conditionMessage}</p>
      <NavLink to="/signUp" >Sign up</NavLink>
      <hr />
      <LoginFormFormik />
    </div>
  )
}

export default Login;