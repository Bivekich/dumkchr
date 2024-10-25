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
  /*const firstMenuLinks: Array<{ title: string; href: string }> = [
    { title: "РУКОВОДСТВО", href: "#" },
    { title: "КОМИТЕТЫ", href: "#" },
    { title: "МУФТИЙ", href: "/MuftiyaCHR" },
    { title: "ЗАМЕСТИТЕЛЬ МУФТИЯ", href: "/MuftiyaDeputy" },
    { title: "ДОКУМЕНТЫ", href: "/Documents" },
  ];
  const secondMenuLinks: Array<{ title: string; href: string }> = [
    { title: "ФОТО", href: "/PhotoPage" },
    { title: "ВИДЕО", href: "/VideoPage" },
  ];*/
  return (
    <div
      className={`w-[49rem] bg-white h-${height} py-${
        height === "0" ? "0" : "5"
      }  min-[820px]:hidden mt-5 rounded-[30px] duration-500 ease-in-out transition-[height]`}
    >
      <ul className="w-full flex flex-col justify-center items-center gap-4 ">
        {links.map((link, index) => {
          return (
            <div key={index}>
              <a
                href={link.href}
                className="font-medium max-[1550px]:items-center flex text-[20px]"
              >
                {link.title}
              </a>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
