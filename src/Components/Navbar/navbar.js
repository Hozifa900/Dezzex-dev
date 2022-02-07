import { Navbar, Container } from "react-bootstrap";
import "./navbar.css";
function NavbarComponent() {
	return (
		<Navbar>
			<Container>
				<Navbar.Brand href="#home" className="btn btn-primary text-light btn-rounded">Miro</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text className="d-flex">
						<a href="#" className="btn nav-btn">
							<img src="./img/icons/person.svg" className="mt-2" />
						</a>
						<a href="#" className="btn nav-btn mx-2">
							<img src="./img/icons/bell.svg" className="mt-2" />
						</a>
						<a href="#" className="btn nav-btn">
							<img src="./img/icons/search.svg" className="mt-2" />
						</a>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavbarComponent;