import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={style.headerStructure}>
        <h1>Job Application Portal</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
