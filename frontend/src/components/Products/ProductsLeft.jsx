import Links from "../Buttons/Links";

const ProductsLeft = ({ heading, image, para, linkText }) => {
  return (
    <div className="flex justify-between items-center py-10">
      <div className="flex flex-col gap-4 p-10">
        <h2 className="text-3xl font-semibold">{heading}</h2>
        <p className="w-2/3">{para}</p>
        <Links text={linkText} />
      </div>
      <img src={image} alt="" className="w-1/2" />
    </div>
  );
};

export default ProductsLeft;

// {heading,image,para,linkText}
