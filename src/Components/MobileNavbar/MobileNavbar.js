import { Navbar, Nav, Container } from "react-bootstrap";
import SubLeftBar from "../LeftBar/SubLeftBar";
import User from "../LeftBar/User";
import "./MobileNavbar.css";
import { useContext } from "react";
import { DataContext } from "../../DataFunctions/DataContext";
import { Link } from "react-router-dom";
function MobileNavbar() {
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
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <User src={user.img} name={user.name} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <SubLeftBar
                src="./img/icons/grip-horizontal.svg"
                name="Dashboard"
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
            <Nav.Link href="#">
              <SubLeftBar
                src="./img/icons/box-arrow-in-left.svg"
                name="Logout"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MobileNavbar;
