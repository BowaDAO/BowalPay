import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { Fragment } from "react/jsx-runtime";

type Props = {
  id: string;
  content: string;
};

const QuestionMarkTooltip = (props: Props) => {
  return (
    <Fragment>
      <a data-tooltip-id={props.id} data-tooltip-content={props.content}>
        <BsFillQuestionCircleFill />
      </a>

      <Tooltip
        id={props.id}
        place="right"
        style={{
          backgroundColor: "white",
          color: "black",
          fontWeight: "normal",
          width: "300px",
          padding: "8px 12px",
          boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        }}
      />
    </Fragment>
  );
};

export default QuestionMarkTooltip;
