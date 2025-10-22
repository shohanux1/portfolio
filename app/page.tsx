import React from 'react'
import { Header, Hero, CompanyLogos, Services, About, Portfolio, Contact } from './components'

const Home = () => {
  return (
    <div className="bg-[#f6f5f4]">
      {/* Global Noise Effect */}
      <div className="noise-bg" />
      <Header />
      <Hero />
      <CompanyLogos />
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default Home