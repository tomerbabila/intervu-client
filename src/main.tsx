import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Japp from "./Japp.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="dashboard" element={<Japp />} />
          <Route path="register" element={<App />} />
          <Route path="login" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
