import "../assets/styles/header.css";
import logo from "../assets/images/logo.png";
export const Header = () => {
    const time=new Date().toLocaleString('en-US',{timeZone: 'Asia/Ho_Chi_Minh'});
  return (
    <div className="row header m-0">
      <div className="col logo">
        <img className="img-fluid" src={logo} alt="" srcSet="" />
      </div>
      <div className="col-8 page-name">
        <h3>Marchine/Tool</h3>
      </div>
      <div className="col"></div>
      <div className="col">
        <div className="time">
            <h4 className="m-0">{time}</h4>
        </div>
      </div>
    </div>
  );
};
