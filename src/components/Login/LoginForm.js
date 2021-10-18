import React from "react";
import reactDom from "react-dom";
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form";


const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <ul>
          <li><Field component={"input"} placeholder="login"
            type="text" name="login" /></li>
          <li><Field component={"input"} placeholder="password"
            type="text" name="password" /></li>
          {/* <li><input type="submit" value="login" /></li> */}
          <li><button>submit button</button></li>
        </ul>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;

// const mapStateToProps = state => {

// }

// export default connect(mapStateToProps, {

// })(LoginReduxForm);