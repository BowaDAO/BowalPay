type Props = {
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const NavlinkDropdown = (props: Props) => {
  return (
    <div
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className="absolute top-[60px] shadow-xl border-red-100 left-1/2 -translate-x-1/2 bg-white z-[1000] w-2/3 h-[500px] px-4 py-8 overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      {props.children}
    </div>
  );
};

export default NavlinkDropdown;
