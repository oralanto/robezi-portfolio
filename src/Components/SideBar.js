import React from "react";
import { slide as Menu } from "react-burger-menu";

const SideBar = (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Portfolio
      </a>
      <a className="menu-item" href="/about">
        A propos
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

export default SideBar;
