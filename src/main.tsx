import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/index";
import {
  RouterProvider,
} from "react-router-dom";
import "./styles.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
