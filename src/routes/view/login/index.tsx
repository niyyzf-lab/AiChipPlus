import { useState } from "react";
import waves from "/Img/login_left/waves.jpg";
import { WebviewWindow } from "@tauri-apps/api/window";

const Login = () => {
  const [language, setLanguage] = useState("English");
  const LogingIn = (e: any) => {
    // appWindow.alert("Login")
    e.preventDefault();
    console.log("Login");
    //修改home窗体的可见属性
    const home_windows=WebviewWindow.getByLabel('home')
    if(home_windows){
      home_windows.show()
    }
    const login_windows=WebviewWindow.getByLabel('login')
    if(login_windows){
      login_windows.close()
    }
  };
  return (
    <div className="relative flex overflow-hidden">
      <select
        className="select bg-transparent text-white focus:text-black focus:bg-white active:bg-white border-0 absolute z-[51] "
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        <option selected>English</option>
        <option>简体中文</option>
      </select>
      <div className="w-1/2 h-screen overflow-hidden">
        <img
          src={waves}
          alt="Movie"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pt-5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {language === "English" ? "Sign in to your account" : "欢迎回来"}
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={(e) => LogingIn(e)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {language === "English" ? "Email Address" : "邮箱"}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {language === "English" ? "Password" : "密码"}
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    {language === "English" ? "Forgot Password?" : "忘记密码？"}
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {language === "English" ? "Login" : "登录"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {language === "English" ? "Don't have an account?" : "没有账号？"}{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {language === "English"
                ? "Start registering a account"
                : "点我注册账号"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
