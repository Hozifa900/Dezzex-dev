import { Card } from "react-bootstrap";
import "./Sources.css";
import SubSources from "./SubSources";
import { DataContext } from "../../../DataFunctions/DataContext";
import { useContext } from "react";

function Sources() {
  const [
    user,
    setUser,
    traffic,
    setTraffic,
    involovement,
    setInvolovement,
    referral,
    setReferral,
    source,
    setSource,
  ] = useContext(DataContext);
  return (
    <Card
      className="Sources"
      style={{ borderRadius: "10px", height: "290px", marginTop: "10px" }}
    >
      <Card.Body>
        <Card.Title className="title">
          Traffic Sources
          <img src="./img/icons/info-circle.svg" style={{ float: "right" }} />
        </Card.Title>
        <hr />
        <SubSources percentage={source.precentage} />
      </Card.Body>
    </Card>
  );
}

export default Sources;
