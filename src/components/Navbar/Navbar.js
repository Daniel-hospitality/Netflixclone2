import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "./Dropdown";

// import { Button } from "./Button";

import {
  faGift,
  faSearch,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  // TEST
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 36) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 36) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div className={`nav_container ${show && "nav_container_black"}`}>
      <Link to="/">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </Link>

      <div className="nav_font">
        <Link className="nav_font1" to="/">
          <FontAwesomeIcon icon={faSearch} />
        </Link>

        <Link className="nav_font1" to="/">
          <li className="nav">Kids</li>
        </Link>

        <Link className="nav_font1" to="/">
          <FontAwesomeIcon icon={faGift} />
        </Link>

        <Link className="nav_font1" to="/">
          <FontAwesomeIcon icon={faBell} />
        </Link>
      </div>
      <div className="nav_font2">
        <Link className="nav_font1" to="/">
          <img
            className="nav_font2_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix avatar"
          />
          <FontAwesomeIcon icon={faCaretDown} className="nav_font2" />
        </Link>
      </div>
   
      <div className="nav_test">
        <ul className={click ? "nav_menu active" : "nav_menu"}>
          <li
            className="nav_item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/"
              className="nav_links"
              onClick={handleClick}
            >
              Bladeren <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          
          <li className="nav_item1">
            <Link to="/" className="nav_links" onclick={closeMobileMenu}>
              Homepagina
            </Link>
          </li>

          <li className="nav_item1">
            <Link to="./Series" className="nav_links" onclick={closeMobileMenu}>
              Series
            </Link>
          </li>

          <li className="nav_item1">
            <Link to="./Films" className="nav_links" onclick={closeMobileMenu}>
              Films
            </Link>
          </li>

          <li className="nav_item1">
            <Link to="./Nieuw" className="nav_links" onclick={closeMobileMenu}>
              Nieuw en Populair
            </Link>
          </li>

          <li className="nav_item1">
            <Link to="./Lijst" className="nav_links" onclick={closeMobileMenu}>
              Mijn lijst
            </Link>
          </li>

          <li className="nav_item1">
            <Link to="./Kijk" className="nav_links" onclick={closeMobileMenu}>
              Kijk opnieuw
            </Link>
          </li>
        </ul>
      </div>
      {/* <Dropdown /> */}
    </div>
  );
}
export default Navbar;
