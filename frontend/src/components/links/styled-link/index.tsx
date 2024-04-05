import { Link } from "react-router-dom";

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
        className={`flex items-center justify-center gap-1 w-fit ${props.extraButtonClasses}`}
      >
        {props.iconLeft && props.iconLeft}

        <h4 className={`text-base font-medium ${props.extraLabelClasses}`}>
          {props.label}
        </h4>

        {props.iconRight && props.iconRight}
      </span>
    </Link>
  );
};

export default StyledLink;
