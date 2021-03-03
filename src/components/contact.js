import React from "react"
import fb from "../images/fb.png"
import ig from "../images/ig.png"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <section className="contactContainer bg-green" id="follow">
      <div className="center-div w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto flex justify-between pt-0 py-10 xsm:py-14">
        <div className="followUs-div mr-10">
          <h1 className="text-yellow text-xl xxsm:text-2xl uppercase">follow us</h1>
          <div className="some-div flex justify-between">
          <div className="fbDiv w-10">
          <img className="w-full" src={fb} alt="facebook" />
        </div>
        <div className="igDiv w-10">
          <img className="w-full" src={ig} alt="instagram" />
        </div>
          </div>
        
        </div>
        <div className="legal-div text-center ">
          {/* <h1 className="text-yellow text-2xl uppercase">contact</h1>
          <p className="text-white text-xl">hello@itacateburittos.com</p> */}
          <ul text-white>
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
      </div>
    </section>
  )
}

export default Contact
