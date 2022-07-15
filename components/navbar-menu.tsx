import LinkBtn from './link-btn';

interface Props {
  title_1: string;
  links_1: string[];
  title_2: string;
  links_2: string[];
}

const NavbarMenu = ({ title_1, links_1, title_2, links_2 }: Props) => {
  return (
    <div className="w-full h-full flex flex-col">
      <hr className="w-[calc(100%-3rem)] border-t-secondary_30 dark:border-t-primary_30 mx-auto" />
      <div className="flex columns-2 px-8 py-8">
        <div id="menu-list" className="flex w-full columns-2">
          <div className="flex flex-col gap-3 w-full">
            <h2 className="font-bold text-[1.2rem] leading-none">{title_1}</h2>
            <ul className="flex flex-col gap-1">
              {links_1.map((link: string) => (
                <li className="w-fit">
                  <LinkBtn href="/collects/jogger">{link}</LinkBtn>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <h2 className="font-bold text-[1.2rem] leading-none">{title_2}</h2>
            <ul className="flex flex-col gap-1">
              {links_2.map((link: string) => (
                <li className="w-fit">
                  <LinkBtn href="/collects/jogger">{link}</LinkBtn>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="menu-poster" className="w-full bg-white"></div>
      </div>
    </div>
  );
};

export default NavbarMenu;
