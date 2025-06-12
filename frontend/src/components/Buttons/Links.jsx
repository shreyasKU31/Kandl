import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Links = ({ text }) => {
  return (
    <div className="text-green-500 font-medium transition duration-250 hover:text-green-950 hover:cursor-pointer">
      {text}
      <ChevronRightIcon />
    </div>
  );
};

export default Links;
