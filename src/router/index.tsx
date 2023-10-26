import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../Page/Login";
import HomePage from "../Page/Home";
import MonitorPage from "../Page/Home/monitor";
import AboutPage from "../Page/Home/about";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "/home/",
        element: <MonitorPage />,
      },
      {
        path: "/home/about",
        element: <AboutPage />,
      },
    ],
  },
]);
export default router;
