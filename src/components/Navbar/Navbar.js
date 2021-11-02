import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import common from '../common/css/CommonCSS.module.css';
import css from './Navbar.module.css';

function Navbar(props) {
  return (
    <nav className={css.navbar + " " + common.container}>
      <ul>
        <li >
          <NavLink activeClassName={css.navbar__activeLink} to="/profile" className={css.navbar__navLink} >Profile</NavLink>
        </li>
        <li>
          <NavLink activeClassName={css.navbar__activeLink} to="/train" className={css.navbar__navLink} >train</NavLink>
        </li>
        <li>
          <NavLink activeClassName={css.navbar__activeLink} to="/mainPage" className={css.navbar__navLink} >main page</NavLink>
        </li><li>
        </li>
      </ul>
      <div className={css.navbar__login}>
        {props.isAuthorized
          ? <NavLink className={css.navbar__navLink + " " + css.navbar__login_name} to="/profile">{props.login}</NavLink>
          : <NavLink activeClassName={css.navbar__activeLink} to="/login" className={css.navbar__navLink} >login</NavLink>
        }
      </div>
      {/* <div className={css.navbar__login}><NavLink activeClassName={css.navbar__activeLink} to="/login" className={css.navbar__navLink} >login</NavLink></div> */}
      {/* <div className={css.navbar}>
        <div>ff fe3</div>
        <div>ff fe3</div>
        <div>ff fe3</div>
        <div>ff fe3</div>
      </div> */}
    </nav>
  )
}

const mapStateToProps = state => ({
  isAuthorized: state.authentication.isAuthorized,
  login: state.authentication.login,
})

export default connect(mapStateToProps, null)(Navbar);