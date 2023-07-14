//import library
import { useState, useEffect } from "react";
import moment from "moment";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaInfoCircle,
  FaCalendarCheck,
  FaSignOutAlt,
} from "react-icons/fa";

export const Header = () => {
  //lay gio dia phuong
  const time = moment().format("HH:mm A");
  const date = moment().format("DD-MM-YYYY");

  const [NewTime, setNewTime] = useState(time);

  useEffect(() => {
    const inteval = setInterval(() => {
      const time = moment().format("HH:mm A");
      setNewTime(time);
    }, 60000);
    // Xóa interval khi component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="main-header" className={`row header m-0 p-0`}>
      <div className="col-lg-8 col-md-6 page-name m-0">
        <h3>Marchine/Tool</h3>
      </div>
      <div className="col user-infor">
        <div className="dropdown">
          <Link
            className="dropdown-toggle"
            to="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <h4 className="m-1">
              <FaUserCircle />
            </h4>
            {" Hieu Nguyen"}
          </Link>

          <ul className="dropdown-menu dropdown-menu-end">
            <li className="dropdown-item">
              <div className="m-2">
                <FaInfoCircle />
              </div>
              My Profile
            </li>
            <li className="dropdown-item">
              <div className="m-2">
                <FaCalendarCheck />
              </div>
              My Orders
            </li>
            <li className="dropdown-item">
              <div className="m-2">
                <FaSignOutAlt />
              </div>
              Sign Out
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="time">
          <h4 className="m-0">{NewTime}</h4>
          <h5 className="m-0">{date}</h5>
        </div>
      </div>
    </div>
  );
};
