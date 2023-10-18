import { appWindow } from "@tauri-apps/api/window";
import { FiX, FiMinus, FiMaximize } from "react-icons/fi";
import { invoke } from "@tauri-apps/api";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";

import { AcmeLogo } from "./acmeLogo";
import { IconContext } from "react-icons";

const Navbars = () => {
  return (
    <div className=" relative">
      <div data-tauri-drag-region className=" w-screen absolute z-50 h-6"></div>
      <Navbar maxWidth="full" data-tauri-drag-region>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <AcmeLogo />
            <p className="hidden sm:block font-bold text-inherit">Ai Chip</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            type="search"
          />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <IconContext.Provider
            value={{
              style: { verticalAlign: "middle", zIndex: 50 },
              size: "1.5rem",
            }}
          >
            <Button
              isIconOnly
              variant="light"
              onClick={() => appWindow.minimize()}
              className=" p-1 z-[100]  "
            >
              <FiMinus />
            </Button>

            <Button
              isIconOnly
              variant="light"
              onClick={() => appWindow.maximize()}
              className=" p-1 z-[100]  "
            >
              <FiMaximize />
            </Button>
            <Button
              isIconOnly
              onClick={() => {
                appWindow.close();
                invoke("close_rear_end");
              }}
              className=" p-1 z-[100] hover:bg-red-500 bg-transparent hover:text-white  "
            >
              <FiX />
            </Button>
          </IconContext.Provider>
        </NavbarContent>
      </Navbar>
    </div>
  );
};
export default Navbars;
