import { ProgressBar } from "react-bootstrap";
import "./Traffic.css";

function Traffic(props) {
  return (
    <div>
      <font className="traffic-no">{props.no}</font>
      <font className="traffic-name">{props.name}</font>
      <font className="traffic-percentage">{props.percentage}%</font>
      <ProgressBar
        style={{ height: "10px", width: "100%" }}
        now={props.percentage}
      />
    </div>
  );
}

export default Traffic;
