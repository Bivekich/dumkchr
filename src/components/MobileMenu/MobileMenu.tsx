import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
export default function MobileMenu({ height }: { height: string }) {
  const [firstSubMenu, setFirstSubMenu] = useState(false);
  const [secondSubMenu, setSecondSubMenu] = useState(false);
  const handeleFirstSubMenu = () => {
    setFirstSubMenu(!firstSubMenu);
    setSecondSubMenu(false);
  };
  const handleSecondSubMenu = () => {
    setSecondSubMenu(!secondSubMenu);
    setFirstSubMenu(false);
  };
  const links: Array<{ title: string; href: string }> = [
    { title: 'ГЛАВНАЯ', href: '/' },
    { title: 'МУФТИЯТ', href: '' },
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
    { title: 'РУКОВОДСТВО', href: '' },
    { title: 'КОМИТЕТЫ', href: '' },
    { title: 'ДОКУМЕНТЫ', href: '/Documents' },
    { title: 'БУХГАЛТЕРИЯ', href: '/Accounting' },
  ];
  const secondMenuLinks: Array<{ title: string; href: string }> = [
    { title: 'ФОТО', href: '/PhotoPage' },
    { title: 'ВИДЕО', href: '/VideoPage' },
  ];
  const firstAddMenuLinks: Array<{ title: string; href: string }> = [
    { title: 'МУФТИЙ КЧР', href: '/MuftiyaCHR' },
    { title: 'РУКОВОДИТЕЛЬ АППАРАТА МУФТИЯ КЧР', href: '/ChiffOfStaff' },
    { title: 'КАДИЙ', href: '/Kadie' },
    {
      title: 'ЗАМЕСТИТЕЛИ МУФТИЯ КЧР',
      href: '/MuftiyaDeputy',
    },
    {
      title: 'ФОНДЫ ДУМ КЧР',
      href: '/Foundation',
    },
    { title: 'СОВЕТНИК МУФТИЯ КЧР', href: '/MuftiyaSupport' },
  ];
  const secondAddMenuLinks: Array<{ title: string; href: string }> = [
    { title: 'ОТДЕЛ ПРИМИРЕНИЯ (МАСЛАХАТ)', href: '/Sections/Maslahat' },
    {
      title: 'КОМИТЕТ ПО ДЕЛАМ МОЛОДЕЖИ И ПРОСВЕЩЕНИЯ',
      href: '/Sections/Young',
    },
    { title: 'КОМИТЕТ ХАДЖА', href: '/Sections/Hajj' },
    {
      title: 'КОМИТЕТ ПО КОНТРОЛЮ ИСЛАМСКОГО РЕЛИГИОЗНОГО ОБРАЗОВАНИЯ',
      href: '/Sections/Education',
    },
    {
      title: 'КОМИТЕТ ИНФОРМАЦИИ, ОБЩЕСТВЕННЫХ СВЯЗЕЙ СМИ',
      href: '/Sections/SmiCom',
    },
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
        height: height === 'fit' ? 'fit-content' : '0',
        padding: height === 'fit' ? '10px 5px 10px 5px' : '0',
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
                {link.title === 'МУФТИЯТ' || link.title === 'МЕДИАТЕКА' ? (
                  <div
                    className="font-medium max-[1550px]:items-center flex text-[20px] flex-shrink-0 items-center justify-center select-none"
                    onClick={
                      link.title === 'МУФТИЯТ' || link.title === 'МЕДИАТЕКА'
                        ? link.title === 'МУФТИЯТ'
                          ? handleFirstMenu
                          : handleSecondMenu
                        : () => {
                            return;
                          }
                    }
                  >
                    {link.title}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="font-medium max-[1550px]:items-center flex text-[20px] flex-shrink-0 items-center justify-center select-none"
                    onClick={
                      link.title === 'МУФТИЯТ' || link.title === 'МЕДИАТЕКА'
                        ? link.title === 'МУФТИЯТ'
                          ? handleFirstMenu
                          : handleSecondMenu
                        : () => {
                            return;
                          }
                    }
                  >
                    {link.title}
                  </a>
                )}

                {link.title === 'МУФТИЯТ' || link.title === 'МЕДИАТЕКА' ? (
                  <MdKeyboardArrowDown
                    size={20}
                    onClick={
                      link.title === 'МЕДИАТЕКА'
                        ? handleSecondMenu
                        : handleFirstMenu
                    }
                  />
                ) : (
                  ''
                )}
              </div>

              {link.title === 'МЕДИАТЕКА' && secondMenuOpen && (
                <div className="flex flex-col py-4 items-center bg-[#177245] justify-center w-full text-white rounded-[15px]">
                  {secondMenuLinks.map((link, index) => {
                    return (
                      <div className="w-full items-center justify-center">
                        <div className="flex items-center justify-center">
                          <a
                            key={index}
                            href={link.href}
                            className="text-[18px] py-1 items-center self-center"
                          >
                            {link.title}
                          </a>
                          {link.title === 'РУКОВОДСТВО' ||
                          link.title === 'КОМИТЕТЫ' ? (
                            <MdKeyboardArrowDown
                              size={20}
                            ></MdKeyboardArrowDown>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              {link.title === 'МУФТИЯТ' && firstMenuOpen && (
                <div className="flex flex-col py-4 items-center bg-[#177245] justify-center w-full text-white rounded-[15px]">
                  {firstMenuLinks.map((link, index) => {
                    return (
                      <div className="w-full items-center justify-center">
                        <div className="flex items-center justify-center">
                          {link.title === 'РУКОВОДСТВО' ||
                          link.title === 'КОМИТЕТЫ' ? (
                            <div
                              key={index}
                              className="text-[18px] py-1 items-center self-center"
                              onClick={
                                link.title === 'РУКОВОДСТВО'
                                  ? handeleFirstSubMenu
                                  : handleSecondSubMenu
                              }
                            >
                              {link.title}
                            </div>
                          ) : (
                            <a
                              key={index}
                              href={link.href}
                              className="text-[18px] py-1 items-center self-center"
                            >
                              {link.title}
                            </a>
                          )}

                          {link.title === 'РУКОВОДСТВО' ||
                          link.title === 'КОМИТЕТЫ' ? (
                            <MdKeyboardArrowDown
                              size={20}
                              onClick={
                                link.title === 'РУКОВОДСТВО'
                                  ? handeleFirstSubMenu
                                  : handleSecondSubMenu
                              }
                            ></MdKeyboardArrowDown>
                          ) : (
                            ''
                          )}
                        </div>

                        <div className="bg-[#1e6240] w-full flex h-fit flex-col items-center justify-center text-center gap-5">
                          {link.title === 'КОМИТЕТЫ'
                            ? secondSubMenu &&
                              secondAddMenuLinks.map((item, index) => (
                                <a
                                  key={index}
                                  href={item.href}
                                  className="text-[18px] py-1 items-center self-center"
                                >
                                  {item.title}
                                </a>
                              ))
                            : link.title === 'РУКОВОДСТВО'
                            ? firstSubMenu &&
                              firstAddMenuLinks.map((item, index) => (
                                <a
                                  key={index}
                                  href={item.href}
                                  className="text-[18px] py-1 items-center self-center"
                                >
                                  {item.title}
                                </a>
                              ))
                            : ''}
                        </div>
                      </div>
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
