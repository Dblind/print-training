import { NavLink } from "react-router-dom";
import css from './Navbar.module.css';

function Navbar(props) {
  return (
    <nav className={css.navbar}>
      <ul>
        <li >
          <NavLink activeClassName={css.navbar__activeLink} to="/profile" className={css.navbar__navLink} >Profile</NavLink>
        </li>
        <li>
          <NavLink activeClassName={css.navbar__activeLink} to="/train" className={css.navbar__navLink} >train</NavLink>
        </li>
        <li>
          <NavLink activeClassName={css.navbar__activeLink} to="/mainPage" className={css.navbar__navLink} >main page</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;