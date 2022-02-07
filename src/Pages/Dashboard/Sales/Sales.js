import { Card, Nav } from "react-bootstrap";

function Sales() {
  return (
    <Card
      className="Sales"
      style={{ borderRadius: "10px", height: "300px", marginTop: "10px" }}
    >
      <Card.Body>
        <Card.Title className="title">
          Sales Statistic{" "}
          <img src="./img/icons/info-circle.svg" style={{ float: "right" }} />
        </Card.Title>
        <hr />
        <Card.Text>
          <Nav
            variant="pills"
            defaultActiveKey="/home"
            style={{ width: "100%" }}
          >
            <Nav.Item>
              <Nav.Link href="#">All time</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">This year</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">This week</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Today</Nav.Link>
            </Nav.Item>
          </Nav>
          <img
            src="./img/sales.png"
            style={{ width: "100%", height: "150px" }}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Sales;
