interface PropsMenu {
  Links: Array<{ title: string; href: string }>;
}
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AddMenu from "./AddMenu";
import { useState } from "react";

export default function Menu({ Links }: PropsMenu) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="absolute w-96 mt-5">
      <div className="w-44 bg-black flex flex-col absolute transition-all text-white">
        <ul className="h-fit flex flex-col">
          {Links.map((link) => {
            return (
              <a href={link.href} className="selection-none">
                {link.title !== "УКАЗЫ" ? (
                  link.title
                ) : (
                  <div>
                    <div className="text-white flex items-center selection-non">
                      {link.title}
                      <MdOutlineKeyboardArrowRight onClick={handleMenu} />
                    </div>
                  </div>
                )}
              </a>
            );
          })}
        </ul>
      </div>
      {showMenu && <AddMenu></AddMenu>}
    </div>
  );
}
