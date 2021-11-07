import { connect, ConnectedProps } from "react-redux"
import { Field } from "redux-form";
// import { loginUser, setAuthorized, setAuthorizedUser } from "../../store/AuthenticationReducer";
import LoginForm, { ILoginFormData } from "./forms/LoginForm";
import { authenticationAPI } from "../../API/api";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import { TAppStore } from "../../store/store";
import { loginUser, setAuthorized, setAuthorizedUser } from "../../store/Authentication/actions";

interface IPropsLoginContainer {
  loginUser: (formData: ILoginFormData) => void,
  conditionMessage: string,
  statusNote: string,
}

const LoginContainer: React.FC<ConnectProps> = (props) => {
  // const [statusNote, setStatusNote] = useState("");
  let a ;
  // useEffect(() => {}, [
  //   statusNote,
  // ]);
  let statusNote;
  function onSubmit(formData: ILoginFormData) {
    // console.log(formData);
    // authenticationAPI.createUser(formData)
    //   .then(response => {setStatusNote(<span style={{background: "#0b3",}}>Successful creation of the new account.</span>)} )

    //   .catch(err => {
    //     setStatusNote(<span style={{background: "#b03",}}>{err.message}</span>);
    //   });

    props.loginUser(formData);
    
  }
  // const err = new Error("mew"); err.
  return (
    <div>
      {/* <LoginForm onSubmit={onSubmit} />
      <p>{statusNote}</p>
      <NavLink to="/signUp" >Sign up</NavLink>
      <hr /> */}

      <Login
        onSubmit={onSubmit}
        // statusNote={statusNote}
        conditionMessage={props.conditionMessage}
      />
    </div>
  )
}


const mapStateToProps = (state: TAppStore) => ({
  isAuthorized: state.authentication.isAuthorized,
  conditionMessage: state.authentication.conditionMessage,
})

const connector = connect(mapStateToProps, {
  setAuthorized,
  setAuthorizedUser,
  loginUser,
});
type ConnectProps = ConnectedProps<typeof connector>;
export default connector(LoginContainer);