import { Outlet } from "react-router";
import Header from "@/components/layout/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
