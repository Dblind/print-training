import { connect } from "react-redux"
import { Field } from "redux-form";
import { createUser, setAuthorized, setAuthorizedUser } from "../../store/AuthenticationReducer";
import LoginForm from "./forms/LoginForm";
import { authenticationAPI } from "../../API/api";
import { useEffect, useState } from "react";
import SignUpForm from "./forms/SignUpForm";
import SignUpFormik from "./forms/SignUpForm_formik";


function SignUp(props) {
  function onSubmit(formData) {
    props.createUser(formData);
  }

  return (
    <div>
      {/* <SignUpForm onSubmit={onSubmit} nameButton="SignUp" /> */}
      <p>{props.conditionMessage}</p>
      <hr />
      <SignUpFormik />
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthorized: state.authentication.isAuthorized,
  conditionMessage: state.authentication.conditionMessage,
})

export default connect(mapStateToProps, {
  setAuthorized,
  setAuthorizedUser,
  createUser,
})(SignUp);