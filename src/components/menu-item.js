import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const MenuItem = props => {
  const [pic, setPic] = useState(0)
  const data = useStaticQuery(graphql`
    {
      burritoBeef: file(relativePath: { eq: "burrito_beef.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burritoChicken: file(relativePath: { eq: "burrito_chicken.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burritoPork: file(relativePath: { eq: "burrito_pork.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burritoVeggie: file(relativePath: { eq: "burrito_veggie.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      quesadillaBeef: file(relativePath: { eq: "quesadilla_beef.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      quesadillaChicken: file(relativePath: { eq: "quesadilla_chicken.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      quesadillaVeggie: file(relativePath: { eq: "quesadilla_veggie.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burritoBowlBeef: file(relativePath: { eq: "burrito_beef_bowl.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burritoBowlChicken: file(
        relativePath: { eq: "burrito_chicken_bowl.png" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burritoBowlVeggie: file(relativePath: { eq: "burrito_veggie_bowl.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      dipQuacamole: file(relativePath: { eq: "dip_guacamole.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      dipRoja: file(relativePath: { eq: "dip_salsa_roja.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      dipVerde: file(relativePath: { eq: "dip_salsa_verde.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      dipPicante: file(relativePath: { eq: "dip_salsa_verde.png" }) {
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

  const picsSrc = {
    burritos: [
      data.burritoBeef.childImageSharp.fluid,
      data.burritoChicken.childImageSharp.fluid,
      data.burritoPork.childImageSharp.fluid,
      data.burritoChicken.childImageSharp.fluid,
    ],
    quesadillas: [
      data.quesadillaBeef.childImageSharp.fluid,
      data.quesadillaChicken.childImageSharp.fluid,
      data.quesadillaVeggie.childImageSharp.fluid,
    ],
    "burrito bowls": [
      data.burritoBowlBeef.childImageSharp.fluid,
      data.burritoBowlChicken.childImageSharp.fluid,
      data.burritoBowlVeggie.childImageSharp.fluid,
    ],
    salsas: [
      data.dipQuacamole.childImageSharp.fluid,
      data.dipRoja.childImageSharp.fluid,
      data.dipVerde.childImageSharp.fluid,
      data.dipPicante.childImageSharp.fluid,
    ],
  }

  const picArr = picsSrc[`${props.setting.name}`]

  return (
    <div
      className={`menu-item-container flex border-15 border-${props.setting.border} w-1/2 mx-auto 	`}
    >
      <div className="relative w-2/3 overflow-hidden">
        <div className="absolute w-1/5 z-50 top-1">
          <Img
            className={"badget w-full"}
            fluid={data.brBeefBadget.childImageSharp.fluid}
          />
        </div>
        <div className="absolute w-full bottom-0 top-0">
          <Img
            className={" menu-pic2 w-full"}
            fluid={pic > 0 ? picArr[pic - 1] : picArr[picArr.length - 1]}
          />
        </div>
        <Img className={" menu-pic w-full "} fluid={picArr[pic]} />
      </div>
      <div className="menu-list flex flex-col w-1/3">
        <div className="m-auto w-3/4">
          <h1 className="text-4xl text-red text-center uppercase">
            {props.setting.name}
          </h1>
          <ul className="text-2xl text-green  text-center">
            {props.setting.itemList.map(i => (
              <li>
                <button
                  onClick={() => setPic(props.setting.itemList.indexOf(i))}
                >
                  {i}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
