const Button = ({ text }) => {
  return (
    <button className="bg-green-400 font-medium rounded-lg text-white py-4 px-12 text-lg transition duration-250 hover:bg-black hover:cursor-pointer">
      {text}
    </button>
  );
};

export default Button;
