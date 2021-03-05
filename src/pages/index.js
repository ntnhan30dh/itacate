import React, { useState} from "react"
import Header from "../components/header"
import Story from "../components/story"
import Menu from "../components/menu"
import Followus from "../components/followus"
import Contact from "../components/contact"
// import OrderNow from "../components/ordernow"
import "../styles/index.scss"
import 'semantic-ui-css/semantic.min.css'
// import Plx from "react-plx"

export default function Home() {
  let [menuActive, setmenuActive] = useState(false);
  // let [vh, setVh] = useState(0);

  const toggleMenu = () => {
		setmenuActive(!menuActive)
    }
   
    // useEffect(() => {
    //   setVh( window.innerHeight -170)
    // }, [])

    // const parallaxMoveDown = [
    //   {
    //     start:'self',
    //     duration: 3000,
    //     properties: [
    //       {
    //         startValue: 0,
    //         endValue: vh,
    //         endOffset: "100vh",
    //         property: "translateY"
          
    //       },
    //     ],
    //   },
    // ];
    
  return (
    <div className="pageWrapper">
      <head>
      <title>Itacate</title>
      </head>
    <Header toggleMenu={toggleMenu} menuState={menuActive}/>
    {/* <Plx parallaxData={parallaxMoveDown} className=" hidden md:block fixed translate-y-full top-4 lg:top-10 right-4 xl:right-20 orderNow  z-50 mb-80">
    <OrderNow />
        </Plx> */}
    <Story toggleMenu={toggleMenu} menuState={menuActive}/>
    <Menu/>
    <Followus/>
    <Contact/>
    </div>
  )
}
