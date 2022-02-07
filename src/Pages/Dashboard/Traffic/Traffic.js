import { Card } from "react-bootstrap";
import SubTraffic from "./SubTraffic";
import { useContext } from "react";
import { DataContext } from "../../../DataFunctions/DataContext";

function Traffic() {
  const [user, setUser, traffic, setTraffic] = useContext(DataContext);
  return (
    <Card
      className="Traffic"
      style={{ borderRadius: "10px", height: "290px", marginTop: "10px" }}
    >
      <Card.Body>
        <Card.Title className="title">
          Traffic
          <img src="./img/icons/info-circle.svg" style={{ float: "right" }} />
        </Card.Title>
        <hr />
        <SubTraffic
          no={traffic.no}
          name={traffic.media}
          percentage={traffic.precentage}
        />
      </Card.Body>
    </Card>
  );
}

export default Traffic;
