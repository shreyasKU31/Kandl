import Links from "../Buttons/Links";

const ProductsRight = ({ heading, image, para, linkText }) => {
  return (
    <div className="flex gap-30 items-center py-20">
      <img src={image} alt="" className="w-1/2" />
      <div className="flex flex-col w-2/4 gap-4">
        <h2 className="text-3xl font-semibold">{heading}</h2>
        <p className="w-2/3">{para}</p>
        <Links text={linkText} />
        <div></div>
      </div>
    </div>
  );
};

export default ProductsRight;
