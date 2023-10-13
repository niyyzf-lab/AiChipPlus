import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErroPage from "./error-page";
import Login from "./view/login/index";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErroPage />,
    },
    {
        path: "/login",
        element: <Login />
    },
]);
export default router;
