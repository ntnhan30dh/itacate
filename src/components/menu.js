import React from "react"
import Plx from "react-plx"
import { graphql, useStaticQuery } from 'gatsby'


import OrderNow from './ordernow'
// import mainPic from "../images/mains-pic.png"
// import sidesPic from "../images/sides-pic.png"
// import dipPic from "../images/dip-pic.png"
import chickenWing from "../images/chicken-wing.png"
import chickenLeg from "../images/chicken-leg.png"
import chickenDish from "../images/chicken-dish.png"
import fries from "../images/fries.png"
import chickenBoxIcon from "../images/chicken-box_icon.png"
import mains from "../images/mainsText.png"
import sides from "../images/sidesText.png"
import dips from "../images/dipsText.png"
import dip from "../images/dip.png"


const Menu = () => {
  const parallaxRotate = [
    {
      start:'self',
      duration: 1000,
      properties: [
        {
          startValue: 0,
          endValue: 180,
          property: "rotate"
        },
      ],
    },
  ];

  const parallaxScaleUp = [
    {
      start:'self',
      duration: 500,
      properties: [
        {
        startValue: 0,
        endValue: 1,
        property: "scale"
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
          startValue: 100,
          endValue: 0,
          property: "translateY"
        },
      ],
    },
  ];

  const data = useStaticQuery(graphql`
  {
    mains: file(relativePath: { eq: "mains-pic.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sides: file(relativePath: { eq: "sides-pic.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    dip: file(relativePath: { eq: "dip-pic.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

  }
`)
  return (
    <section className="menuContainer">
    <span id="menu"  name="menu"></span>
      <div className="textTopDiv row ">
        <div className="chickenWingDiv">
          <Plx parallaxData={parallaxScaleUp} className="chickenWingImgDiv">
            <img src={chickenWing} alt="chicken wing" />
          </Plx>
        </div>
        <div className="text">
          <h1>MENU</h1>
          <h2>Hungry for wings? We've got just the thing.</h2>
          <p>
            Check out our yummy fried chicken served with tongue-tingling
            sauces.
          </p>
          <OrderNow/>
        </div>
        <div className="chickenLegDiv">
          <Plx parallaxData={parallaxScaleUp} className="chickenLegImgDiv">
            <img src={chickenLeg} alt="chicken leg" />
          </Plx>
        </div>
      </div>
      <div className="mainDiv row">
        <div className="mainDivImgContainer">
          <img src={data.mains.childImageSharp.fluid.src} alt="main menu" />
          {/* <Img
              fluid={data.mains.childImageSharp.fluid}
            /> */}
        </div>
        <div   className="mainText">
          <div className="textContainer">
          <div className="mainsPicDiv">
            <img src={mains} alt="mains" />
          </div>
          <p>
            Chicken wings <br />
            Tenders <br />
            Popcorn chicken <br />
            Drumsticks <br />
          </p>
          </div>
          <Plx parallaxData={parallaxRotate} className="chickenDishDiv">
            <img src={chickenDish} alt="chicken Dish" />
          </Plx>
        </div>
      </div>
      <div className="mainDiv reverse row">
        <div className="mainText">
          <Plx parallaxData={parallaxScaleUp} className="friesDiv">
            <img src={fries} alt=" fries" />
          </Plx>
          <div className="textContainer reverse">
          <div className="mainsPicDiv">
            <img src={sides} alt="sides" />
          </div>
          <p>
            Criss cross potatoes <br />
            Onion rings <br />
            Cheese nuggets <br />
            Mozzarella sticks <br />
            French fries <br />
            Sweet potato fries <br />
            Coleslaw <br />
          </p>
          </div>
        </div>
        <div className="mainDivImgContainer">
          <img src={data.sides.childImageSharp.fluid.src} alt="sides menu" />
        </div>
      </div>
      <div className="mainDiv row">
        <div className="mainDivImgContainer">
          <img src={data.dip.childImageSharp.fluid.src} alt="dips menu" />
        </div>
        <div className="mainText">
          <div className="textContainer">
          <div className="mainsPicDiv">
            <img src={dips} alt="dips" />
          </div>
          <p>
            Black pepper <br />
            Garlic <br />
            Paprika <br />
            Bernaise <br />
            Mango & Jalapeno <br />
            Cheddar
            <br />
          </p>
          </div>
          <Plx parallaxData={parallaxScaleUp} className="dipDiv">
            <img src={dip} alt="dip" />
          </Plx>
        </div>
      </div>
      <div className="textBottomDiv">
        <p>
          Make your fried chicken dreams come true. Pick your favourite dish now and
          enjoy!
        </p>
        <OrderNow/>
      </div>
      <div className="bgSmallDiv">
        <Plx parallaxData={parallaxMoveUp} className="chickenBoxIconDiv">
          <img src={chickenBoxIcon} alt="chicken box icon" />
        </Plx>
\      </div>
    </section>
  )
}

export default Menu
