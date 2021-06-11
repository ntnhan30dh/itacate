import React from "react"
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"


const Contact = () => {
  const locale = intl.locale !== "es" ? `/${intl.locale}` : ""
  return (
    <section className="footer">
      <div className="blackDiv">
      <ul>
          <li>
            <Link to= {`${locale}/imprint`}>Imprint</Link>
            </li>
            <li>
            <Link to={`${locale}/privacy`}>Privacy Policy </Link>
            </li>
            <li>
            <Link to={`${locale}/disclaimer`}>Disclaimer</Link>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
