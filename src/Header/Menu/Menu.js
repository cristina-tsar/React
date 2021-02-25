import React from 'react';
import {Link} from "react-router-dom";


const Menu = () => {
    return (
      <div className="menu">
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/fashion">FASHION</Link>
          <Link to="/news">NEWS</Link>
          <Link to="/lifestyle">LIFE STYLE</Link>
          <Link to="/beauty" className="second-flor" href="/">
            BEAUTY
          </Link>
          <Link to="/top" className="second-flor-2" href="/">
            TOP
          </Link>
          <Link to="exclusive" className="second-flor-3" href="/">
            EXCLUSIVE
          </Link>
        </nav>
      </div>
    );
}

export default Menu
  