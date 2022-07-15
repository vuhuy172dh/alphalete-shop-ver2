import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  linkName1?: string;
  linkName2?: string;
  href1?: string;
  href2?: string;
  position?: 'start' | 'center' | 'end';
}

const SlideshowContext = ({
  children,
  title,
  subtitle,
  linkName1,
  linkName2,
  href1,
  href2,
  position = 'start'
}: Props) => {
  return (
    <div className="w-full h-full relative">
      <div className="relative z-1">{children}</div>
      <div
        className={`absolute left-0 bottom-0 z-2 w-full flex ${position === 'start'
            ? 'justify-start'
            : position === 'center'
              ? 'justify-center'
              : 'justify-end'
          }`}
      >
        <div
          className={`w-fit h-full flex flex-col gap-1 mx-12 mb-8 ${position === 'start'
              ? 'items-start'
              : position === 'center'
                ? 'items-center'
                : 'items-end'
            } `}
        >
          <h1 className="font-bold text-[2.5rem] leading-none tracking-tight">
            {title}
          </h1>
          <h4 className="font-[500] text-[0.7rem] leading-none">{subtitle}</h4>
          {href1 && (
            <Link href={href1}>
              <div className="group w-fit h-full px-4 py-2 rounded-full bg-secondary_30 dark:bg-primary_30 backdrop-blur-lg hover:translate-y-[-0.25rem] hover:bg-secondary hover:dark:bg-primary duration-300 cursor-pointer">
                <p className="font-bold text-xl leading-none text-secondary dark:text-primary group-hover:text-primary dark:group-hover:text-secondary duration-300">
                  {linkName1}
                </p>
              </div>
            </Link>
          )}
          {href2 && (
            <Link href={href2}>
              <div className="group w-fit h-full px-4 py-2 rounded-full bg-secondary_30 dark:bg-primary_30 backdrop-blur-lg hover:translate-y-[-0.25rem] hover:bg-secondary hover:dark:bg-primary duration-300 cursor-pointer">
                <p className="font-bold text-xl leading-none text-secondary dark:text-primary group-hover:text-primary dark:group-hover:text-secondary duration-300">
                  {linkName2}
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideshowContext;
