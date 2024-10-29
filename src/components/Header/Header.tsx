import { IoMdSearch } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { ReactNode, useEffect, useState } from "react";
import { client, getNews } from "../../sanity/sanity";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";

const media = [
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
const fetchTitleSuggestions = async (query: any, setResults: any) => {
  const fetchQuery = `*[_type == "news"]{
    Items[@.Title match $titleQuery]{
      Date,
      Title,
      MainText
    }
  }`;

  try {
    let allNews = await getNews();
    let dateNews = allNews.sort(
      (a: any, b: any) =>
        new Date(b.Date).valueOf() - new Date(a.Date).valueOf()
    );
    dateNews = dateNews.map((item: any, index: number) => ({
      ...item,
      id: index,
    }));

    let findNews = await client.fetch(fetchQuery, {
      titleQuery: `${query}*` as any,
    });
    findNews = findNews[0].Items;
    const matchedTitles = findNews.flat().map((item: any) => item.Title);
    const resultNews = dateNews.filter((news: any) =>
      matchedTitles.includes(news.Title)
    );
    console.log(resultNews);
    setResults(resultNews);
  } catch (err) {
    console.error("Ошибка при поиске:", err);
    setResults([]);
  }
};

export default function Header() {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 100);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (debouncedQuery.length >= 2) {
      fetchTitleSuggestions(debouncedQuery, setSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [debouncedQuery]);

  return (
    <header className="w-full flex text-white py-4 items-center  flex-shrink-0">
      <div className="flex">
        <a href="/" className="cursor-pointer">
          <img
            src="лого.png"
            alt="Дум кчр"
            className="flex-shrink-0 w-20 h-16 min-[1280px]:w-auto min-[1280px]:h-auto"
          ></img>
        </a>

        <div className="flex flex-col w-[50rem] max-[1440px]:w-[30rem] max-[1600px]:w-[30rem] max-[1200px]:w-[20rem] justify-center">
          <p className="flex max-[1920px]:w-full font-bold  text-[30px] max-[1440px]:text-[20px] max-[1200px]:text-[15px] max-[1600px]:text-[20px] max-[1440px]:items-center">
            ДУХОВНОЕ УПРАВЛЕНИЕ МУСУЛЬМАН
          </p>
          <p className="flex max-[1920px]:w-full font-bold  text-[30px] max-[1440px]:text-[20px]  max-[1200px]:text-[15px] max-[1600px]:text-[20px]  max-[1440px]:items-center">
            КАРАЧАЕВО-ЧЕРКЕССКОЙ РЕСПУБЛИКИ
          </p>
        </div>
      </div>

      <div className="relative w-[40%] min-[1280px]:flex justify-center items-center hidden flex-col gap-2">
        <div className="flex relative justify-center items-center max-[1280px]:w-full w-full max-[2560px]:w-full">
          <input
            type="search"
            placeholder="Поиск"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 w-[90%] bg-inherit outline-none border-2 border-white flex items-center rounded-full h-12 text-[1.2rem] placeholder-white"
          ></input>
          <IoMdSearch className="absolute max-[1280px]:right-6 max-[2560px]:right-20 max-[1920px]:right-12 right-12 w-8 h-8" />
        </div>
        {suggestions.length > 0 && (
          <ul className="z-10 text-white mt-2 w-[90%] top-full rounded-lg overflow-hidden flex flex-col gap-1 absolute">
            {suggestions.map((item: any) => {
              return (
                <li className="text-white font-inter text-[20px] text-wrap px-4 rounded-[30px] py-2 bg-[#1a7e56] hover:text-[#c9ffd7]">
                  <a href={`/NewsPage/${item.id}`}>{item.Title}</a>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="flex flex-col justify-center items-center ml-auto max-[500px]:hidden">
        <p className="ml-auto font-inter min-[1280px]:text-[20px] text-[14px]">
          Мы в соц.сетях
        </p>
        <ul className="flex gap-1 justify-center items-center mb-5">
          {media.map((item: { node: ReactNode; href: string }, index) => {
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
    </header>
  );
}
