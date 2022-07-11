import React from 'react';

type PropsType = {
  paddingHorizon?: string;
  slideEffectDuration?: string;
  children: React.ReactNode;
};

const ButtonSlideEffect = ({
  children,
  paddingHorizon = '0.5rem',
  slideEffectDuration = '600ms'
}: PropsType) => {
  return (
    <button
      className={`h-full flex items-center px-[${paddingHorizon}] relative after:block after:h-[1px] after:w-full after:bg-secondary dark:after:bg-primary after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:scale-y-100 after:origin-[100%_100%] after:transition-[transform] after:duration-[${slideEffectDuration}] after:ease-linear hover:after:scale-x-100 hover:after:scale-y-100 hover:after:origin-[0%_100%]`}
    >
      {children}
    </button>
  );
};

export default ButtonSlideEffect;
