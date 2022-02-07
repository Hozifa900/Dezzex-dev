import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import LeftBar from "../../Components/LeftBar/LeftBar";
import "./Main.css";
import Sales from "./Sales/Sales";
import Traffic from "./Traffic/Traffic";
import Involovement from "./Involovement/Involovement";
import Referrals from "./Referrals/Referrals";
import Sources from "./Sources/Sources";
import NavbarComponent from "../../Components/Navbar/navbar";

function Main() {
  return (
    <div className="Main">
      <NavbarComponent />
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={3}>
            <center>
              <LeftBar />
            </center>
          </Col>
          <Col xs={12} md={6}>
            <Sales />
            <Row>
              <Col xs={12} md={6}>
                <Traffic />
              </Col>
              <Col xs={12} md={6}>
                <Involovement />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3}>
            <Referrals />
            <Sources />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
