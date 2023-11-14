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

import { Button, Persona, Tooltip } from "@fluentui/react-components";
import { appWindow } from "@tauri-apps/api/window";
import { MdClose } from "react-icons/md";
import { Outlet } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="flex w-screen h-screen">
      <div
        data-tauri-drag-region
        className="absolute flex flex-row-reverse items-center w-screen h-10 p-10 md:flex-row"
      >
        <Tooltip content="Exit" relationship="label">
          <Button
            icon={<MdClose className="text-2xl hover:text-red-600" />}
            size="large"
            appearance="subtle"
            onClick={() => appWindow.close()}
          />
        </Tooltip>
      </div>
      <div className="flex flex-col items-center justify-center flex-1">
        <Outlet />
      </div>
      <div className="flex-1 bg-[url('/Img/berlin.jpg')] bg-cover bg-center shadow-lg hidden md:block">
        <Persona
          className=" text-white/80 text-[0.8em] font-semibold absolute bottom-3  ml-3"
          name="12138562"
          textAlignment="center"
          primaryText={<p className="text-lg text-white ">12138562</p>}
          size="huge"
          secondaryText={
            <a
              href="https://pixabay.com/zh/users/12138562-12138562/"
              className="font-bold text-md text-blue-400/80"
            >
              @12138562
            </a>
          }
          presence={{ status: "available" }}
          avatar={{
            image: {
              src: "https://pixabay.com/static/img/profile_images/purple.svg",
              className: "border-2 border-blue-300",
            },
          }}
        />
      </div>
    </div>
  );
};
export default LoginPage;
