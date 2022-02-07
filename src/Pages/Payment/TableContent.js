import { Table } from "react-bootstrap";
function TableContent() {
  return (
    <div className="mt-3">
      <Table responsive="sm" className="table-borderless">
        <thead style={{ background: "#f1f4f7", color: "#b3b8bd" }}>
          <tr>
            <th>Status</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="status-dot red"></span>
              Canceled
            </td>
            <td>$53215</td>
            <td>28 April 22</td>
            <td>Payment via PayPal</td>
            <td className="d-flex justify-content-end">
              <button className="btn btn-outline-primary">Details</button>
            </td>
          </tr>
          <tr>
            <td>
              <span className="status-dot green"></span>
              Canceled
            </td>
            <td>$53215</td>
            <td>28 April 22</td>
            <td>Payment via PayPal</td>
            <td className="d-flex justify-content-end">
              <button className="btn btn-outline-primary">Details</button>
            </td>
          </tr>
          <tr>
            <td>
              <span className="status-dot yellow"></span>
              Canceled
            </td>
            <td>$53215</td>
            <td>28 April 22</td>
            <td>Payment via PayPal</td>
            <td className="d-flex justify-content-end">
              <button className="btn btn-outline-primary">Details</button>
            </td>
          </tr>
          <tr>
            <td>
              <span className="status-dot red"></span>
              Canceled
            </td>
            <td>$53215</td>
            <td>28 April 22</td>
            <td>Payment via PayPal</td>
            <td className="d-flex justify-content-end">
              <button className="btn btn-outline-primary">Details</button>
            </td>
          </tr>
          <tr>
            <td>
              <span className="status-dot green"></span>
              Canceled
            </td>
            <td>$53215</td>
            <td>28 April 22</td>
            <td>Payment via PayPal</td>
            <td className="d-flex justify-content-end">
              <button className="btn btn-outline-primary">Details</button>
            </td>
          </tr>
          <tr>
            <td>
              <span className="status-dot yellow"></span>
              Canceled
            </td>
            <td>$53215</td>
            <td>28 April 22</td>
            <td>Payment via PayPal</td>
            <td className="d-flex justify-content-end">
              <button className="btn btn-outline-primary">Details</button>
            </td>
          </tr>
          <tr>
            <td>
              <span className="status-dot red"></span>
              Canceled
            </td>
            <td>$53215</td>
            <td>28 April 22</td>
            <td>Payment via PayPal</td>
            <td className="d-flex justify-content-end">
              <button className="btn btn-outline-primary">Details</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default TableContent;
