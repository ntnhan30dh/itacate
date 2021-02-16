import React from "react"
import fb from "../images/fb.png"
import ig from "../images/ig.png"
//import { Link } from "gatsby"

const Contact = () => {
  return (
    <section className="contactContainer bg-green">
      <div className="center-div w-1/3 mx-auto flex justify-center py-14">
        <div className="followUs-div mr-10">
          <h1 className="text-yellow text-2xl uppercase">follow us</h1>
          <div className="some-div flex justify-between">
          <div className="fbDiv w-10">
          <img className="w-full" src={fb} alt="facebook" />
        </div>
        <div className="igDiv w-10">
          <img className="w-full" src={ig} alt="facebook" />
        </div>
          </div>
        
        </div>
        <div className="contact-div  ">
          <h1 className="text-yellow text-2xl uppercase">contact</h1>
          <p className="text-white text-xl">hello@itacateburittos.com</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
