import { Link } from "react-router-dom";

const LandingBlack = () => {
  return (
    <div className="flex items-center justify-between bg-black py-2 lg:px-[8%]">
      <div />

      <span className="flex items-center gap-4 text-white">
        <Link to="/" className="text-xs font-medium">
          RESOURCES
        </Link>
        <Link to="/" className="text-xs font-medium">
          DEVELOPERS API
        </Link>
        <Link to="/" className="text-xs font-medium">
          ABOUT US
        </Link>

        <span className="py-1 px-4 bg-greyishblack rounded-full text-xs font-medium">
          ENGLISH
        </span>
      </span>
    </div>
  );
};

export default LandingBlack;
