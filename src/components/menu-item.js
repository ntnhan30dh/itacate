import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const MenuItem = props => {
  const [pic, setPic] = useState(0)
  const data = useStaticQuery(graphql`
    {
      burritoBeef: file(relativePath: { eq: "burrito-beef.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burritoChicken: file(relativePath: { eq: "burrito-chicken.png" }) {
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

  const picArrays=[data.burritoBeef.childImageSharp.fluid,data.burritoChicken.childImageSharp.fluid]

  const prePic = ""

  return (
    <div
      className={`menu-item-container flex border-15 border-${props.setting.border} w-1/2 mx-auto 	`}
    >
      <div className="relative w-2/3 overflow-hidden">
          <div className="absolute w-1/4 z-50 top-1">
            <Img
              className={"badget w-full"}
              fluid={data.brBeefBadget.childImageSharp.fluid}
            />
          </div>
          <div className="absolute w-full">
          <Img className={" menu-pic2 w-full"} fluid={pic>0?picArrays[pic-1]:picArrays[picArrays.length-1]}/>
          </div>
          <Img className={" menu-pic w-full "} fluid={picArrays[pic]} />
      </div>
      <div className="menu-list flex flex-col w-1/3">
        <div className="m-auto w-3/4">
          <h1 className="text-4xl text-red text-center">
            {props.setting.name}
          </h1>
          <ul className="text-2xl text-green  text-center">
            {props.setting.itemList.map(i => (
              <li>
                <button onClick={() => setPic(props.setting.itemList.indexOf(i))}>{i}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
