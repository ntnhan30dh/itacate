import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Story = props => {
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
  let nudge = props.menuState ? "nudge" : ""
  const imageData = data.bgBig.childImageSharp.fluid
  return (
    <section className={`storyContainer ${nudge}`}>
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        background-size="cover"
        opacity={0.5}
        className="bgContainer"
      >
        <span className="wave-green_down"></span>
        <span className="wave-white_up"></span>
        <Img className={"stickerDiv w-1/3"} fluid={data.logo.childImageSharp.fluid} />
      </BackgroundImage>
      <div className="storyDiv" id="story">
        {/* <span  name="story"></span> */}
        <Img
          className={" w-2/3 xl:w-1/3 mx-auto my-10 md:my-20"}
          fluid={data.iconSet.childImageSharp.fluid}
        />
        <div className="text-container container w-3/4 sm:w-2/3 xl:w-1/2 mx-auto text-center py-14 px-6">
        <h1 className="text-green text-4xl sm:text-5xl font-semibold">
          Get your tastebuds ready, because Itacate is here to deliver fresh,
          fiery food.
        </h1>
        <p className="text-black font-light text-xl sm:text-2xl mt-14" >
          Whatever spice level you can handle (hey, don’t judge!), we’ve got
          something for everyone and every occasion. Our favourites include
          tongue-tingling burritos and quesadillas with a choice of fillings and
          traditional salads, all carefully prepared for you to simply unwrap
          and enjoy.
        </p>
        </div>
        {/* <Img
          className={"w-full"}
          fluid={data.iconSetBottom.childImageSharp.fluid}
        /> */}
        <div class="imageMarquee h-24 md:h-28 lg:h-32 xl:h-40 my-10 xl:my-20 "></div>
      </div>
    </section>
  )
}

export default Story
