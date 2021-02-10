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
      <title>Wing it!</title>
      </head>
    <Header toggleMenu={toggleMenu} menuState={menuActive}/>
    <Story toggleMenu={toggleMenu} menuState={menuActive}/>
    <Menu/>
    <FollowUs/>
    <Contact/>
    </div>
  )
}
