import { Dropdown } from "bootstrap";
import React from "react";
import hamza from './suja.png'
import Dropdowns from "./Dropdowns";
import "./navbar.css";
function NAVBAR() {
  return (
    <>
   
    <div className="container">
    <p className="logo"><img  className="log__img"src= {hamza}/></p>
      
     <Dropdowns/>
      <p className="menu_item">Transection</p>

      <p className="menu_item">Reports</p>
      <p className="menu_item">Interface</p>
      <p className="menu_item">Transfer</p>
      <p className="menu_item">Ack-Receipt-list</p>
      </div>
      </>
  );
}

export default NAVBAR;