import React from "react"
import pedidosYa from "../images/PedidosYa-logo.png"
import foodora from "../images/foodora.png"
import mjam from "../images/mjam.png"
import netpincer from "../images/netpincer.png"
import damejidlo from "../images/damejidlo.png"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <section className="contactContainer">
      <span id="contact"></span>
      {/* <div className="text wave wave--top">hello@getwingit.com</div> */}
      <div className="text">Wing It! your way, exclusively from:</div>
      <div className="logos">
        <div className="logoDiv">
          <img src={pedidosYa} alt="logo" />
        </div>
        <div className="logoDiv">
          <img src={foodora} alt="logo" />
        </div>{" "}
        <div className="logoDiv">
          <img src={mjam} alt="logo" />
        </div>{" "}
        <div className="logoDiv">
          <img src={netpincer} alt="logo" />
        </div>{" "}
        <div className="logoDiv">
          <img src={damejidlo} alt="logo" />
        </div>
      </div>
      <div className="blackDiv">
      <ul>
          <li>
            <Link to="/imprint">Imprint</Link>
            </li>
            <li>
            <Link to="/privacy">Privacy Policy </Link>
            </li>
            <li>
            <Link to="/disclaimer">Disclaimer</Link>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
