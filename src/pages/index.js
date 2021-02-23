import React, { useState } from "react"
import Header from "../components/header"
import Story from "../components/story"
import Menu from "../components/menu"
import Video from "../components/video"
import Contact from "../components/contact"
import 'semantic-ui-css/semantic.min.css'
import { graphql, useStaticQuery } from "gatsby"
import "../styles/index.scss"
import Img from "gatsby-image"

export default function Home() {
  let [menuActive, setmenuActive] = useState(false);
  const toggleMenu = () => {
		setmenuActive(!menuActive)
    }
    const data = useStaticQuery(graphql`
    {
      bgBig: file(relativePath: { eq: "bg-big_fill.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo: file(relativePath: { eq: "header-logo.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 480) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      orderNow: file(relativePath: { eq: "order-now.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 480) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      iconSet: file(relativePath: { eq: "icon-set.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      iconSetBottom: file(relativePath: { eq: "story-iconset-bottom.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
    
  return (
    <div className="pageWrapper">
      <head>
      <title>Itacate</title>
      </head>
    <Header toggleMenu={toggleMenu} menuState={menuActive}/>
    <div className="fixed top-3/4 right-20 orderNow  z-50">
        <Img className="w-28 orderNow" fluid={data.orderNow.childImageSharp.fluid} />
        </div>
    <Story toggleMenu={toggleMenu} menuState={menuActive}/>
    <Menu/>
    <Video/>
    <Contact/>
    </div>
  )
}
