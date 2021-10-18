import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import css from './MainHeader.module.css';

function MainHeader(props) {

  if (props.isAuthorized) {
    return (
      <div className={css.mainHeader}>
        <span>
          <NavLink to="/profile">{props.login}</NavLink>
        </span>
      </div>
    )
  } else return (
    <div className={css.mainHeader}>
      {/* <Redirect to="/login" /> */}
      <NavLink to="/login" >Login</NavLink>
    </div>
  )
}

export default connect(state => ({ login: state.authentication.login, }), null)(MainHeader);