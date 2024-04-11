import { Field, FieldProps } from "formik";

type Props = {
  value: string;
  name: string;
  heading: string;
  subheading: string;
  id: string;
};

const BusinessTypeRadio = (props: Props) => {
  return (
    <div className="flex gap-2 items-start">
      <div className="mt-1">
        <Field name={props.name} id={props.id}>
          {({ field }: FieldProps) => {
            return <input type="radio" {...field} value={props.value} />;
          }}
        </Field>
      </div>

      <article>
        <h3 className="text-xl font-semibold text-black"> {props.heading} </h3>
        <h4 className="text-sm text-black">{props.subheading} </h4>
      </article>
    </div>
  );
};

export default BusinessTypeRadio;
