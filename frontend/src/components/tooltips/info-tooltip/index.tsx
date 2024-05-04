import { Tooltip } from "react-tooltip";
import { CiCircleInfo } from "react-icons/ci";

type Props = {
  id: string;
  content: string;
};
const InfoTooltip = (props: Props) => {
  return (
    <>
      <a data-tooltip-id={props.id} data-tooltip-content={props.content}>
        <CiCircleInfo />
      </a>

      <Tooltip
        id={props.id}
        place="bottom"
        style={{
          backgroundColor: "black",
          color: "white",
          fontWeight: "normal",
          width: "300px",
          padding: "8px 12px",
          boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          position: "absolute",
          zIndex: "100",
        }}
      />
    </>
  );
};

export default InfoTooltip;
