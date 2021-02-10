import React from "react"
import Img from "gatsby-image"

// import sticker from "../images/Sticker.png"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

// import chikenBox from "../images/chicken_box.png"

import smell from '../images/Wingit_kos_smell.svg'
import chicken from '../images/Wingit_kos_chicken.svg'
import box from '../images/Wingit_kos.svg'


import Plx from "react-plx"


const parallaxData = [
  {
    start:'self',
    duration: 800,
    properties: [
      {
      startValue: 0,
      endValue: 1,
      property: "opacity"
      },
    ],
  },
];

const parallaxMoveUp = [
  {
    start:'self',
    duration: 500,
    properties: [
      {
      startValue: 50,
      endValue: 0,
      property: "translateY"
      },
      {
        startValue: 0.5,
        endValue: 1,
        property: "scale"
      },
      
      
    ],
  },
];

const Story = (props) => {

  const data = useStaticQuery(graphql`
    {
      bgBig: file(relativePath: { eq: "bgBig-2-1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo: file(relativePath: { eq: "Sticker.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 380) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  let nudge = props.menuState ? 'nudge' : '';
  const imageData = data.bgBig.childImageSharp.fluid
  return (
    <section className={`storyContainer ${nudge}`}>
      <BackgroundImage  Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
          className="bgContainer">
        <span className="before"></span>
        <span className="after"></span>
        {/* <div className="stickerDiv">
          <img src={sticker} alt="sticker" />
        </div> */}
        <Img
              className={"stickerDiv"}
              fluid={data.logo.childImageSharp.fluid}
            />
      </BackgroundImage>
      {/* <div className="storyDiv wave"> */}
      <div className="storyDiv ">
      <Img
              fluid={data.logo.childImageSharp.fluid}
            />
        <span id="story" name="story"></span>
        <div className="textDiv">
          <p className="text1">
          Nothing fits a night in tuning into Netflix or hanging out with friends better than succulent fried chicken - and no one makes it better than Wing it!

          </p>
          <p className="text2">
          We're experts at crispy chicken wings & juicy strips, paired with delicious dips and original sides like criss cut fries. The perfect comfort food, delivered right to your movie night.
          </p>
        </div>
        {/* <Plx parallaxData={parallaxMoveUp} className="chickenBoxDiv">
          <img src={chikenBox} alt="" />
        </Plx> */}
          
        <div  className="chickenBox">
        <Plx parallaxData={parallaxData}>
          <img src={smell} alt="" />
          </Plx>
          <Plx parallaxData={parallaxMoveUp}>
          <img src={chicken} alt="" />
          </Plx>
          <div>
          <img src={box} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
