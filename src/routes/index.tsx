import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErroPage from "./error-page";
import Login from "./view/login/index";
import Home from "./view/home/index";
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
    {
        path: "/home",
        element: <Home />
    }
]);
export default router;