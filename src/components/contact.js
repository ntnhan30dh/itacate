import React from "react"
import fb from "../images/fb.png"
import ig from "../images/ig.png"
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

const Contact = () => {
  const intl = useIntl()
  const locale = intl.locale !== "es" ? `/${intl.locale}` : ""
  return (
    <section className="contactContainer bg-green" id="follow">
      <div className="center-div w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto flex justify-between pt-0 py-10 xsm:py-14">
        <div className="followUs-div mr-10">
          <h1 className="text-yellow text-xl xxsm:text-2xl uppercase">follow us</h1>
          <div className="some-div flex justify-between">
          <div className="fbDiv w-10">
          <img className="w-full" src={fb} alt="facebook" />
        </div>
        {intl.locale === "es"?  <Link to="https://www.instagram.com/itacate_cl/" target="_blank" className="igDiv w-10">
          <img className="w-full" src={ig} alt="instagram" />
        </Link>:<div  className="igDiv w-10">
          <img className="w-full" src={ig} alt="instagram" />
        </div>}
          </div>
        
        </div>
        <div className="legal-div text-center ">
          {/* <h1 className="text-yellow text-2xl uppercase">contact</h1>
          <p className="text-white text-xl">hello@itacateburittos.com</p> */}
          <ul text-white>
          <li>
            <Link to={`${locale}/imprint`}>Imprint</Link>
            </li>
            <li>
            <Link to={`${locale}/privacy`}>Privacy Policy </Link>
            </li>
            <li>
            <Link to={`${locale}/disclaimer`}>Disclaimer</Link>
            </li>
        </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
