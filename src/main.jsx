import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App.jsx";
import { Header } from "./component/header.jsx";
import { Sidebar } from "./component/sidebar.jsx";
import { Login } from "./pages/login-page.jsx";
import "bootstrap/dist/css//bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import"./utils/i18n"
import "./index.css";

//khai bao cac element
let sidebar_state = true;
const rootElement = createRoot(document.getElementById("main"));
const headerElement = createRoot(document.getElementById("general-header"));
const navElement = createRoot(document.getElementById("general-nav"));

//hàm thay đổi gia tri
const changeState = () => {
  const headerClass = document.getElementById("main-header");
  const mainContainerClass = document.getElementById("main");
  sidebar_state = !sidebar_state;
  sidebar_state
    ? (headerClass.classList.remove("close"),
      mainContainerClass.classList.remove("close"))
    : (headerClass.classList.toggle("close"),
      mainContainerClass.classList.toggle("close"));
};

//render noi dung header
headerElement.render(
  <Router>
    <Header sidebar_state={sidebar_state} />
  </Router>
);

//Render SideBar
navElement.render(
  <Router>
    <Sidebar Callback={changeState} />
  </Router>
);

//Render noi dung chinh
rootElement.render(
  <Router>
    <App />
  </Router>
);
