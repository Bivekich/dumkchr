import { IoMdSearch } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { ReactNode } from "react";
const media = [
  <FaWhatsapp />,
  <SlSocialVkontakte />,
  <PiTelegramLogoLight />,
  <AiOutlineYoutube />,
];
export default function Header() {
  return (
    <header className="w-full flex text-white py-4 items-center px-2 flex-shrink-0">
      <div className="flex h-32">
        <img src="лого.png" alt="Дум кчр" className="flex-shrink-0 "></img>
        <p className="flex w-[45rem] font-bold leading-[45px] text-[30px] max-[1440px]:w-[30rem] max-[1200px]:w-[20rem] max-[1440px]:text-[20px] max-[1200px]:text-[15px] max-[1440px]:leading-[20px] max-[1440px]:items-center">
          ДУХОВНОЕ УПРАВЛЕНИЕ МУСУЛЬМАН КАРАЧАЕВО-ЧЕРКЕССКОЙ РЕСПУБЛИКИ
        </p>
      </div>

      <search className="w-[40%] flex justify-center items-center">
        <div className="flex relative justify-center items-center max-[1280px]:w-full w-full max-[2560px]:w-full">
          <input
            type="search"
            placeholder="Поиск"
            className="px-4 w-[90%] bg-inherit outline-none border-2 border-white flex items-center rounded-full h-12 text-[1.2rem] placeholder-white"
          ></input>
          <IoMdSearch className="absolute max-[1280px]:right-6 max-[2560px]:right-20 max-[1920px]:right-12 right-12 w-8 h-8" />
        </div>
      </search>

      <div className="flex flex-col justify-center items-center ml-auto">
        <p className="ml-auto">Мы в соц.сетях</p>
        <ul className="flex gap-1 h-full justify-center items-center">
          {media.map((icon: ReactNode) => {
            return (
              <div className="size-12 rounded-full flex justify-center items-center text-[#004B2D] bg-[#FFFFFF]">
                {icon}
              </div>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
