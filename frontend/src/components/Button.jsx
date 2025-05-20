import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-green-400 font-medium rounded-lg text-white py-2 px-12 text-lg transition duration-250 hover:bg-black">
      {text}
    </button>
  );
};

export default Button;
