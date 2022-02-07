import { Card, Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../../Components/Navbar/navbar.js";
import LeftBar from "../../Components/LeftBar/LeftBar.js";
import ChatList from "./ChatList/ChatList.js";

import "./Chat.css";
function Chat() {
	return (
		<div>
			<NavbarComponent />
			<Container>
				<Row>
					<Col xs={12} md={3}>
						<LeftBar />
					</Col>
					<Col xs={12} md={9}>
						<Card className="payment">
							<Card.Body className="row">
								<div className="col-5">
									<ChatList />
								</div>
								<div className="col-7 chat-box">chat box</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Chat;