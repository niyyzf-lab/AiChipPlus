import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import "./styles.css";
import router from "./router";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FluentProvider theme={teamsLightTheme}>
      <RouterProvider router={router} />
    </FluentProvider>
  </React.StrictMode>
);
