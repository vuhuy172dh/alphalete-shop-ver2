interface Props {
  images: string[];
}

const ProductImages = ({ images }: Props) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="pt-[125%] relative overflow-hidden rounded-2xl"
          >
            <img
              src={image}
              alt={index.toString()}
              className="absolute top-0 left-0 w-full max-w-full object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
