import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/index";
import { RouterProvider } from "react-router-dom";
import "./styles.css";
import TitleBar from "./assembly/titlebar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <TitleBar />
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>
);
