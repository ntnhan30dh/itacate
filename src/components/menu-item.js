import React, { useState, useEffect } from "react"
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

      dipPicante: file(relativePath: { eq: "dip_salsa_picante.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      brBeefBadge: file(relativePath: { eq: "br-beef-badge.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      queVeggieBadge: file(relativePath: { eq: "que-veggie-badge.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      bowlChickenBadge: file(relativePath: { eq: "bowl-chicken-badge.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      salVerdeBadge: file(relativePath: { eq: "sal-verde-badge.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const picsSrc = {
    burritos: {
      pics: [
        data.burritoBeef.childImageSharp.fluid,
        data.burritoChicken.childImageSharp.fluid,
        data.burritoPork.childImageSharp.fluid,
        data.burritoVeggie.childImageSharp.fluid,
      ],
      badges: [
        data.brBeefBadge.childImageSharp.fluid,
        data.queVeggieBadge.childImageSharp.fluid,
        data.bowlChickenBadge.childImageSharp.fluid,
        data.salVerdeBadge.childImageSharp.fluid,
      ],
    },
    quesadillas: {
      pics: [
        data.quesadillaBeef.childImageSharp.fluid,
        data.quesadillaChicken.childImageSharp.fluid,
        data.quesadillaVeggie.childImageSharp.fluid,
      ],
      badges: [
        data.brBeefBadge.childImageSharp.fluid,
        data.queVeggieBadge.childImageSharp.fluid,
        data.bowlChickenBadge.childImageSharp.fluid,
        data.salVerdeBadge.childImageSharp.fluid,
      ],
    },

    "burrito bowls": {
      pics: [
        data.burritoBowlBeef.childImageSharp.fluid,
        data.burritoBowlChicken.childImageSharp.fluid,
        data.burritoBowlVeggie.childImageSharp.fluid,
      ],

      badges: [
        data.brBeefBadge.childImageSharp.fluid,
        data.queVeggieBadge.childImageSharp.fluid,
        data.bowlChickenBadge.childImageSharp.fluid,
        data.salVerdeBadge.childImageSharp.fluid,
      ],
    },
    salsas: {
      pics: [
        data.dipQuacamole.childImageSharp.fluid,
        data.dipRoja.childImageSharp.fluid,
        data.dipVerde.childImageSharp.fluid,
        data.dipPicante.childImageSharp.fluid,
      ],
      badges: [
        data.brBeefBadge.childImageSharp.fluid,
        data.queVeggieBadge.childImageSharp.fluid,
        data.bowlChickenBadge.childImageSharp.fluid,
        data.salVerdeBadge.childImageSharp.fluid,
      ],
    },
  }

  const picArr = picsSrc[`${props.setting.name}`]["pics"]
  const badgeArr = picsSrc[`${props.setting.name}`]["badges"]

  useEffect(() => {
    if (pic >= picArr.length) {
      setPic(0)
    }
    const interval = setInterval(() => {
      if (pic <= picArr.length) {
        setPic(pic => pic + 1)
      }
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [pic, picArr.length])

  return (
    <div
      className={`menu-item-container flex border-15 border-${props.setting.border} w-1/2 mx-auto my-12  transform  ${props.setting.reverse}`}
    >
        <div className={`absolute w-1/6 z-50 ${props.setting.badge}`}>
          <Img className={"badget w-full"} fluid={badgeArr[pic]} />
        </div>
      <div className="relative w-2/3 overflow-hidden">
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
                  className="text-2xl text-green"
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
