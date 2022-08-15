import LinkBtn from './link-btn';

interface Props {
  title_1: string;
  links_1: string[];
  title_2: string;
  links_2: string[];
  posters: string[];
}

const NavdrawerMenu = ({
  title_1,
  links_1,
  title_2,
  links_2,
  posters
}: Props) => {
  return (
    <div className="w-full flex-col items-center">
      <div className="w-full flex columns-2 my-12">
        <div className="w-full px-6 flex-col">
          <p className="leading-none text-[1rem] font-bold">{title_1}</p>
          {links_1.map((link: string, index: number) => (
            <div className="w-fit h-3 my-4" key={index}>
              <LinkBtn href={`/collectons/${link}`}>
                <p className="leading-none m-0 p-0 font-bold text-[0.8rem] text-secondary_70 dark:text-primary_70">
                  {link}
                </p>
              </LinkBtn>
            </div>
          ))}
        </div>
        <div className="w-full px-6 flex-col">
          <p className="leading-none text-[1rem] font-bold">{title_2}</p>
          {links_2.map((link: string, index: number) => (
            <div className="w-fit h-3 my-4" key={index}>
              <LinkBtn href={`/collectons/${link}`}>
                <p className="leading-none m-0 p-0 font-bold text-[0.8rem] text-secondary_70 dark:text-primary_70">
                  {link}
                </p>
              </LinkBtn>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-[calc(100%-3rem)] mx-auto border-t border-t-secondary_50 dark:border-t-primary_50" />
      <div className="w-full py-12 px-6 flex gap-6 overflow-hidden">
        {posters.map((poster_src: string, index: number) => (
          <div className="w-[60vw] min-w-[300px] relative" key={index}>
            <div className="relative pt-[133%] border rounded-3xl border-secondary_20 dark:border-primary_20 overflow-hidden">
              <img
                src={poster_src}
                alt="poster"
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavdrawerMenu;
