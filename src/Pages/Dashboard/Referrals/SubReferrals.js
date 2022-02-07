import { ProgressBar } from "react-bootstrap";
import "./Referrals.css";

function SubReferrals(props) {
  if (props.live == 1)
    return (
      <div className="SubReferrals">
        <div className="referral-img">
          <div className="live"></div>
          <img src={props.src} className="referral-img" />
        </div>
        <font className="referral-name">{props.name}</font>
        <font className="referral-no">{props.no}k</font>
        <br />
        <br />
      </div>
    );
  else
    return (
      <div className="SubReferrals">
        <div className="referral-img">
          <img src={props.src} className="referral-img" />
        </div>
        <font className="referral-name">{props.name}</font>
        <font className="referral-no">{props.no}k</font>
        <br />
        <br />
      </div>
    );
}

export default SubReferrals;
