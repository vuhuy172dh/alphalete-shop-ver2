import { useState } from 'react';
import useClientRect from '../utils/clientRect-observer';

const ProductDescription = () => {
  const [desHover, setDesHover] = useState<boolean>(false);
  const { rect: rectDes, ref: refDes } = useClientRect([desHover]);

  console.log(rectDes?.height);
  return (
    <div className="h-full w-full">
      <div style={{height: rectDes?.height}} className="transition-all duration-300"></div>
      <div className="h-12 flex px-2 relative">
        <div
          className="flex-1 group"
          onMouseEnter={() => setDesHover(true)}
          onMouseLeave={() => setDesHover(false)}
        >
          <div className="relative flex h-full min-w-[8rem] cursor-pointer items-center justify-center whitespace-nowrap text-center font-[500]">
            <span className="leading-normal font-bold w-full h-1/2 border-r border-r-secondary_20 dark:border-r-primary_20 text-[0.7rem] opacity-60 flex items-center justify-center">
              DESCRIPTION
            </span>
          </div>
          <div className="absolute left-0 bottom-12 w-full h-0 invisible opacity-0 group-hover:h-fit group-hover:visible group-hover:opacity-100 transition-all group-hover:delay-300 group-hover:duration-200 duration-[0ms]" ref={refDes}>
            <p>
              Custom sourced Italian yarn fibers are blended together to create
              an irresistibly silky, smooth hand-feel. Our exclusive
              full-interlock knit construction forms a more dense seamless
              fabric that maintains breathability. Increased elasticity provides
              unmatched compression, shape retention, and flexibility made to
              move in sync with you. Our physique-enhancing seam work is
              structurally reinforced to provide support and durability. Amplify
              tops offer a form-fitting look while amplify bottoms are designed
              to accentuate curves in all of the right places.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative flex h-full min-w-[8rem] cursor-pointer items-center justify-center whitespace-nowrap text-center font-[500]">
            <span className="leading-normal font-bold w-full h-1/2 border-r border-r-secondary_20 dark:border-r-primary_20 text-[0.7rem] opacity-60 flex items-center justify-center">
              HIGHLIGHTS
            </span>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative flex h-full min-w-[8rem] cursor-pointer items-center justify-center whitespace-nowrap text-center font-[500]">
            <span className="leading-normal font-bold w-full h-1/2 border-r border-r-secondary_20 dark:border-r-primary_20 text-[0.7rem] opacity-60 flex items-center justify-center">
              FIT SUGGESTION
            </span>
          </div>
        </div>

        <div className="flex-1 px-4">
          <div className="relative flex h-full min-w-[8rem] cursor-pointer items-center justify-center whitespace-nowrap text-center font-[500]">
            <span className="leading-normal font-bold w-full h-1/2 text-[0.7rem] opacity-60 flex items-center justify-center">
              MATERIALS AND WASHING DIRECTIONS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
