import { Container, Row, Col, Card } from "react-bootstrap";
import LeftBar from "../../Components/LeftBar/LeftBar.js";
import Table from "./Table.js";
import NavbarComponent from "../../Components/Navbar/navbar.js";
import "./Table.css";
function IndexPayment() {
  return (
    <div>
      <NavbarComponent />
      <div className="Main">
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <LeftBar />
            </Col>
            <Col xs={12} md={9}>
              <Table />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default IndexPayment;
