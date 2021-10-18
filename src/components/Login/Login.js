import LoginForm from "./LoginForm";
import { NavLink } from "react-router-dom";


function Login(props) {
  return (
    <div>
      <LoginForm onSubmit={props.onSubmit} />
      <p>{props.conditionMessage}</p>
      <NavLink to="/signUp" >Sign up</NavLink>
      <hr />
    </div>
  )
}

export default Login;