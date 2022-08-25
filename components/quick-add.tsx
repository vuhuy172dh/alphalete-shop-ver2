import { useState } from 'react';

interface Props {
  sizes: string[];
  mouseEnter: boolean;
}

const QuickAdd = ({ sizes, mouseEnter }: Props) => {
  const [enter, setEnter] = useState<boolean>(false);
  const handleEnter = () => {
    setEnter(true);
  };
  const handleLeave = () => {
    setEnter(false);
  };
  return (
    <div
      className={`w-[calc(100%-2rem)] absolute bottom-1 left-4 z-10 cursor-default bg-secondary flex flex-col items-center px-4 rounded-2xl translate-y-[calc(100%+0.25rem)] transition-all duration-500 ${
        mouseEnter
          ? enter
            ? 'translate-y-[0.1rem]'
            : 'translate-y-[6rem]'
          : ''
      }`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="w-full flex justify-center py-2 border-b">
        <p className="text-[1rem] font-extrabold text-primary">QUICK ADD +</p>
      </div>
      <div className="w-full py-4 px-4 flex justify-center flex-wrap">
        {sizes.map((size, index) => (
          <div
            className="bg-primary rounded-md flex justify-center items-center mx-1 my-1 py-1 cursor-pointer"
            key={index}
          >
            <p className="leading-none text-secondary text-[0.9rem] font-bold px-[3px]">
              {size}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickAdd;
