import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const Video = () => {


  const data = useStaticQuery(graphql`
    {
      iconSet: file(relativePath: { eq: "icon-set-green.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      video: file(relativePath: { eq: "video-placeholder.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      iconBottom: file(relativePath: { eq: "video-icons-bottom.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className="videoContainer relative bg-yellow mt-20">
     <span className="wave-white-top">
     </span>
       <p className=" w-3/4 lg:w-1/3 mx-auto text-red text-2xl md:text-3xl text-center pt-32  pb-10">
       Our dishes are rich of all food groups fresh ingredients and conveniently pack for you to enjoy wherever you are
       </p>
       <Img
          className={" iconSet w-2/3 lg:w-1/4 mx-auto"}
          fluid={data.iconSet.childImageSharp.fluid}
        />
        <Img
          className={" iconSet w-3/4 lg:w-1/3 mx-auto my-20"}
          fluid={data.video.childImageSharp.fluid}
        />
        <Img
          className={" iconSet w-full my-24"}
          fluid={data.iconBottom.childImageSharp.fluid}
        />
        <div>hi</div>
        <span className="wave-green-bottom"></span>
    </section>
  )
}

export default Video
