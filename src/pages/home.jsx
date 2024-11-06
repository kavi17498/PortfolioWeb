import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/slider'
import CardList from '../components/CardList'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Navbar />
        <Slider />
        <CardList />
        <Footer />

    </>
  )
}

export default Home