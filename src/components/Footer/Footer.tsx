import { Map, YMaps } from "@pbe/react-yandex-maps";
import { ReactNode, useEffect, useState } from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { SlSocialVkontakte } from "react-icons/sl";
import { getFooter } from "../../sanity/sanity";

export default function Footer() {
  const [mediaNew, setMediaNew] = useState<{ node: ReactNode; href: string }[]>(
    []
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addres, setAdress] = useState("");
  let media = [
    {
      node: <FaWhatsapp className="size-7"></FaWhatsapp>,
      href: "https://chat.whatsapp.com/Krl4SDwxYJr9GFbOYM5sjI",
    },
    {
      node: <SlSocialVkontakte className="size-7" />,
      href: "https://vk.com/dumkchr",
    },
    {
      node: <PiTelegramLogoLight className="size-7"></PiTelegramLogoLight>,
      href: "https://t.me/dum_kchr",
    },
    {
      node: <AiOutlineYoutube className="size-7"></AiOutlineYoutube>,
      href: "https://youtube.com/@dumkchr?si=VHmY3BiZGzg7f0Hh",
    },
  ];
  useEffect(() => {
    const query = async () => {
      const footer = await getFooter();
      setPhoneNumber(footer.ourContacts.phoneNumber);
      setAdress(footer.ourContacts.adres);
      media = media.map((item, index) => {
        return { ...item, href: footer.mediaArray[index] };
      });
      setMediaNew(media);
    };
    query();
  }, []);
  const mapState = {
    center: [44.195662, 42.036152],
    zoom: 17,
  };
  return (
    <div className="max-[1279px]:h-fit h-96 bg-white w-screen max-[1279px]:w-full rounded-tl-[30px] -mx-14 max-[1279px]:mx-0 rounded-tr-[30px] max-[1279px]:px-0 px-14 py-7 flex flex-col gap-5 text-[#004B2D] justify-center items-center max-[1279px]:p-4">
      <div className="flex gap-32 w-full max-[1800px]:gap-40 max-[1700px]:gap-20 max-[1400px]:gap-5 max-[1300px]:gap-10 justify-between max-[1279px]:gap-10 max-[1279px]:flex-wrap  max-[1279px]:px-4">
        <div className="flex gap-4 w-[30%] max-[1200px]:w-[20%] max-[820px]:w-full">
          <div className="h-16 w-16 bg-[#004B2D] flex rounded-full flex-shrink-0">
            <img src="/dumChr.png"></img>
          </div>
          <p className="max-[1920px]:w-[100%] max-[1660px]:w-[100%] max-[1440px]:w-[25rem] w-[60%] font-medium text-[18px] max-[1279px]:text-[14px]">
            ДУХОВНОЕ УПРАВЛЕНИЕ МУСУЛЬМАН КАРАЧАЕВО-ЧЕРКЕССКОЙ РЕСПУБЛИКИ
          </p>
        </div>
        <div className="flex flex-col gap-5 max-[1279px]:gap-1">
          <p className="font-bold text-[20px] font-inter">Популярные разделы</p>
          <a href="/NewsPage">Новости</a>
          <a href="/Fetvy">Фетвы</a>
          <a href="/Appeals">Обращения</a>
        </div>
        <div className="flex flex-col gap-5 max-[1279px]:gap-1">
          <p className="font-bold text-[20px]">Наши контакты</p>
          <p>{phoneNumber}</p>
          <p className="w-80">{addres}</p>
        </div>
        <div className="flex flex-col gap-5 max-[1279px]:gap-1">
          <p className="font-bold text-[20px]">Как нас найти</p>
          <div className="w-64 h-52 bg-[#D9D9D9]">
            <YMaps>
              <Map defaultState={mapState} className="w-full h-full"></Map>
            </YMaps>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center max-[428px]:flex mr-auto px-4 min-[850px]:hidden">
        <p className="font-inter min-[1280px]:text-[20px] text-[14px] mr-auto">
          Мы в соц.сетях
        </p>
        <ul className="flex gap-1 justify-center items-center mb-5">
          {mediaNew.map((item: { node: ReactNode; href: string }, index) => {
            return (
              <a
                href={item.href}
                key={index}
                className="min-[1280px]:size-12 size-9 rounded-full flex justify-center items-center text-[#004B2D] bg-[#FFFFFF]"
              >
                {item.node}
              </a>
            );
          })}
        </ul>
      </div>
      <div className="w-full h-10 border-t-2 border-[#004B2D] items-center flex justify-between text-[#004B2D]"></div>
    </div>
  );
}
