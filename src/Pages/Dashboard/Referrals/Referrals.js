import { Card } from "react-bootstrap";
import SubReferrals from "./SubReferrals";
import "./Referrals.css";

function Referrals() {
  return (
    <Card
      className="Referrals"
      style={{ borderRadius: "10px", height: "300px", marginTop: "10px" }}
    >
      <Card.Body>
        <Card.Title className="title">
          Referrals
          <img src="./img/icons/info-circle.svg" style={{ float: "right" }} />
        </Card.Title>
        <hr />
        <SubReferrals no="81.3" name="Mark John" src="./img/user.png" />
        <SubReferrals
          no="81.3"
          name="Some one live"
          src="./img/user.png"
          live="1"
        />
      </Card.Body>
    </Card>
  );
}

export default Referrals;
