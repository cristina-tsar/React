import React from 'react'
import logo from "./logo-vogue.png";
import {Link} from "react-router-dom"

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="" srcset="" />
      </Link>
    </div>
  );
}
export default Logo
