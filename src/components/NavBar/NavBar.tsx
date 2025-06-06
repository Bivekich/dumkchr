import { MdKeyboardArrowDown } from 'react-icons/md';
import Menu from '../Menu';
import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function NavBar() {
  const links: Array<{ title: string; href: string }> = [
    { title: 'ГЛАВНАЯ', href: '/' },
    { title: 'МУФТИЯТ', href: '/MuftiyaCHR' },
    { title: 'УКАЗЫ', href: '/Decree' },
    { title: 'НОВОСТИ', href: '/NewsPage' },
    { title: 'ОБРАЩЕНИЯ', href: '/Appeals' },
    { title: 'ОБРАТНАЯ СВЯЗЬ', href: '/FeedBack' },
    { title: 'МЕДИАТЕКА', href: '' },
    { title: 'КОНТАКТЫ', href: '/Contacts' },
    { title: 'ХАЛЯЛЬ', href: '/Halal' },
    { title: 'ФЕТВЫ', href: '/Fetvy' },
  ];
  const firstMenuLinks: Array<{ title: string; href: string }> = [
    { title: 'РУКОВОДСТВО', href: '#' },
    { title: 'КОМИТЕТЫ', href: '#' },
    { title: 'ДОКУМЕНТЫ', href: '/Documents' },
    { title: 'БУХГАЛТЕРИЯ', href: '/Accounting' },
  ];
  const secondMenuLinks: Array<{ title: string; href: string }> = [
    { title: 'ФОТО', href: '/PhotoPage' },
    { title: 'ВИДЕО', href: '/VideoPage' },
  ];
  const [firstMenu, isFirstShow] = useState<boolean>(false);
  const [secondMenu, isSecondMenuShow] = useState<boolean>(false);
  const handleFirtsMenu = () => {
    isFirstShow(!firstMenu);
  };
  const handleSecondMenu = () => {
    isSecondMenuShow(!secondMenu);
  };

  const [height, setHeight] = useState<string>('0');
  const handleHeight = () => {
    height === '0' ? setHeight('fit') : setHeight('0');
  };
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (firstRef.current && !firstRef.current.contains(event.target as Node)) {
      isFirstShow(false);
    }
    if (
      secondRef.current &&
      !secondRef.current.contains(event.target as Node)
    ) {
      isSecondMenuShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full text-[#004B2D] font-medium">
      <div className="w-full bg-white flex items-center rounded-[30px] px-10 h-16 max-[900px]:justify-center">
        <ul className="min-[900px]:flex w-full justify-between items-center text-[20px] font-medium hidden">
          {links.map((link, index) => {
            return link.title === 'МУФТИЯТ' || link.title === 'МЕДИАТЕКА' ? (
              <div
                key={index}
                className="flex justify-center items-center whitespace-nowrap"
                ref={link.title === 'МУФТИЯТ' ? firstRef : secondRef}
              >
                <div>
                  <div
                    onClick={
                      link.title === 'МУФТИЯТ'
                        ? handleFirtsMenu
                        : handleSecondMenu
                    }
                    className="font-medium max-[1550px]:items-center flex max-[1440px]:text-[14px] cursor-pointer select-none"
                  >
                    {link.title}
                  </div>
                  {link.title === 'МУФТИЯТ'
                    ? firstMenu && <Menu Links={firstMenuLinks}></Menu>
                    : secondMenu && <Menu Links={secondMenuLinks}></Menu>}
                </div>

                <MdKeyboardArrowDown
                  className="size-5"
                  onClick={
                    link.title === 'МУФТИЯТ'
                      ? handleFirtsMenu
                      : handleSecondMenu
                  }
                />
              </div>
            ) : (
              <a
                key={index}
                href={link.href}
                className="font-medium max-[1440px]:text-[14px] max-[1230px]:text-[12px] whitespace-nowrap"
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
