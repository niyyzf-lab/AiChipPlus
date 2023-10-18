import { useState } from "react";
import { IconContext } from "react-icons";
import { BiDockLeft, BiDockRight } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { FcSettings } from "react-icons/fc";
import { Button, Listbox, ListboxItem } from "@nextui-org/react";
import { tv } from "tailwind-variants";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = tv({
    base: "relative flex justify-center",
    variants: {
      open: {
        true: "h-full w-60",
        false: "h-full w-20",
      },
    },
  });
  const LinkButtons = [
    {
      icon: <AiOutlineHome />,
      name: "Home",
      link: "/home",
    },
    {
      icon: <BiDockRight />,
      name: "About",
      link: "/about",
    },
    {
      icon: <SiAboutdotme />,
      name: "About",
      link: "/about",
    },
  ];
  return (
    <div className={toggle({ open: isOpen })}>
      <div className=" flex flex-col text-center pt-4 p-4 gap-4 w-full">
        <IconContext.Provider
          value={{ style: { verticalAlign: "middle" }, size: "2rem" }}
        >
          {isOpen ? (
            <Button
              radius="sm"
              color="primary"
              variant="shadow"
              className="bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg"
              endContent={<BiDockRight />}
              onClick={() => setIsOpen(false)}
            >
              Close BiDock
            </Button>
          ) : (
            <Button
              isIconOnly
              aria-label="Like"
              variant="shadow"
              color="success"
              radius="sm"
              className=" text-white"
            >
              <BiDockLeft onClick={() => setIsOpen(true)} />
            </Button>
          )}
          <div className="w-full ">
            {isOpen ? (
              <Listbox
                aria-label="User Menu"
                onAction={(key) => alert(key)}
                className="p-0 gap-2"
                itemClasses={{
                  base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                }}
              >
                {LinkButtons.map((item) => (
                  <ListboxItem
                    key={item.name}
                    endContent={<MdKeyboardArrowRight />}
                    startContent={item.icon}
                  >
                    {item.name}
                  </ListboxItem>
                ))}
              </Listbox>
            ) : (
              <div className=" flex  flex-col gap-4">
                {LinkButtons.map((item) => (
                  <Button
                    isIconOnly
                    aria-label="Like"
                    variant="shadow"
                    color="secondary"
                    radius="sm"
                  >
                    {item.icon}
                  </Button>
                ))}
              </div>
            )}
          </div>
          <Button isIconOnly className=" absolute bottom-3" radius="sm">
            <FcSettings />
          </Button>
        </IconContext.Provider>
      </div>
    </div>
  );
};
export default Sidebar;
