import "./circle.css";
import "./Sources.css";

function SubSources(props) {
  const percentageAttr = "c100 p" + props.percentage + " green";
  return (
    <div className="clearfix" style={{ width: "100%" }}>
      <center>
        <div className={percentageAttr}>
          <span>
            {props.percentage}%
            <br />
            <font className="subsource-name">Total Money Spend</font>
          </span>
          <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default SubSources;
