import { Card, Row, Col } from "react-bootstrap";

function PaymentsCard() {
  return (
    <Card style={{ backgroundColor: "#f1f4f7" }}>
      <Card.Body>
        <header className="d-flex justify-content-between">
          <h5>Make Payment</h5>
          <a href="#">Show other payments method</a>
        </header>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <Card className="h-80">
              <Card.Body className="d-flex rounded-3 justify-content-center align-items-center">
                <img src="./assets/payments-logo/paypal.svg" className="w-75" />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card className="h-80">
              <Card.Body className="d-flex rounded-3 justify-content-center align-items-center">
                <img
                  src="./assets/payments-logo/mastercard.svg"
                  className="w-35"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card className="h-80">
              <Card.Body className="d-flex rounded-3 justify-content-center align-items-center">
                <img
                  src="./assets/payments-logo/amazon-pay.svg"
                  className="w-75"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card className="h-80">
              <Card.Body className="d-flex rounded-3 justify-content-center align-items-center">
                <img src="./assets/payments-logo/apple.svg" className="w-75" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PaymentsCard;
