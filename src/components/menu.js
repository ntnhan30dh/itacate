import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "burrito-combo-x3.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      iconSet: file(relativePath: { eq: "menu-icon-set.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      burritoVeggie: file(relativePath: { eq: "burrito-veggie.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      brBeefBadget: file(relativePath: { eq: "br-beef-badget.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.bg.childImageSharp.fluid
  return (
    <section className="menuContainer">
      <span id="menu" name="menu"></span>
      <span className="before"></span>
      <div className="pic-red-container  w-full flex relative	">
        <span className="after"></span>
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          background-size="cover"
          className="pic-container w-1/2"
        ></BackgroundImage>

        <div className="red-container container w-1/2 bg-red p-20 ">
          <Img
            className={"w-1/2 mx-auto my-10"}
            fluid={data.iconSet.childImageSharp.fluid}
          />
          <p className="text-2xl text-yellow font-semibold w-1/2 mx-auto">
            Order for your movie night in or an exciting lunch time treat -
            because, let’s face it, life is always better with burritos.
          </p>
        </div>
      </div>
      <div className="top-text w-full text-center">
        <p className="text-black  text-xl mt-14">
          Brace yourself for a Mexican feast of flavours, <br /> from cool
          guacamole to tangy salsa.
        </p>
        <h1 className="text-green text-2xl font-semibold">
          EXPLORE OUR MENU TODAY!
        </h1>
      </div>
      <div className="menu-item-container flex border-15 border-green w-1/2 mx-auto">
        <div className="relative w-2/3">
      <div className="relative">
        <div className="absolute w-8 z-10 top-1">
      <Img
          className={"badget w-full"}
          fluid={data.brBeefBadget.childImageSharp.fluid}
        />
        </div>
        
        <Img
          className={" menu-pic w-full"}
          fluid={data.burritoVeggie.childImageSharp.fluid}
        />
      </div>
        </div>
        <div className="menu-list flex flex-col w-1/3">
          <div className="m-auto w-3/4">
          <h1 className="text-4xl text-red text-center">BURRITOS</h1>
          <ul className="text-2xl text-green  text-center">
            <li>Beef Burrito</li>
            <li>Chicken Burrito</li>
            <li>Pork Burrito</li>
            <li>Veggi Buritto</li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
