import LinkBtn from './link-btn';
import { faShippingFast, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  name: string;
  intro: string;
  color: string;
  price: string;
}

const ProductDetails = ({ name, intro, color, price }: Props) => {
  return (
    <div className="w-full flex flex-col items-start">
      <div className="w-full flex flex-col gap-4 py-3">
        <p className="leading-none font-bold text-[1rem]">{name}</p>
        <p className="leading-none font-thin text-[0.7rem] text-secondary_80 dark:text-primary_80">
          {intro}
        </p>
        <p className="leading-none font-bold text-[0.7rem]">{color}</p>
        <p className="leading-none font-bold text-[0.8rem]">{price}</p>
      </div>

      <div className="w-full h-8 border-y border-y-secondary_20 dark:border-y-primary_20 hover:bg-secondary_20 dark:hover:bg-primary_20 transition-all">
        <LinkBtn href="/">
          <div className="flex items-center justify-start gap-2">
            <FontAwesomeIcon icon={faShippingFast} className="text-[0.8rem]" />
            <p className="text-[0.7rem] leading-none font-bold">
              Free Domestic Shipping Over $150
            </p>
          </div>
        </LinkBtn>
      </div>

      <div className="w-full h-8 hover:bg-secondary_20 dark:hover:bg-primary_20 transition-all">
        <LinkBtn href="/">
          <div className="flex items-center justify-start gap-2">
            <FontAwesomeIcon icon={faRotate} className="text-[0.8rem]" />
            <p className="text-[0.7rem] leading-none font-bold">
              30 Day Hassle-Free Returns
            </p>
          </div>
        </LinkBtn>
      </div>
    </div>
  );
};

export default ProductDetails;
