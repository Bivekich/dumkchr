interface PropsMenu {
  Links: Array<{ title: string; href: string }>;
}
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AddMenu from "./AddMenu";
import { useState } from "react";

export default function Menu({ Links }: PropsMenu) {
  const [showFirstMenu, setShowFirstMenu] = useState<boolean>(false);
  const [showSecondMenu, setShowSecondMenu] = useState<boolean>(false);

  const firstAddMenuLinks: Array<{ title: string; href: string }> = [
    { title: "МУФТИЙ КЧР", href: "/MuftiyaCHR" },
    { title: "РУКОВОДИТЕЛЬ АППАРАТА МУФТИЯ КЧР", href: "/ChiffOfStaff" },
    { title: "КАДИЙ", href: "/Kadie" },
    {
      title: "ЗАМЕСТИТЕЛИ МУФТИЯ КЧР",
      href: "/MuftiyaDeputy",
    },
    {
      title: "ФОНДЫ ДУМ КЧР",
      href: "/Foundation",
    },
    { title: "СОВЕТНИК МУФТИЯ КЧР", href: "/MuftiyaSupport" },
    { title: "Совет Улемов", href: "/CouncilofUlema" },
  ];
  const secondAddMenuLinks: Array<{ title: string; href: string }> = [
    { title: "ОТДЕЛ ПРИМИРЕНИЯ (МАСЛАХАТ)", href: "/Sections/Maslahat" },
    {
      title: "КОМИТЕТ ПО ДЕЛАМ МОЛОДЕЖИ И ПРОСВЕЩЕНИЯ",
      href: "/Sections/Young",
    },
    { title: "КОМИТЕТ ХАДЖА", href: "/Sections/Hajj" },
    {
      title: "КОМИТЕТ ПО КОНТРОЛЮ ИСЛАМСКОГО РЕЛИГИОЗНОГО ОБРАЗОВАНИЯ",
      href: "/Sections/Education",
    },
    {
      title: "Комитет по связям с общественностью и СМИ",
      href: "/Sections/SmiCom",
    },
  ];

  const handleFirstMenu = (
    e:
      | React.MouseEvent<SVGElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if ((e.target as Element).id === "РУКОВОДСТВО") setShowFirstMenu(false);
    setShowFirstMenu(!showFirstMenu);
    setShowSecondMenu(false);
  };
  const handleSecondMenu = (
    e:
      | React.MouseEvent<SVGElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if ((e.target as Element).id === "КОМИТЕТЫ") setShowSecondMenu(false);
    setShowSecondMenu(!showSecondMenu);
    setShowFirstMenu(false);
  };
  return (
    <div className="absolute w-[40%] mt-5 flex gap-3 select-none z-50 uppercase">
      <div className="w-52 p-4 bg-[#177245] flex transition-all text-white rounded-[15px] select-none h-fit">
        <ul className="flex flex-col text-[20px] gap-3 select-none ">
          {Links.map((link) => {
            return (
              <div className="select-none">
                {link.title !== "КОМИТЕТЫ" && link.title !== "РУКОВОДСТВО" ? (
                  <li>
                    <a
                      href={link.href}
                      className="select-none hover:text-green-300"
                    >
                      {link.title}
                    </a>
                  </li>
                ) : (
                  <div className="flex items-center w-fit select-none">
                    <li className="hover:text-green-300">
                      <div
                        className={`w-fit relative text-white flex items-center select-none cursor-pointer`}
                        onClick={
                          link.title === "РУКОВОДСТВО"
                            ? (e) => handleFirstMenu(e)
                            : (e) => handleSecondMenu(e)
                        }
                        id={
                          link.title === "РУКОВОДСТВО"
                            ? "РУКОВОДСТВО"
                            : "КОМИТЕТЫ"
                        }
                      >
                        {link.title}
                      </div>
                    </li>

                    <div>
                      {" "}
                      <MdOutlineKeyboardArrowRight
                        onClick={
                          link.title === "РУКОВОДСТВО"
                            ? (e) => handleFirstMenu(e)
                            : (e) => handleSecondMenu(e)
                        }
                        id={
                          link.title === "РУКОВОДСТВО"
                            ? "РУКОВОДСТВО"
                            : "КОМИТЕТЫ"
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </ul>
      </div>
      {showFirstMenu && <AddMenu Links={firstAddMenuLinks}></AddMenu>}
      {showSecondMenu && <AddMenu Links={secondAddMenuLinks}></AddMenu>}
    </div>
  );
}
