import { Field, ErrorMessage, FieldProps } from "formik";

type Props = {
  name: string;
  id: string;
  type: "email" | "password" | "text" | "number" | "date";
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: string;
  passwordField?: boolean;
  passwordVisible?: boolean;
  togglePasswordVisibilityIcon?: () => void;
  maxLength?: number;
};

const TextField = (props: Props) => {
  return (
    <div className="relative w-full">
      <label htmlFor={props.name}></label>

      <Field name={props.name} id={props.id}>
        {({ field }: FieldProps) => {
          return (
            <input
              {...field}
              className="border-chalk border-[1px] rounded-lg w-full p-4 text-sm lg:text-base"
              type={props.type}
              placeholder={props.placeholder}
              autoComplete={props.autoComplete}
              disabled={props.disabled}
              maxLength={props.maxLength}
            />
          );
        }}
      </Field>

      <>
        {props.passwordField && (
          <button
            type="button"
            aria-label="password-visibility-icon"
            onClick={props.togglePasswordVisibilityIcon}
            className="absolute right-4 top-4"
          ></button>
        )}
      </>

      <ErrorMessage
        name={props.name}
        component="div"
        id={props.id}
        className="text-red-700 text-xs md:text-sm absolute"
      />
    </div>
  );
};

export default TextField;
