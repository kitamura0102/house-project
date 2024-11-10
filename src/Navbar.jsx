import React from "react";
import logo from "./assets/z-logo-default-visual-refresh.svg"
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className="left-side-navbar">Buy</li>
        <li className="left-side-navbar">Rent</li>
        <li className="left-side-navbar">Sell</li>
        <li className="left-side-navbar">Home Loans</li>
        <li className="left-side-navbar">Find an Agent</li>
        <img src={logo} alt="" />
        <li className="right-side-navbar">Manage Rentals</li>
        <li className="right-side-navbar">Advertise</li>
        <li className="right-side-navbar">Help</li>
        <li className="right-side-navbar">Sign In</li>
      </ul>
      
    </nav>
  );
}
