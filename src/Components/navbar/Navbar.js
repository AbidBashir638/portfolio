import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  
  // Define menu items
  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Work experience", link: "#work" },
    { name: "Contact me", link: "#contact" }
  ];

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h1 className="logo">DevCO</h1>
          <ul className={`menu-items ${openMenu ? "active" : ""}`}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="menu-item">
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button className="contact-btn" onClick={() => {}}>
                Hire me
              </button>
            </li>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
