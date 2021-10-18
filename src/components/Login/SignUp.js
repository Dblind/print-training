import { connect } from "react-redux"
import { Field } from "redux-form";
import { setAuthorized, setAuthorizedUser } from "../../store/AuthenticationReducer";
import LoginForm from "./LoginForm";
import { authenticationAPI } from "../../API/api";
import { useEffect, useState } from "react";


function SignUp(props) {
  const [statusNote, setStatusNote] = useState("");

  useEffect(() => {}, [
    statusNote,
  ]);
  
  function onSubmit(formData) {
    // console.log(formData);
    // authenticationAPI.createUser(formData)
    //   .then(response => {setStatusNote(<span style={{background: "#0b3",}}>Successful creation of the new account.</span>)} )

    //   .catch(err => {
    //     setStatusNote(<span style={{background: "#b03",}}>{err.message}</span>);
    //   });


    authenticationAPI.createUser(formData)
      .then(response => {
        // setStatusNote(<span style={{ background: "#0b3", }}>Successful login of the account.</span>);
        setStatusNote(<span style={{ background: "#0b3", }}>Successful creation of the new account.</span>);
        props.setAuthorizedUser(response.data);
        console.log(response.data);
      })
      .catch(err => {
        setStatusNote(<span style={{ background: "#b03", }}>{err.message}</span>);
      });
  }

  // const err = new Error("mew"); err.
  return (
    <div>
      <p>Sign Up</p>
      <LoginForm onSubmit={onSubmit} nameButton="SignUp" />
      <p>{statusNote}</p>
      <hr />
    </div>
  )
}


const mapStateToProps = state => ({
  isAuthorized: state.authentication.isAuthorized,
})

export default connect(mapStateToProps, {
  setAuthorized,
  setAuthorizedUser,
})(SignUp);