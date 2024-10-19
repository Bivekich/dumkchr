interface AddMenuProps {
  Links: Array<{ title: string; href: string }>;
}
export default function AddMenu({ Links }: AddMenuProps) {
  return (
    <div className="w-fit p-4 bg-[#177245] flex transition-all text-white rounded-[15px] select-none h-fit">
      <ul className="flex flex-col text-white gap-4 ">
        {Links.map((link) => {
          return (
            <a href={link.href} className="hover:text-green-300">
              {link.title}
            </a>
          );
        })}
      </ul>
    </div>
  );
}
