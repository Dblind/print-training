import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../store/Authentication/actions";

const SignUpFormik = props => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { login: "", password: "", },
    onSubmit: (values) => {
      dispatch(createUser(values));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} >
      <label htmlFor="login">Login</label>
      <input
        id="login"
        name="login"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.login}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />

      {/* <label htmlFor="rerer">rerer</label>
      <input
        id="rerer"
        name="rerer"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.rerer}
      /> */}

      <input type="submit" value="submit" />
    </form>
  )
}


export default SignUpFormik;