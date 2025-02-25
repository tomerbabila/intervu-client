import { Outlet } from "react-router";
import "./App.css";

function Layout() {
  return (
    <>
      <h1>header</h1>
      <Outlet />
    </>
  );
}

export default Layout;
