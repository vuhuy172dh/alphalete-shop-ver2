import React from 'react';
import Link from 'next/link';

type TypeProps = {
  href: string;
  children: React.ReactNode;
};

const LinkBtn = ({ href, children }: TypeProps) => {
  return (
    <Link href={href}>
      <a
        className={`h-full flex items-center relative after:block after:h-[1px] after:w-full after:bg-secondary dark:after:bg-primary after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:scale-y-100 after:origin-[100%_100%] after:transition-[transform] after:duration-[350ms] after:ease-linear hover:after:scale-x-100 hover:after:scale-y-100 hover:after:origin-[0%_100%]`}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkBtn;
