import ProductsLeft from "./ProductsLeft";
import ProductsRight from "./ProductsRight";
import assets from "../../assets/assets";
import Button from "../Buttons/Button";

const Products = () => {
  return (
    <div className="w-5xl m-auto">
      <div>
        <div className="py-20 text-center flex flex-col gap-4">
          <h1 className="text-5xl font-medium">Kandl Products</h1>
          <p className="text-xl">
            Sleek, modern, and intuitive trading platforms
          </p>
          <p>
            Check out our
            <span className="text-green"> investment offerings →</span>
          </p>
        </div>
        <hr className="text-gray-300" />
      </div>
      <div>
        <ProductsRight
          heading={"Kite"}
          image={assets.productsKite}
          para={
            "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          }
          linkText={"Try demo"}
        />
        <ProductsLeft
          heading={"Console"}
          image={assets.productsConsole}
          para={
            "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
          }
          linkText={"Learn More"}
        />
        <ProductsRight
          heading={"Coin"}
          image={assets.productsCoin}
          para={
            "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
          }
          linkText={"Coin"}
        />
        <ProductsLeft
          heading={"Kite Connect API"}
          image={assets.api}
          para={
            "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          }
          linkText={"Kite Connect"}
        />
        <ProductsRight
          heading={"Varsity mobile"}
          image={assets.varsityProducts}
          para={
            "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
          }
          linkText={"Varsity mobile"}
        />
      </div>
      <div className="mb-20 flex justify-center items-center">
        <Button text={"Sign up for Free."} />
      </div>
    </div>
  );
};

export default Products;
