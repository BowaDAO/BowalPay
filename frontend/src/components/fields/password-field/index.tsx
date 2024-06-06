import { useState } from "react";
import TextField from "../text-field";
import { BiHide, BiShow } from "react-icons/bi";

type Props = {
  labelVisible: boolean;
  name: string;
  id: string;
  placeholder: string;
  extraClasses?: string;
};

const PasswordField = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <span className="flex items-center gap-2 relative w-fit">
      <TextField
        name={props.name}
        id={props.id}
        type={showPassword ? "text" : "password"}
        placeholder={props.placeholder}
        labelVisible={props.labelVisible}
        extraClasses={props.extraClasses}
        autoComplete="off"
      />

      <span className="absolute right-2 top-4">
        <button
          type="button"
          onClick={() => setShowPassword((showPassword) => !showPassword)}
        >
          {showPassword ? <BiHide /> : <BiShow />}
        </button>
      </span>
    </span>
  );
};

export default PasswordField;
