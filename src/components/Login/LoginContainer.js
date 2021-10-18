import { connect } from "react-redux"
import { Field } from "redux-form";
import { loginUser, setAuthorized, setAuthorizedUser } from "../../store/AuthenticationReducer";
import LoginForm from "./LoginForm";
import { authenticationAPI } from "../../API/api";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";


function LoginContainer(props) {
  // const [statusNote, setStatusNote] = useState("");
  let a ;
  // useEffect(() => {}, [
  //   statusNote,
  // ]);
  let statusNote;
  function onSubmit(formData) {
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
        statusNote={statusNote}
        conditionMessage={props.conditionMessage}
      />
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
  loginUser,
})(LoginContainer);