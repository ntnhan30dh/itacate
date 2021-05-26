import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { useIntl } from "gatsby-plugin-intl"


const Story = props => {
  const data = useStaticQuery(graphql`
    {
      bgBig: file(relativePath: { eq: "bg-big2_fill.png" }) {
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
      
      logo_es: file(relativePath: { eq: "header-logo_es.png" }) {
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
    }
  `)
  let nudge = props.menuState ? "nudge" : ""
  const imageData = data.bgBig.childImageSharp.fluid
  const intl = useIntl()
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
        <Img className={" w-2/3 xxsm:w-1/2 xsm:w-2/5 lg:w-1/3"} fluid={intl.locale === "en" ?data.logo.childImageSharp.fluid:data.logo_es.childImageSharp.fluid} />
      </BackgroundImage>
      <div className="storyDiv" id="story">
        {/* <span  name="story"></span> */}
        <Img
          className={" w-2/3 xl:w-1/3 mx-auto xsm:my-10 md:my-20"}
          fluid={data.iconSet.childImageSharp.fluid}
        />
        <div className="text-container container xsm:w-3/4 sm:w-2/3 xl:w-1/2 mx-auto text-center py-14 px-6">
        <h1 className="text-green text-4xl sm:text-5xl font-semibold">
        {intl.formatMessage({ id: "story head" })}
        </h1>
        <p className="text-black font-light text-xl sm:text-2xl mt-14" >
        {intl.formatMessage({ id: "story p" })}
        </p>
        </div>
       
        <div class="imageMarquee h-16 xms:h-24 md:h-28 lg:h-32 xl:h-40 xsm:my-10 xl:my-20 "></div>
      </div>
    </section>
  )
}

export default Story
