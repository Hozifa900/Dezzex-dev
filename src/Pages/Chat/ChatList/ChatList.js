import "./ChatList.css";
function ChatList() {
	return (
		<div>
			<div className="chat-list-header border-bottom d-flex">
				<img src="./img/icons/search.svg" className="" />
				<input type="text" placeholder="Search" className="form-control border-0" />
			</div>
			<ul className="chat-list-body list-group">
				<ListItem name="sami" messages="1" image="https://gravatar.com/avatar/ef98s48w74fglfge8ce0c9747908495551?s=400&d=robohash&r=x"/>
				<ListItem name="sara" messages="3" image="https://gravatar.com/avatar/ef982e48v745e8ce0c9747908495551?s=400&d=robohash&r=x"/>
				<ListItem name="khalid" messages="0" image="https://gravatar.com/avatar/ef982eh8d745e8ce0c9747908495551?s=400&d=robohash&r=x"/>
				<ListItem name="noor" messages="0" image="https://gravatar.com/avatar/ef982e482745e8ce0c9747908495551?s=400&d=robohash&r=x"/>
				<ListItem name="ola" messages="5" image="https://gravatar.com/avatar/ef982e48da45e8ce0c9747908495551?s=400&d=robohash&r=x"/>
				<ListItem name="omer" messages="0" image="https://gravatar.com/avatar/ef982e48dg45e8ce0c9747908495551?s=400&d=robohash&r=x"/>
				<ListItem name="hozifa" messages="0" image="https://gravatar.com/avatar/ef982e4ad745e8ce0c9747908495551?s=400&d=robohash&r=x"/>
			</ul>
		</div>
	);
}

function ListItem(props) {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center border-0">
			<div className="d-flex align-items-center">
				<img src={props.image} className="ml-2" />
				<h6 className="m-0 mt-2">{props.name}</h6>
			</div>
			{ props.messages > 0 ? <h6 className="list-badge m-0 mt-2">{props.messages}</h6>:''}
		</li>
	);
}

export default ChatList;