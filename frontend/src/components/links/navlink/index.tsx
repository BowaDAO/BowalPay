import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Dispatch, SetStateAction } from "react";

type Props = {
  label: string;
  href: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  activeHover: boolean;
  setActiveHover: Dispatch<SetStateAction<boolean>>;
};

const Navlink = (props: Props) => {
  return (
    <NavLink to={props.href}>
      <span
        className="flex items-center gap-1 py-2 px-6 hover:bg-grey rounded-lg"
        onMouseLeave={() => {
          props.setActiveHover(false);
          props.onMouseLeave();
        }}
        onMouseEnter={() => {
          props.setActiveHover(true);
          props.onMouseEnter();
        }}
      >
        <h6 className="text-base font-medium tracking-wide">{props.label}</h6>

        {props.activeHover ? (
          <IoIosArrowUp height={16} width={16} color="#c1cacf" />
        ) : (
          <IoIosArrowDown height={16} width={16} color="#c1cacf" />
        )}
      </span>
    </NavLink>
  );
};

export default Navlink;
