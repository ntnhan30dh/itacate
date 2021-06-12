import React from "react"
import logo from "../images/logo.png"
import OrderNow from "./ordernow"
import { Link } from "gatsby"
import Sticky from "react-sticky-el"
import { useIntl } from "gatsby-plugin-intl"
//import { Flag } from 'semantic-ui-react'

const Header = props => {
  let menuActive = props.menuState ? "is-inactive" : ""
  let change = props.menuState ? "change" : ""
  let hidden = props.menuState ? "hidden" : ""
  // let wFull = !props.menuState ? "w-full" : ""

  const intl = useIntl()
  const locale = intl.locale !== "es" ? `/${intl.locale}` : ""
  return (
    <Sticky className="sticky">
      <nav className="nav relative">
        <div className={`leftDiv `}>
          <Link to={`${locale}/`}>
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
              <Link to={`${locale}/#story`}>
                {intl.formatMessage({ id: "Our Story" })}
              </Link>
            </li>
            <li>
              <Link to={`${locale}/#menu`}>
                {intl.formatMessage({ id: "Menu" })}
              </Link>
            </li>
            <li>
              <Link to={`${locale}/#follow`}>
                {intl.formatMessage({ id: "Follow Us" })}
              </Link>
            </li>
            <li>
              <Link to={`${locale}/#follow`}>
                {" "}
                {intl.formatMessage({ id: "Contact" })}{" "}
              </Link>
            </li>
            {/* <li>
              <Link to="/#">  </Link>
            </li> */}
          </ul>

          <div>
          <OrderNow />

          </div>
    
        </div>
        <div className="absolute top-4 right-8">
          <ul className="text-red text-2xl flex">
            <li className="mr-2">
              <Link to="/en" className="">
              <span className="text-yellow"> EN</span>
              {/* <Flag name='uk' /> */}
              </Link>
            </li>
            <li>
              <Link to="/" className="">
              <span className="text-yellow"> ES</span>
              {/* <Flag name='spain' /> */}

              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Sticky>
  )
}

export default Header
