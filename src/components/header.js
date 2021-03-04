import React from "react"
import logo from "../images/logo.png"
 import OrderNow from "./ordernow"
import { Link } from "gatsby"
import Sticky from "react-sticky-el"

const Header = props => {
  let menuActive = props.menuState ? "is-inactive" : ""
  let change = props.menuState ? "change" : ""
  let hidden = props.menuState ? "hidden" : ""
  // let wFull = !props.menuState ? "w-full" : ""
  return (
    <Sticky className="sticky">
      <nav className="nav">
        <div className={`leftDiv `}>
          <Link to="/">
            <div className={`container ${hidden}  img_div w-36 lg:w-48 mr-8`}>
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <div
            className={`burgerMenu md:ml-8 ${change}`}
            onClick={props.toggleMenu}
            onKeyDown={props.toggleMenu}
            role="button"
            tabIndex={-1}
          >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>
        <div className={`rightDiv row ${menuActive}`}>
          <ul className="text:sm sm:text-lg md:text-xl lg:text-2xl w-9/12 sm:w-4/6">
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
              <Link to="/#follow">Contact</Link>
            </li>
            {/* <li>
              <Link to="/#">  </Link>
            </li> */}
          </ul>
            <OrderNow />
          
        </div>
      </nav>
    </Sticky>
  )
}

export default Header
