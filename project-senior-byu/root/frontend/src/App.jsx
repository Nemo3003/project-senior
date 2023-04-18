import { useState } from 'react'
import Header from "./components/Header"
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {

  return(
    <div>
      <Header/>
      <Hero/>
      <br />
      <Reviews/>
      <Footer/>
    </div>
    
    )
}

export default App
