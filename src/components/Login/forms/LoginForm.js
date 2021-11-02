import React from "react";
import reactDom from "react-dom";
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form";

import cssForm from '../../common/css/CommonFormCSS.module.css';
import css from './Form.module.css';


const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} className={`${cssForm.form} ${css.form}`}>
        <ul className={""}>
          <li><Field className={cssForm.form__inputText}
            component={"input"} placeholder="login"
            type="text" name="login" /></li>
          <li><Field className={cssForm.form__inputText}
            component={"input"} placeholder="password"
            type="text" name="password" /></li>
          {/* <li><input type="submit" value="login" /></li> */}
          <li><input className={cssForm.form__submit} type="submit" value="Login" /></li>
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