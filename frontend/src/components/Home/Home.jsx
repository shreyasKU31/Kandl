import Hero from "./Hero";
import Trust from "./Trust";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";

const Home = () => {
  return (
    <div className="w-5xl m-auto px-8">
      <Hero />
      <Trust />
      <Pricing />
      <OpenAccount />
    </div>
  );
};

export default Home;
