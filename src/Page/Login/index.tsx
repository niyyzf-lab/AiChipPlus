import {
  Button,
  Checkbox,
  Input,
  Persona,
  Tooltip,
} from "@fluentui/react-components";
import { useState } from "react";
import { MdOutlinePassword, MdAccountCircle, MdClose } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "@fluentui/react-components";
import { appWindow, WebviewWindow, LogicalSize } from "@tauri-apps/api/window";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const router = useNavigate();
  const [isPassword, setIsPassword] = useState(true);
  const LoginToHome = () => {
    router("/home");
    const window = WebviewWindow.getByLabel("aiChip");
    window?.setSize(new LogicalSize(1200, 800));
    window?.center();
  };
  return (
    <div className="flex w-screen h-screen">
      <div
        data-tauri-drag-region
        className=" w-screen absolute h-10 p-10 flex items-center flex-row-reverse md:flex-row"
      >
        <Tooltip content="Exit" relationship="label">
          <Button
            icon={<MdClose className=" hover:text-red-600 text-2xl" />}
            size="large"
            appearance="subtle"
            onClick={() => appWindow.close()}
          />
        </Tooltip>
      </div>
      <div className="flex-1 flex justify-center flex-col items-center">
        <form className=" flex flex-col justify-center gap-3  w-[55%]">
          <div className="mb-5 flex items-center justify-center">
            <svg fill="none" height="64" viewBox="0 0 32 32" width="64">
              <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <h1 className="text-4xl font-bold select-none">Sign Up</h1>
          </div>
          <div className=" flex flex-col ">
            <Input
              type="email"
              contentBefore={<MdAccountCircle aria-label="asdas" />}
              id="auction"
              className=" h-10 "
            />
          </div>
          <div className=" flex flex-col ">
            <Input
              type={isPassword ? "password" : "text"}
              contentBefore={<MdOutlinePassword aria-label="asdas" />}
              contentAfter={
                !isPassword ? (
                  <IoMdEye
                    className="h-6 w-6"
                    onClick={() => setIsPassword(true)}
                  />
                ) : (
                  <IoMdEyeOff
                    className="h-6 w-6"
                    onClick={() => setIsPassword(false)}
                  />
                )
              }
              id="auction"
              className=" h-10 "
            />
          </div>
          <div className=" flex  justify-between gap-3">
            <Button className="flex-1" size="large">
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
          <div className=" flex  justify-between gap-2 items-center">
            <Checkbox className="flex-1" size="large" label="Remember me" />
            <Link>
              <p className=" font-bold">Forgot password</p>
            </Link>
          </div>
        </form>
        <div className=" absolute bottom-10 w-[calc(50%)] flex justify-center items-center space-x-1 text-default-500/80 text-[0.8em] font-semibold">
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
      <div className="flex-1 bg-[url('/Img/berlin.jpg')] bg-cover bg-center shadow-lg hidden md:block">
        <Persona
          className=" text-white/80 text-[0.8em] font-semibold absolute bottom-3  ml-3"
          name="12138562"
          textAlignment="center"
          primaryText={<p className=" text-lg text-white">12138562</p>}
          size="huge"
          secondaryText={
            <a
              href="https://pixabay.com/zh/users/12138562-12138562/"
              className=" text-md text-blue-400/80 font-bold"
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
