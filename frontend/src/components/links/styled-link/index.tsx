import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  label: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  extraButtonClasses?: string;
  extraLabelClasses?: string;
};

const StyledLink = (props: Props) => {
  return (
    <Link to={props.href}>
      <span
        className={twMerge(
          props.extraButtonClasses,
          "flex items-center justify-center gap-1 w-fit"
        )}
      >
        {props.iconLeft && props.iconLeft}

        <h4
          className={twMerge(props.extraLabelClasses, "text-base font-medium")}
        >
          {props.label}
        </h4>

        {props.iconRight && props.iconRight}
      </span>
    </Link>
  );
};

export default StyledLink;
