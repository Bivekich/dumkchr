import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function MobileMenu({ height }: { height: string }) {
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
  const [firstMenuOpen, isFirstMenuOpen] = useState<boolean>(false);
  const [secondMenuOpen, isSecondMenuOpen] = useState<boolean>(false);
  const handleFirstMenu = () => {
    isFirstMenuOpen(!firstMenuOpen);
    isSecondMenuOpen(false);
  };

  const handleSecondMenu = () => {
    isSecondMenuOpen(!secondMenuOpen);
    isFirstMenuOpen(false);
  };
  return (
    <div
      className={`w-full bg-white
      min-[1281px]:hidden mt-5 rounded-[30px] duration-500 ease-in-out transition-[height] items-center justify-center `}
      style={{
        height: height === "fit" ? "fit-content" : "0",
        padding: height === "fit" ? "10px 5px 10px 5px" : "0",
      }}
    >
      <ul className="w-full flex flex-col justify-center items-center gap-4">
        {links.map((link, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center w-full justify-center"
            >
              <div className="flex items-center w-full justify-center gap-1">
                <a
                  href={link.href}
                  className="font-medium max-[1550px]:items-center flex text-[20px] flex-shrink-0 items-center justify-center"
                >
                  {link.title}
                </a>

                {link.title === "МУФТИЯТ" || link.title === "МЕДИАТЕКА" ? (
                  <MdKeyboardArrowDown
                    size={20}
                    onClick={
                      link.title === "МЕДИАТЕКА"
                        ? handleSecondMenu
                        : handleFirstMenu
                    }
                  />
                ) : (
                  ""
                )}
              </div>

              {link.title === "МЕДИАТЕКА" && secondMenuOpen && (
                <div className="flex flex-col py-4 items-center bg-[#177245] justify-center w-full text-white rounded-[15px]">
                  {secondMenuLinks.map((link, index) => {
                    return (
                      <a
                        key={index}
                        href={link.href}
                        className="text-[18px] py-1"
                      >
                        {link.title}
                      </a>
                    );
                  })}
                </div>
              )}

              {link.title === "МУФТИЯТ" && firstMenuOpen && (
                <div className="flex flex-col py-4 items-center bg-[#177245] justify-center w-full text-white rounded-[15px]">
                  {firstMenuLinks.map((link, index) => {
                    return (
                      <a
                        key={index}
                        href={link.href}
                        className="text-[18px] py-1"
                      >
                        {link.title}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
