type Props = {
  label: string;
  extraClasses?: string;
  disabled?: boolean;
};

const AuthButton = (props: Props) => {
  return (
    <button
      type="submit"
      aria-label={props.label}
      className={`${props.extraClasses} py-4 px-12 rounded-lg self-start ${
        props.disabled ? " bg-greyishblack" : "button-background "
      }  text-xl font-semibold text-white`}
    >
      {props.label}
    </button>
  );
};

export default AuthButton;
