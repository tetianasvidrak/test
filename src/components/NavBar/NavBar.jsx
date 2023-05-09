import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <nav className={css.nav}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink className={css.link} to="tweets">
            Tweets
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
