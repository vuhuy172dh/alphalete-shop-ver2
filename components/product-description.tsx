import { useState } from 'react';
import useClientRect from '../utils/clientRect-observer';

const ProductDescription = () => {
  const [desHover, setDesHover] = useState<boolean>(false);
  const [hlHover, setHlHover] = useState<boolean>(false);
  const [fsHover, setFsHover] = useState<boolean>(false);
  const [mwHover, setMwHover] = useState<boolean>(false);
  const { rect: rectDes, ref: refDes } = useClientRect([desHover]);
  const { rect: rectHl, ref: refHl } = useClientRect([hlHover]);
  const { rect: rectFs, ref: refFs } = useClientRect([fsHover]);
  const { rect: rectMw, ref: refMw } = useClientRect([mwHover]);

  return (
    <div className="h-full w-full">
      <div
        style={{
          height:
            rectDes?.height ||
            rectHl?.height ||
            rectFs?.height ||
            rectMw?.height
        }}
        className="transition-all duration-300"
      ></div>
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
          <div
            className="absolute left-0 bottom-12 w-full h-0 invisible opacity-0 group-hover:h-fit group-hover:visible group-hover:opacity-100 transition-all group-hover:delay-300 group-hover:duration-200 duration-[0ms]"
            ref={refDes}
          >
            <div className="mx-8 py-5 border-b border-b-secondary_20 dark:border-b-primary_20">
              <p className="leading-relaxed text-[0.8rem]">
                Custom sourced Italian yarn fibers are blended together to
                create an irresistibly silky, smooth hand-feel. Our exclusive
                full-interlock knit construction forms a more dense seamless
                fabric that maintains breathability. Increased elasticity
                provides unmatched compression, shape retention, and flexibility
                made to move in sync with you. Our physique-enhancing seam work
                is structurally reinforced to provide support and durability.
                Amplify tops offer a form-fitting look while amplify bottoms are
                designed to accentuate curves in all of the right places.
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex-1 group"
          onMouseEnter={() => setHlHover(true)}
          onMouseLeave={() => setHlHover(false)}
        >
          <div className="relative flex h-full min-w-[8rem] cursor-pointer items-center justify-center whitespace-nowrap text-center font-[500]">
            <span className="leading-normal font-bold w-full h-1/2 border-r border-r-secondary_20 dark:border-r-primary_20 text-[0.7rem] opacity-60 flex items-center justify-center">
              HIGHLIGHTS
            </span>
          </div>
          <div
            className="absolute left-0 bottom-12 w-full h-0 invisible opacity-0 group-hover:h-fit group-hover:visible group-hover:opacity-100 transition-all group-hover:delay-300 group-hover:duration-200 duration-[0ms]"
            ref={refHl}
          >
            <div className="mx-8 py-5 border-b border-b-secondary_20 dark:border-b-primary_20">
              <p className="leading-relaxed text-[0.8rem]">
                High-waisted legging Form-fitting with an integral 3-tiered,
                tapered waistband Seamless, knit fabric No front seam Back
                scrunch seam detail to enhance curves Leg and glute contouring
                panels Alphalete wordmark logo branding knitted in
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex-1 group"
          onMouseEnter={() => setFsHover(true)}
          onMouseLeave={() => setFsHover(false)}
        >
          <div className="relative flex h-full min-w-[8rem] cursor-pointer items-center justify-center whitespace-nowrap text-center font-[500]">
            <span className="leading-normal font-bold w-full h-1/2 border-r border-r-secondary_20 dark:border-r-primary_20 text-[0.7rem] opacity-60 flex items-center justify-center">
              FIT SUGGESTION
            </span>
          </div>
          <div
            className="absolute left-0 bottom-12 w-full h-0 invisible opacity-0 group-hover:h-fit group-hover:visible group-hover:opacity-100 transition-all group-hover:delay-300 group-hover:duration-200 duration-[0ms]"
            ref={refFs}
          >
            <div className="mx-8 py-5 border-b border-b-secondary_20 dark:border-b-primary_20">
              <p className="leading-relaxed text-[0.8rem]">
                This item runs true to Alphalete’s standard seamless fit. If you
                are between sizes, we recommend sizing up. Model is 5’2”/157cm,
                wearing a size S with a 27”/68cm waist and 38”/96.5cm hips.
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex-1 px-4 group"
          onMouseEnter={() => setMwHover(true)}
          onMouseLeave={() => setMwHover(false)}
        >
          <div className="relative flex h-full min-w-[8rem] cursor-pointer items-center justify-center whitespace-nowrap text-center font-[500]">
            <span className="leading-normal font-bold w-full h-1/2 text-[0.7rem] opacity-60 flex items-center justify-center">
              MATERIALS AND WASHING DIRECTIONS
            </span>
          </div>
          <div
            className="absolute left-0 bottom-12 w-full h-0 invisible opacity-0 group-hover:h-fit group-hover:visible group-hover:opacity-100 transition-all group-hover:delay-300 group-hover:duration-200 duration-[0ms]"
            ref={refMw}
          >
            <div className="mx-8 py-5 border-b border-b-secondary_20 dark:border-b-primary_20">
              <p className="leading-relaxed text-[0.8rem]">
                51% Polyamide, 38% Polyester, 11% Elastane We recommend washing
                inside-out on a cold setting Hang to dry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
