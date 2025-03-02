import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          {/* <Route path="register" element={<Register />} /> */}
          {/* <Route path="login" element={<Login />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
