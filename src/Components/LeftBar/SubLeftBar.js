import "./LeftBar.css";

function SubLeftBar(props) {
  return (
    <div className="SubLeftBar">
      <img src={props.src} />
      <label className="name">{props.name}</label>
    </div>
  );
}

export default SubLeftBar;
