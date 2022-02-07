import "./LeftBar.css";
import { Card } from "react-bootstrap";
import SubLeftBar from "./SubLeftBar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import User from "./User";
import { useContext } from "react";
import { DataContext } from "../../DataFunctions/DataContext";
import { Link } from "react-router-dom";

function LeftBar() {
  const [user, setUser] = useContext(DataContext);
  if (!(window.innerWidth <= 800) && !(window.innerHeight <= 600))
    return (
      <Card className="LeftBar" style={{ borderRadius: "10px" }}>
        <Card.Body>
          <Card.Title className="title">
            <User src={user.img} name={user.name} />
          </Card.Title>
          <hr />
          <Card.Text>
            <Link to="/">
              <SubLeftBar
                src="./img/icons/folder2-open.svg"
                name="File manager"
              />
            </Link>
            <SubLeftBar
              src="./img/icons/folder2-open.svg"
              name="File manager"
            />
            <SubLeftBar
              src="./img/icons/pie-chart.svg"
              name="Traffic analyzer"
            />
            <SubLeftBar src="./img/icons/people.svg" name="User manager" />
            <SubLeftBar src="./img/icons/calendar-month.svg" name="Calendar" />
            <Link to="/chat">
              <SubLeftBar
                src="./img/icons/chat-left-dots.svg"
                name="Messages"
              />
            </Link>

            <Link to="/payment">
              <SubLeftBar src="./img/icons/credit-card.svg" name="Payment" />
            </Link>
          </Card.Text>
          <div className="logout">
            <hr />
            <a href="#">
              <SubLeftBar
                src="./img/icons/box-arrow-in-left.svg"
                name="Logout"
              />
            </a>
          </div>
        </Card.Body>
      </Card>
    );
  else return <MobileNavbar />;
}

export default LeftBar;
