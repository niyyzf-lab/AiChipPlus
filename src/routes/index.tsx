import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErroPage from "./error-page";
import React from "react";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErroPage />,
    },
]);
export default router;
