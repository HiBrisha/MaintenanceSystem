/*================****==================
Title: General Header
Author: Hieu Nguyen Minh
Desc: General Header Component
================****==================*/

//================import library==================
import { useState, useEffect } from "react";
import moment from "moment";
import "../assets/styles/c_header.css";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaInfoCircle,
  FaCalendarCheck,
  FaSignOutAlt,
} from "react-icons/fa";
//================****==================

//================Main code ==================
export const Header = () => {

  //========Get time at local========
  const time = moment().format("HH:mm A");
  const date = moment().format("DD-MM-YYYY");
  //================****==================

  //================Update time after 1 minutes==================
  const [NewTime, setNewTime] = useState(time);

  useEffect(() => {
    const inteval = setInterval(() => {
      const time = moment().format("HH:mm A");
      setNewTime(time);
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  //================****==================

  return (
    <div id="main-header" className={`row header m-0 p-0`}>
      {/*================Page titile ==================*/}
      <div className="col-lg-8 col-md-6 page-name m-0">
        <h3>Marchine/Tool</h3>
      </div>
      {/*================ *** ==================*/}
      {/*================User Information===========*/}
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
      {/*================ *** ==================*/}
      {/*================Time and Date===========*/}
      <div className="col">
        <div className="time">
          <h4 className="m-0">{NewTime}</h4>
          <h5 className="m-0">{date}</h5>
        </div>
      </div>
      {/*================ *** ==================*/}
    </div>
  );
};
//================****==================