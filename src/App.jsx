import React from "react"
import Navbar from "./components/Navbar"
import VideoComponent from "./components/VideoComponent"
import CarouselComponent from "./components/Carousel"
import Cards from "./components/Cards"
import { FooterComponent } from "./components/FooterComponent"
import Programs from "./components/Programs"

function App() {
  

  return (
    <>
      <Navbar/>
      <VideoComponent/>
      <CarouselComponent/>
      <Programs/>
      <Cards/>
      <FooterComponent/>
    </>
  )
}

export default App
