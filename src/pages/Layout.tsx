import { Outlet } from "react-router";
import { Header, Footer, ThemeProvider } from "@/components/layout";

function Layout() {
  return (
    <div className="dark h-full">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Layout;
