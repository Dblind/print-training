import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { createUser, loginUser } from "../../../store/Authentication/actions";

const LoginFormFormik = (props) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { login: "", password: "", },
    onSubmit: (values) => {
      dispatch(loginUser(values));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} >
      <label htmlFor="login">Login</label>
      <input
        id="login" name="login" type="text"
        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.login} />
      <label htmlFor="password">Password</label>
      <input
        id="password" name="password" type="text"
        onChange={formik.handleChange} onBlur="formik.handleBlur" value={formik.values.password} />
      <input type="submit" value="login" />
    </form>
  )
}

export default LoginFormFormik;