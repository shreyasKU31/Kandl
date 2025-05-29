import React from "react";
import assets from "../../assets/assets";
import Links from "../Buttons/Links";

const Trust = () => {
  return (
    <div className="mt-25 mb-10">
      <div className="flex justify-between gap-15">
        <div className="w-2/5">
          <h2 className="text-3xl font-medium">Trust with confidence</h2>
          <div>
            <div className="mt-4">
              <h3 className="text-2xl">Customer-first always</h3>
              <p className="mt-2">
                That's why 1.6+ crore customers trust Kandl with ~ ₹6 lakh
                crores of equity investments and contribute to 15% of daily
                retail exchange volumes in India.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl">No spam or gimmicks</h3>
              <p className="mt-2">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.{" "}
                <span className="text-green-500">Our philosophies.</span>
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl">The Kandl universe</h3>
              <p className="mt-2">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl">Do better with money</h3>
              <p className="mt-2">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={assets.ecosystem} alt="" className="w-[550px]" />
          <div className="flex justify-between w-3/4 m-auto">
            <Links text={"Explore our products"} />
            <Links text={"Try Kite demo"} />
          </div>
        </div>
      </div>
      <div>
        <img src={assets.press} alt="" className="m-auto mt-10" />
      </div>
    </div>
  );
};

export default Trust;
