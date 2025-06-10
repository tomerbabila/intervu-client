import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home, Layout, Register, Login } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
