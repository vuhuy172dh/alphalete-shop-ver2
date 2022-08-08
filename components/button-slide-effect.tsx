import React from 'react';

type PropsType = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

const ButtonSlideEffect = ({ children, onClick }: PropsType) => {
  return (
    <button
      className={`h-full flex items-center relative after:block after:h-[1px] after:w-full after:bg-secondary dark:after:bg-primary after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:scale-y-100 after:origin-[100%_100%] after:transition-[transform] after:duration-[350ms] after:ease-linear hover:after:scale-x-100 hover:after:scale-y-100 hover:after:origin-[0%_100%]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonSlideEffect;
