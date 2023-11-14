/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑       永不宕机     永无BUG
 */

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Page/Home";
import AboutPage from "../Page/Home/about";
import MonitorPage from "../Page/Home/monitor";
import LoginPage from "../Page/Login";
import Login from "../Page/Login/login";
import Sign from "../Page/Login/sigin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/sign",
        element: <Sign />,
      },
    ],
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
