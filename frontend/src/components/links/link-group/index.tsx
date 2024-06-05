import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
  heading: string;
  subheading: string;
  href: string;
  headingExtraClasses?: string;
  cardExtraClasses?: string;
};

const LinkGroup = (props: Props) => {
  return (
    <Link to={props.href}>
      <span
        className={twMerge(
          props.cardExtraClasses,
          "flex items-center justify-between w-[250px] hover:bg-grey p-4 rounded-xl"
        )}
      >
        <span className="flex flex-col gap-3">
          <h4
            className={twMerge(
              props.headingExtraClasses,
              "text-sm font-semibold text-black"
            )}
          >
            {props.heading}
          </h4>

          <h6 className="text-sm text-black">{props.subheading}</h6>
        </span>

        <MdKeyboardArrowRight />
      </span>
    </Link>
  );
};

export default LinkGroup;
