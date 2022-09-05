import { Dropdown } from "bootstrap";
import React from "react";
import hamza from "./suja.png";
import Dropdowns from "./Dropdowns";
import "./navbar.css";
function NAVBAR() {
  return (
    <>
      <div className="container">
        <p className="logo">
          <img className="log__img" src={hamza} />
        </p>
        <Dropdowns />
           <select className="dropdownlist">
            <option className="listitem">Transection</option>
            <option className="menu-list">Donation Receipt</option>
            <option className="menu-list">cheque Deposit</option>
            <option className="menu-list">cheque clearance</option>
            <option className="menu-list">cheque Return</option>
            <option className="menu-list">Edit Mobile Receipt</option>
            <option className="menu-list">E-rased-Material</option>  
        </select>
        <p className="menu_item">Reports</p>
        <p className="menu_item">Interface</p>
        <p className="menu_item">Transfer</p>
        <p className="menu_item">Ack-Receipt-list</p>
      </div>
    </>
  );
}

export default NAVBAR;
