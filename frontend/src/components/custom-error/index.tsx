import { twMerge } from "tailwind-merge";

type Props = {
  message: string | undefined;
  extraClasses?: string;
};

const CustomError = (props: Props) => {
  return (
    <div
      className={twMerge(
        props.extraClasses,
        "text-red-600 font-medium text-base"
      )}
    >
      {props.message}
    </div>
  );
};

export default CustomError;
