import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {
  heading: string;
  subheading: string;
  href: string;
};

const LinkGroup = (props: Props) => {
  return (
    <Link to={props.href}>
      <span className="flex items-center justify-between w-[240px]">
        <span className="flex flex-col gap-3">
          <h4 className="font-semibold text-black">{props.heading}</h4>

          <h6 className="text-sm text-black">{props.subheading}</h6>
        </span>

        <MdKeyboardArrowRight />
      </span>
    </Link>
  );
};

export default LinkGroup;
