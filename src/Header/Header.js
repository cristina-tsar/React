import React from 'react'

import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Cart from "./Cart/Cart";

const Header =() => {
  return (
    <header className="header">
      <div className="container">
        <div className="row header-row">
          <Logo />
          <Menu />
          <Cart />
        </div>
      </div>
    </header>
  );
}

export default Header
