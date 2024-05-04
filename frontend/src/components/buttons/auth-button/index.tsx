type Props = {
  onClick: () => void;
  label: string;
  extraClasses?: string;
};

const AuthButton = (props: Props) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      aria-label={props.label}
      className={`${props.extraClasses} py-4 px-12 rounded-lg self-start button-background text-xl font-semibold text-white`}
    >
      {props.label}
    </button>
  );
};

export default AuthButton;
