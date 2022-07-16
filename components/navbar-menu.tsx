import { title } from 'process';
import { useState } from 'react';
import LinkBtn from './link-btn';

interface Props {
  posters_default: string[];
  title_1: string;
  links_1: string[];
  posters_1: string[];
  title_2: string;
  links_2: string[];
  posters_2: string[];
}

interface HoverProps {
  isHovered: boolean;
  index: number | undefined;
  title: string | undefined;
}

const NavbarMenu = ({
  posters_default,
  title_1,
  links_1,
  posters_1,
  title_2,
  links_2,
  posters_2
}: Props) => {
  const [hover, setHover] = useState<HoverProps>({
    isHovered: false,
    index: undefined,
    title: undefined
  });

  return (
    <div className="w-full h-full flex flex-col">
      <hr className="w-[calc(100%-3rem)] border-t-secondary_30 dark:border-t-primary_30 mx-auto" />
      <div className="flex columns-2 px-8 py-8">
        <div id="menu-list" className="flex w-full columns-2">
          <div className="flex flex-col gap-3 w-full">
            <h2 className="font-bold text-[1.2rem] leading-none">{title_1}</h2>
            <ul className="flex flex-col gap-1">
              {links_1.map((link: string, index) => (
                <li
                  className="w-fit"
                  key={index}
                  onMouseEnter={() => {
                    setHover({ isHovered: true, title: title_1, index: index });
                  }}
                  onMouseLeave={() => {
                    setHover({
                      isHovered: false,
                      title: undefined,
                      index: undefined
                    });
                  }}
                >
                  <LinkBtn href="/collects/jogger">{link}</LinkBtn>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <h2 className="font-bold text-[1.2rem] leading-none">{title_2}</h2>
            <ul className="flex flex-col gap-1">
              {links_2.map((link: string, index) => (
                <li
                  className="w-fit"
                  key={index}
                  onMouseEnter={() => {
                    setHover({ isHovered: true, title: title_2, index: index });
                  }}
                  onMouseLeave={() => {
                    setHover({
                      isHovered: false,
                      title: undefined,
                      index: undefined
                    });
                  }}
                >
                  <LinkBtn href="/collects/jogger">{link}</LinkBtn>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          id="menu-poster"
          className="w-full border-l border-l-secondary_40 dark:border-l-primary_40 px-3"
        >
          {hover.isHovered === false && (
            <div className="w-full h-full flex gap-4">
              {posters_default.map((links, index) => (
                <div
                  className="w-full h-full rounded-lg overflow-hidden transition-all hover:scale-[1.02]"
                  key={index}
                >
                  <img
                    src={links}
                    alt="poster"
                    className="w-full max-w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
          {hover.isHovered && hover.index !== undefined && hover.title && (
            <div className="w-full h-full rounded-lg overflow-hidden transition-all hover:scale-[1.03]">
              <img
                src={
                  hover.title === title_1
                    ? posters_1[hover.index]
                    : posters_2[hover.index]
                }
                alt="poster"
                className="w-full max-w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
