import React from "react";
import assets from "../../assets/assets";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-15">
        <img className="w-5xl" src={assets.landing} alt="" />
      </div>
      <div className="text-center mb-15">
        <h2 className="text-5xl mb-5">Invest in everything</h2>
        <p className="text-[20px]">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
      </div>
      <Button text={"Sign up for free"} />
    </div>
  );
};

export default Hero;
