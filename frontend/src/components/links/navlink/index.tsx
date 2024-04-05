import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
  label: string;
  href: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const Navlink = (props: Props) => {
  const [activeHover, setActiveHover] = useState(false);

  return (
    <span
      className="flex items-center gap-1 py-2 px-3 hover:bg-grey rounded-lg"
      onMouseLeave={() => {
        setActiveHover(false);
        props.onMouseLeave();
      }}
      onMouseEnter={() => {
        setActiveHover(true);
        props.onMouseEnter();
      }}
    >
      <NavLink to={props.href} className="text-base font-medium tracking-wide">
        {props.label}
      </NavLink>

      {activeHover ? (
        <IoIosArrowUp height={16} width={16} color="#c1cacf" />
      ) : (
        <IoIosArrowDown height={16} width={16} color="#c1cacf" />
      )}
    </span>
  );
};

export default Navlink;
