import { Card } from "react-bootstrap";
import "./Involovement.css";
import { DataContext } from "../../../DataFunctions/DataContext";
import { useContext } from "react";

function Involovement() {
  const [user, setUser, traffic, setTraffic, involovement, setInvolovement] =
    useContext(DataContext);
  return (
    <Card
      className="Involovement"
      style={{ borderRadius: "10px", height: "290px", marginTop: "10px" }}
    >
      <Card.Body>
        <Card.Title className="title">
          Involovement
          <img src="./img/icons/info-circle.svg" style={{ float: "right" }} />
        </Card.Title>
        <hr />
        <Card.Text>
          <font className="involovement-no">{involovement.no}</font>
          <br />
          <br />
          <font className="involovement-date">{involovement.date}</font>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Involovement;
