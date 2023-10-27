import { Button, Checkbox, Input, Link } from "@fluentui/react-components";
import { LogicalSize, WebviewWindow } from "@tauri-apps/api/window";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MdAccountCircle, MdOutlinePassword } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const router = useNavigate();
  const [isPassword, setIsPassword] = useState(true);
  const LoginToHome = () => {
    router("/home");
    const window = WebviewWindow.getByLabel("aiChip");
    window?.setSize(new LogicalSize(1200, 800));
    window?.center();
  };
  return (
    <div>
      <form className="flex flex-col justify-center w-full gap-3 ">
        <div className="flex items-center justify-center mb-5">
          <svg fill="none" height="64" viewBox="0 0 32 32" width="64">
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <h1 className="text-4xl font-bold select-none">Log in</h1>
        </div>
        <div className="flex flex-col ">
          <Input
            type="email"
            contentBefore={<MdAccountCircle aria-label="asdas" />}
            id="auction"
            className="h-10 "
          />
        </div>
        <div className="flex flex-col ">
          <Input
            type={isPassword ? "password" : "text"}
            contentBefore={<MdOutlinePassword aria-label="asdas" />}
            contentAfter={
              !isPassword ? (
                <IoMdEye
                  className="w-6 h-6"
                  onClick={() => setIsPassword(true)}
                />
              ) : (
                <IoMdEyeOff
                  className="w-6 h-6"
                  onClick={() => setIsPassword(false)}
                />
              )
            }
            id="auction"
            className="h-10 "
          />
        </div>
        <div className="flex justify-between gap-3 ">
          <Button
            className="flex-1"
            size="large"
            onClick={() => router("/sign")}
          >
            Sign Up
          </Button>
          <Button
            appearance="primary"
            className="flex-1"
            size="large"
            onClick={LoginToHome}
          >
            Log In
          </Button>
        </div>
        <div className="flex items-center justify-between gap-2 ">
          <Checkbox className="flex-1" size="large" label="Remember me" />
          <Link>
            <p className="font-bold ">Forgot password</p>
          </Link>
        </div>
      </form>
      <div className=" absolute bottom-10 w-[calc(50%)] flex justify-center items-center space-x-1 text-default-500/80 text-[0.8em] font-semibold left-0">
        <a href="#">ABOUT</a>
        <a href="#">SUPPORT</a>
        <a href="#">BLOG</a>
        <a href="#">API</a>
        <a href="#">PRESS</a>
        <a href="#">JOBS</a>
        <a href="#">PRIVACY</a>
        <a href="#">TERMS</a>
      </div>
    </div>
  );
};

export default Login;
