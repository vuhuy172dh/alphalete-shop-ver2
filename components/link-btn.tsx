import React from 'react';
import Link from 'next/link';

type TypeProps = {
  href: string;
  fontSize?: string;
  fontWight?: string;
  paddingLeftRight?: string;
  paddingTopBottom?: string;
  height?: string;
  effectSlideTime?: string;
  children: React.ReactNode;
};

const LinkBtn = ({
  href,
  fontSize = 'text-[0.8rem]',
  fontWight = 'font-bold',
  paddingLeftRight = 'px-[0.5rem]',
  paddingTopBottom = 'py-0',
  height = 'h-full',
  effectSlideTime = '600ms',
  children
}: TypeProps) => {
  return (
    <Link href={href}>
      <a
        className={`${height} flex items-center ${paddingTopBottom} ${paddingLeftRight} ${fontSize} ${fontWight} relative after:block after:h-[1px] after:w-full after:bg-secondary dark:after:bg-primary after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:scale-y-100 after:origin-[100%_100%] after:transition-[transform] after:duration-[${effectSlideTime}] after:ease-linear hover:after:scale-x-100 hover:after:scale-y-100 hover:after:origin-[0%_100%]`}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkBtn;
