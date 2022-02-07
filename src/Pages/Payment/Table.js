import { Card } from "react-bootstrap";
import TableHeader from "./TableHeader.js";
import PaymentsCard from "./PaymentsCard.js";
import TableContent from "./TableContent.js";
import "./Table.css";
function Table() {
  return (
    <div>
      <Card className="payment">
        <Card.Body>
          <TableHeader />
          <hr />
          <PaymentsCard />
          <TableContent />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Table;
