type Props = {
  icon: JSX.Element;
  label: string;
};

const AccountTypeBox = (props: Props) => {
  return (
    <article className="flex_col_justify_center text-center gap-2 bg-white shadow-xl py-5 px-10 rounded-xl">
      {props.icon}

      <h4 className="text-sm font-medium"> {props.label} </h4>
    </article>
  );
};

export default AccountTypeBox;
