import { Outlet } from "react-router";
import { Header, Footer, ThemeProvider } from "@/components/layout";
import { Toaster } from "@/components/ui/sonner";

function Layout() {
  return (
    <div className="dark h-full">
      <Toaster position="top-center" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Layout;
