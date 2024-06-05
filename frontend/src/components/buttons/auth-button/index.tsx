import { twMerge } from "tailwind-merge";

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
      className={twMerge(
        props.extraClasses,
        props.disabled ? " bg-greyishblack" : "button-background ",
        " py-4 px-12 rounded-lg self-start text-xl font-semibold text-white"
      )}
    >
      {props.label}
    </button>
  );
};

export default AuthButton;
