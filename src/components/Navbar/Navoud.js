import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navoud.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGift,
  faSearch,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
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

  return (
    <div className={`nav_container ${show && "nav_container_black"}`}>
        <Link to="/">
          <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </Link>

      <div className="nav_links">


        <ul className="nav_links_items">
          <div className="nav_links_toggle">
            <b>Bladeren</b>
          </div>
          <Link to="/">
            <li>
              <h6>Homepagina</h6>
            </li>
          </Link>
          <Link to="./Series">
            <li>
              <h6>Series</h6>
            </li>
          </Link>
          <Link to="./Films">
            <li>
              <h6>Films</h6>
            </li>
          </Link>
          <Link to="./Nieuw">
            <li>
              <h6>Nieuw en Populair</h6>
            </li>
          </Link>
          <Link to="./Lijst">
            <li>
              <h6>Mijn lijst</h6>
            </li>
          </Link>
          <Link to="./Kijk">
            <li>
              <h6>Kijk opnieuw</h6>
            </li>
          </Link>
        </ul>
      </div>

        <div className="nav_font1">
          <Link to="/">
            <FontAwesomeIcon icon={faSearch} />
          </Link>

          <Link to="/">
            <li>
              <h6>Kids</h6>
            </li>
          </Link>

          <Link  to="/">
            <FontAwesomeIcon icon={faGift}  />
          </Link>
          
          <Link to="/">
            <FontAwesomeIcon icon={faBell}  />
          </Link>
        </div>
        <div className="nav_font2">
          <Link  to="/">
            <img
              className="nav_font2_avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="Netflix Logo"
              
            />
            <FontAwesomeIcon icon={faCaretDown} className="nav_font2"/>
          </Link>
        </div>
    </div>
  );
}
export default Nav;
