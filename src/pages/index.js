import React, { useState } from "react"
import Header from "../components/header"
import Story from "../components/story"
import Menu from "../components/menu"
import Video from "../components/video"
import Contact from "../components/contact"
import OrderNow from "../components/ordernow"
import "../styles/index.scss"
import 'semantic-ui-css/semantic.min.css'
import Plx from "react-plx"

export default function Home() {
  let [menuActive, setmenuActive] = useState(false);
  const toggleMenu = () => {
		setmenuActive(!menuActive)
    }
   
    let y =  window.innerHeight -170 ;
    const parallaxMoveDown = [
      {
        start:'self',
        duration: 3000,
        properties: [
          {
            startValue: 0,
            endValue: y,
            endOffset: "100vh",
            property: "translateY"
          
          },
        ],
      },
    ];
    
  return (
    <div className="pageWrapper">
      <head>
      <title>Itacate</title>
      </head>
    <Header toggleMenu={toggleMenu} menuState={menuActive}/>
    <Plx parallaxData={parallaxMoveDown} className="fixed translate-y-full top-10 right-20 orderNow  z-50 mb-80">
    <OrderNow />
        </Plx>
    <Story toggleMenu={toggleMenu} menuState={menuActive}/>
    <Menu/>
    <Video/>
    <Contact/>
    </div>
  )
}
