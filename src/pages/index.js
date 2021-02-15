import React, { useState } from "react"
import Header from "../components/header"
import Story from "../components/story"
import Menu from "../components/menu"
import FollowUs from "../components/followus"
import Contact from "../components/contact"
import 'semantic-ui-css/semantic.min.css'

import "../styles/index.scss"

export default function Home() {
  let [menuActive, setmenuActive] = useState(false);
  const toggleMenu = () => {
		setmenuActive(!menuActive)
    }
   
    
  return (
    <div className="pageWrapper">
      <head>
      <title>Itacate</title>
      </head>
    <Header toggleMenu={toggleMenu} menuState={menuActive}/>
    <Story toggleMenu={toggleMenu} menuState={menuActive}/>
    <p className="p-6 max-w-sm mx-auto bg-black">Welcome to your new Gatsby site.</p>
    <Menu/>
    <FollowUs/>
    <Contact/>
    </div>
  )
}
