import { IoMdSearch } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { ReactNode } from "react";
const media = [
  <FaWhatsapp className="size-[24px]" />,
  <SlSocialVkontakte className="size-[24px]" />,
  <PiTelegramLogoLight className="size-[24px]" />,
  <AiOutlineYoutube className="size-[24px]" />,
];
export default function Header() {
  return (
    <header className="w-full flex text-white py-4 items-center  flex-shrink-0">
      <div className="flex">
        <img
          src="лого.png"
          alt="Дум кчр"
          className="flex-shrink-0 w-20 h-16 min-[820px]:w-auto min-[820px]:h-auto"
        ></img>
        <div className="flex flex-col w-[50rem] max-[1440px]:w-[30rem] max-[1600px]:w-[30rem] max-[1200px]:w-[20rem] justify-center">
          <p className="flex max-[1920px]:w-full font-bold  text-[30px] max-[1440px]:text-[20px] max-[1200px]:text-[15px] max-[1600px]:text-[20px] max-[1440px]:items-center">
            ДУХОВНОЕ УПРАВЛЕНИЕ МУСУЛЬМАН
          </p>
          <p className="flex max-[1920px]:w-full font-bold  text-[30px] max-[1440px]:text-[20px]  max-[1200px]:text-[15px] max-[1600px]:text-[20px]  max-[1440px]:items-center">
            КАРАЧАЕВО-ЧЕРКЕССКОЙ РЕСПУБЛИКИ
          </p>
        </div>
      </div>

      <search className="w-[40%] min-[820px]:flex justify-center items-center hidden">
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
        <p className="ml-auto font-inter min-[820px]:text-[20px] text-[14px]">
          Мы в соц.сетях
        </p>
        <ul className="flex gap-1 justify-center items-center mb-5">
          {media.map((icon: ReactNode, index) => {
            return (
              <a
                href="#"
                key={index}
                className="min-[820px]:size-12 size-9 rounded-full flex justify-center items-center text-[#004B2D] bg-[#FFFFFF]"
              >
                {icon}
              </a>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
