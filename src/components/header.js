import React from "react"
import logo from "../images/WingIt_Logo.png"
import OrderNow from "./ordernow"
import { Link } from "gatsby"

const Header = props => {
  let menuActive = props.menuState ? "is-inactive" : ""
  let change = props.menuState ? "change" : ""
  return (
    <nav className="nav">
      <div className="leftDiv">
        <Link to="/" className="img_div">
          <img src={logo} alt="logo" />
        </Link>
        <div className={`burgerMenu  ${change}`} onClick={props.toggleMenu} onKeyDown={props.toggleMenu} role = "button" tabIndex={-1}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
      <div className={`rightDiv row ${menuActive}`}>
        <ul>
          <li></li>
          <li></li>
          <li>
            <Link to="/#story">Our Story</Link>
          </li>
          <li>
            <Link to="/#menu">Menu</Link>
          </li>
          <li>
            <Link to="/#follow">Follow Us</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>

            {/* <AnchorLink to="#story" title="Our Story" /> */}
          </li>
        </ul>
        <OrderNow />
      </div>
    </nav>
  )
}

export default Header
