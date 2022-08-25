interface Props {
  colors: string[];
  imgs: string[];
}

const ProductColors = ({ colors, imgs }: Props) => {
  return (
    <div className="w-full flex flex-col items-start">
      {/*This is section for choosing colors*/}
      <div className="w-full flex flex-col items-start gap-4">
        <p className="flex gap-1 leading-none text-[0.7rem] font-bold">
          {colors.length}
          <span className="pr-1 border-r-[2px] border-r-secondary_70 dark:border-r-primary_70">
            Colors
          </span>
          <span className="text-secondary_70 dark:text-primary_70">
            {colors[0]}
          </span>
        </p>
        <div className="w-full h-44 border border-secondary_20 p-1 dark:border-primary_20 rounded-lg overflow-auto no-scrollbar">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-[5px]">
            {imgs.map((img, index) => (
              <div
                key={index}
                className="relative w-full pt-[133%] overflow-hidden cursor-pointer rounded-[5px]"
              >
                <img
                  src={img}
                  alt="name"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*This is section for choosing size*/}
      <div className="w-full pt-4 flex flex-col items-start">
        <div className="w-full flex justify-between items-center">
          <p className="leading-none text-[0.7rem] font-bold">Select Size</p>
          <button className="p-1 border border-secondary_20 dark:border-primary_20 rounded-md hover:bg-secondary_20 dark:hover:bg-primary_20">
            <p className="leading-none text-[0.6rem] text-secondary_70 dark:text-primary_70">
              Size Guide
            </p>
          </button>
        </div>
        <div className="w-full flex-wrap flex">
          <button className="w-12 h-12 rounded-lg hover:bg-secondary_20 dark:hover:bg-primary_20">
            <p className="leading-none text-[0.8rem] font-bold text-secondary_70 dark:text-primary_70">
              XXS
            </p>
          </button>
          <button className="w-12 h-12 rounded-lg hover:bg-secondary_20 dark:hover:bg-primary_20">
            <p className="leading-none text-[0.8rem] font-bold text-secondary_70 dark:text-primary_70">
              L
            </p>
          </button>
          <button className="w-12 h-12 rounded-lg hover:bg-secondary_20 dark:hover:bg-primary_20">
            <p className="leading-none text-[0.8rem] font-bold text-secondary_70 dark:text-primary_70">
              M
            </p>
          </button>
          <button className="w-12 h-12 rounded-lg hover:bg-secondary_20 dark:hover:bg-primary_20">
            <p className="leading-none text-[0.8rem] font-bold text-secondary_70 dark:text-primary_70">
              S
            </p>
          </button>
          <button className="w-12 h-12 rounded-lg hover:bg-secondary_20 dark:hover:bg-primary_20">
            <p className="leading-none text-[0.8rem] font-bold text-secondary_70 dark:text-primary_70">
              XL
            </p>
          </button>
          <button className="w-12 h-12 rounded-lg hover:bg-secondary_20 dark:hover:bg-primary_20">
            <p className="leading-none text-[0.8rem] font-bold text-secondary_70 dark:text-primary_70">
              XS
            </p>
          </button>
          <button className="w-12 h-12 rounded-lg hover:bg-secondary_20 dark:hover:bg-primary_20">
            <p className="leading-none text-[0.8rem] font-bold text-secondary_70 dark:text-primary_70">
              XXL
            </p>
          </button>
          <button className="px-2 h-12 border border-secondary_20 dark:border-primary_20 rounded-lg hover:bg-secondary_20 dark:hover:bg-primary_20">
            <p className="leading-none text-[0.8rem] font-bold text-secondary_70 dark:text-primary_70">
              Size Out of Stock?
            </p>
          </button>
        </div>
        <div className="w-full px-4 mt-6">
          <button className="w-full py-4 border-[2px] border-secondary_20 dark:border-primary_20 rounded-lg bg-primary dark:bg-secondary">
            <p className="leading-none text-[1.2rem] font-bold">SELECT SIZE</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductColors;
