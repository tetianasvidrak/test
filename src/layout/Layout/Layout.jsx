import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
