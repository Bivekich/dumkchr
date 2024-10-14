export default function AddMenu() {
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
  return (
    <div className="w-44  bg-white flex flex-col absolute transition-all text-white right-8">
      <ul className="flex flex-col text-black">
        {links.map((link) => {
          return <a href={link.href}>{link.title}</a>;
        })}
      </ul>
    </div>
  );
}
