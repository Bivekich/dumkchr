import { MdKeyboardArrowDown } from "react-icons/md";
import Menu from "../Menu";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function NavBar() {
  const links: Array<{ title: string; href: string }> = [
    { title: "ГЛАВНАЯ", href: "/" },
    { title: "МУФТИЯТ", href: "/MuftiyaCHR" },
    { title: "УКАЗЫ", href: "/Decree" },
    { title: "НОВОСТИ", href: "/NewsPage" },
    { title: "ОБРАЩЕНИЯ", href: "/" },
    { title: "ОБРАТНАЯ СВЯЗЬ", href: "/FeedBack" },
    { title: "МЕДИАТЕКА", href: "" },
    { title: "КОНТАКТЫ", href: "/" },
  ];
  const firstMenuLinks: Array<{ title: string; href: string }> = [
    { title: "РУКОВОДСТВО", href: "#" },
    { title: "КОМИТЕТЫ", href: "#" },
    { title: "МУФТИЙ", href: "/MuftiyaCHR" },
    { title: "ЗАМЕСТИТЕЛЬ МУФТИЯ", href: "/MuftiyaDeputy" },
    { title: "ДОКУМЕНТЫ", href: "/Documents" },
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

  const [height, setHeight] = useState<string>("0");
  const handleHeight = () => {
    height === "0" ? setHeight("fit") : setHeight("0");
  };
  useEffect(() => {
    console.log(height);
  }, [height]);
  return (
    <div className="w-full text-[#004B2D] font-medium">
      <div className="w-full bg-white flex items-center rounded-[30px] px-10 h-16">
        <ul className="min-[900px]:flex gap-20 max-[1550px]:gap-6 max-[1230px]:gap-5 max-[1130px]:gap-3 max-[1800px]:gap-12 text-[20px] font-medium hidden">
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
                    link.title === "МУФТИЯТ"
                      ? handleFirtsMenu
                      : handleSecondMenu
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
        <div onClick={handleHeight}>
          <FaBars size={24} className="min-[900px]:hidden"></FaBars>
        </div>
      </div>
      <MobileMenu height={height}></MobileMenu>
    </div>
  );
}
