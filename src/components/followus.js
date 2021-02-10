import React from "react"
import Plx from "react-plx"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import moped from "../images/moped.png"
import followUs from "../images/followUsText.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
// import soMe1 from "../images/WingIt_SoMe_1.png"
// import soMe2 from "../images/WingIt_SoMe_2.png"
// import soMe3 from "../images/WingIt_SoMe_3.png"

const FollowUs = () => {
  const parallaxMoveRight = [
    {
      start: "self",
      duration: 1000,
      properties: [
        {
          startValue: -200,
          endValue: 0,
          property: "translateX",
        },
      ],
    },
  ]

  const data = useStaticQuery(graphql`
    {
      soMe1: file(relativePath: { eq: "WingIt_SoMe_1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      soMe2: file(relativePath: { eq: "WingIt_SoMe_2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      soMe3: file(relativePath: { eq: "WingIt_SoMe_3.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className="followUsContainer">
      <span id="follow"></span>
      <div className="top">
        <div></div>
        <div>
          <div className="followUSPicDiv">
            <img src={followUs} alt="follow us" />
          </div>
          <div className="icons">
            <div className="">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="">
              <img src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
        <Plx parallaxData={parallaxMoveRight} className="mopedDiv">
          <img src={moped} alt="moped" />
        </Plx>
      </div>
      <div className="bottom">
        <div className="pic">
          {/* <img src={soMe1} alt="Wing It_SoMe_1"/> */}
          <Img fluid={data.soMe2.childImageSharp.fluid} />
        </div>
        <div className="pic">
          {/* <img src={soMe2} alt="Wing It_SoMe_2" /> */}
          <Img
              fluid={data.soMe1.childImageSharp.fluid}
            />
        </div>
        <div className="pic">
          {/* <img src={soMe3} alt="Wing It_SoMe_3" /> */}
          <Img
              fluid={data.soMe3.childImageSharp.fluid}
            />
        </div>
      </div>
    </section>
  )
}

export default FollowUs
