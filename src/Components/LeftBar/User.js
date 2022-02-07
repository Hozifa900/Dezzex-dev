import "./LeftBar.css";

function User(props) {
  return (
    <div>
      <img className="user-img" src={props.src} />
      <font className="user-name">{props.name}</font>
      <br />
      <br />
    </div>
  );
}

export default User;
