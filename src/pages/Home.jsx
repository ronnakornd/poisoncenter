import React from 'react'
import Carousel from '../components/Carousel'
import Bulletin from '../components/Bulletin'
import Gallery from '../components/Gallery'

function Home() {
  return (
    <div className=" bg-stone-200">
       <Carousel />
       <Bulletin />
       <Gallery />
    </div>
  )
}

export default Home