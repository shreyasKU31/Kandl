const Element = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 p-2 transition-all duration-300 hover:bg-green-100 hover:cursor-pointer rounded-md">
      <span>{icon}</span>
      <p className="max-md:hidden">{text}</p>
    </div>
  );
};

export default Element;
