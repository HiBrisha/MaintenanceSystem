/*================****==================
Title: Side Bar
Author: Hieu Nguyen Minh
Desc: Side Bar Component
================****==================*/

//================import library==================
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTools, FaWarehouse, FaAngleLeft, FaSearch } from "react-icons/fa";
import "../assets/styles/c_sidebar.css";
import logo_large from "../assets/images/logo.png";
import logo_small from "../assets/images/logo_circle.png";
//================***************==================

export const Sidebar = ({ Callback }) => {
  
  //================Sidebar state==================
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("/");

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    Callback();
  };
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };
  //================***************==================

  return (
    <div className={`sidebar ${isSidebarOpen ? "" : "close"}`}>
      <header>
        <img
          className="img-fluid"
          src={isSidebarOpen ? logo_large : logo_small}
          alt=""
        />
        <div className="toggle-button">
          <FaAngleLeft onClick={handleToggle}></FaAngleLeft>
        </div>
      </header>

      <div className="menu-bar">
        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search..." />
        </div>

        <ul className="menu-page p-0">
          <li className={`nav-link ${activeMenu === "/" ? "active" : ""}`}>
            <Link to="/" onClick={() => handleMenuClick("/")}>
              <FaTools />
              <span className="text nav-text">Machine/Tool</span>
            </Link>
          </li>
          <li className={`nav-link ${activeMenu === "assets" ? "active" : ""}`}>
            <Link to="/assets" onClick={() => handleMenuClick("assets")}>
              <FaWarehouse />
              <span className="text nav-text">Assets</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
