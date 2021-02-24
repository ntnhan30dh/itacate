import React, { useState } from "react"
import Header from "../components/header"
import Story from "../components/story"
import Menu from "../components/menu"
import Video from "../components/video"
import Contact from "../components/contact"
import OrderNow from "../components/ordernow"
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
    <div className="fixed top-3/4 right-20 orderNow  z-50">
    <OrderNow />
        </div>
    <Story toggleMenu={toggleMenu} menuState={menuActive}/>
    <Menu/>
    <Video/>
    <Contact/>
    </div>
  )
}
