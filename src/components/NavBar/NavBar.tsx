import { MdKeyboardArrowDown } from "react-icons/md";
import Menu from "../Menu";
import { useState } from "react";
export default function NavBar() {
  const links: Array<{ title: string; href: string }> = [
    { title: "ГЛАВНАЯ", href: "#" },
    { title: "МУФТИЯТ", href: "#" },
    { title: "УКАЗЫ", href: "#" },
    { title: "НОВОСТИ", href: "#" },
    { title: "ОБРАЩЕНИЯ", href: "#" },
    { title: "ОБРАТНАЯ СВЯЗЬ", href: "#" },
    { title: "МЕДИАТЕКА", href: "#" },
    { title: "КОНТАКТЫ", href: "#" },
  ];
  const [firstMenu, isFirstShow] = useState<boolean>(false);
  const handleFirtsMenu = () => {
    isFirstShow(!firstMenu);
  };
  return (
    <div className="w-full h-16 bg-white rounded-[30px] px-10 flex items-center ">
      <ul className="flex gap-24 max-[1550px]:gap-12 max-[1220px]:gap-5">
        {links.map((link) => {
          return link.title === "МУФТИЯТ" ? (
            <div className="flex justify-center items-center">
              <div>
                <a href={link.href} className="font-medium">
                  {link.title}
                </a>
                {firstMenu && <Menu Links={links}></Menu>}
              </div>

              <MdKeyboardArrowDown
                className="size-5"
                onClick={handleFirtsMenu}
              />
            </div>
          ) : (
            <a href="#" className="font-medium">
              {link.title}
            </a>
          );
        })}
      </ul>
    </div>
  );
}
