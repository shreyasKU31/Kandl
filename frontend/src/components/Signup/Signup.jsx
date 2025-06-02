import assets from "../../assets/assets";
import Button from "../Buttons/Button";

const Signup = () => {
  return (
    <div className="m-auto w-5xl px-8">
      <div className="text-center">
        <h1 className="text-5xl mb-8 mt-16">
          Open a free demat and trading account online
        </h1>
        <p className="text-lg mb-8">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="flex justify-between m-auto">
        <img src={assets.account_open} alt="" className="w-130" />
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h2 className="text-3xl mb-2">Signup now</h2>
            <span className="text-gray-500">
              Or track your existing application
            </span>
          </div>
          <form action="">
            <div className="flex">
              <div className="flex items-center gap-2 mb-4 border border-gray-400 p-4 border-r-0">
                <img src={assets.indFlag} alt="" />
                <span className="text-xl">+91</span>
              </div>
              <input
                type="number"
                placeholder="Enter your mobile number"
                className="border border-gray-400 w-60 p-4 block mb-4 text-xl appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>
            <Button text={"Get OTP"} />
          </form>
          <p className="text-[14px]">
            By proceeding, you agree to the Zerodha terms & privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
