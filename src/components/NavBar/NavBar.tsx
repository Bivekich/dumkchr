import { MdKeyboardArrowDown } from "react-icons/md";
import Menu from "../Menu";
import { useState } from "react";

export default function NavBar() {
  const links: Array<{ title: string; href: string }> = [
    { title: "ГЛАВНАЯ", href: "/" },
    { title: "МУФТИЯТ", href: "/MuftiyaCHR" },
    { title: "УКАЗЫ", href: "/Decree" },
    { title: "НОВОСТИ", href: "/NewsPage" },
    { title: "ОБРАЩЕНИЯ", href: "/" },
    { title: "ОБРАТНАЯ СВЯЗЬ", href: "/FeedBack" },
    { title: "МЕДИАТЕКА", href: "/" },
    { title: "КОНТАКТЫ", href: "/" },
  ];
  const firstMenuLinks: Array<{ title: string; href: string }> = [
    { title: "РУКОВОДСТВО", href: "#" },
    { title: "КОМИТЕТЫ", href: "#" },
    { title: "МУФТИЙ", href: "/MuftiyaCHR" },
    { title: "ЗАМЕСТИТЕЛЬ МУФТИЯ", href: "/MuftiyaDeputy" },
    { title: "ДОКУМЕНТЫ", href: "#" },
  ];
  const secondMenuLinks: Array<{ title: string; href: string }> = [
    { title: "ФОТО", href: "/PhotoPage" },
    { title: "ВИДЕО", href: "/VideoPage" },
  ];
  const [firstMenu, isFirstShow] = useState<boolean>(false);
  const [secondMenu, isSecondMenuShow] = useState<boolean>(false);
  const handleFirtsMenu = () => {
    isFirstShow(!firstMenu);
  };
  const handleSecondMenu = () => {
    isSecondMenuShow(!secondMenu);
  };
  return (
    <div className="w-full h-16 bg-white rounded-[30px] px-10 flex items-center text-[#004B2D] font-medium">
      <ul className="flex gap-20 max-[1550px]:gap-6 max-[1230px]:gap-5 max-[1130px]:gap-3 max-[1800px]:gap-12  text-[20px] font-medium">
        {links.map((link, index) => {
          return link.title === "МУФТИЯТ" || link.title === "МЕДИАТЕКА" ? (
            <div key={index} className="flex justify-center items-center">
              <div>
                <a
                  href={link.href}
                  className="font-medium max-[1550px]:items-center flex max-[1440px]:text-[14px] "
                >
                  {link.title}
                </a>
                {link.title === "МУФТИЯТ"
                  ? firstMenu && <Menu Links={firstMenuLinks}></Menu>
                  : secondMenu && <Menu Links={secondMenuLinks}></Menu>}
              </div>

              <MdKeyboardArrowDown
                className="size-5"
                onClick={
                  link.title === "МУФТИЯТ" ? handleFirtsMenu : handleSecondMenu
                }
              />
            </div>
          ) : (
            <a
              key={index}
              href={link.href}
              className="font-medium max-[1440px]:text-[14px]"
            >
              {link.title}
            </a>
          );
        })}
      </ul>
    </div>
  );
}
