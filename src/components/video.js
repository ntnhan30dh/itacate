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
       <p className=" w-3/4 lg:w-2/5 mx-auto text-red text-2xl md:text-3xl text-center pt-32  pb-10">
       Our dishes cover all food groups, full of fresh ingredients and conveniently packed for you to enjoy wherever you are.       </p>
       <Img
          className={" iconSet w-2/3 lg:w-1/4 mx-auto"}
          fluid={data.iconSet.childImageSharp.fluid}
        />
        <Img
          className={" iconSet w-3/4 lg:w-2/5 mx-auto my-20"}
          fluid={data.video.childImageSharp.fluid}
        />
        {/* <Img
          className={" iconSet w-full my-24 "}
          fluid={data.iconBottom.childImageSharp.fluid}
        /> */}
        <div className="icon-div h-24 md:h-28 lg:h-32 xl:h-40 my-24">

        </div>
        <div>hi</div>
        <span className="wave-green-bottom"></span>
    </section>
  )
}

export default Video
