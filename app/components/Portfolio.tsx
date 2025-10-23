import React from 'react'
import PortfolioCard from './PortfolioCard'
import { portfolioProjects } from '../data/portfolioData'

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative z-10 flex flex-col items-center justify-center py-12 md:py-20">
      <div className="w-[90%] md:w-[84%] mx-auto flex flex-col items-center">

        {/* Heading */}
        <h2
          className="font-otterco-display font-medium text-[28px] md:text-[36px] leading-tight bg-clip-text text-transparent text-center mb-4 md:mb-6 px-4 md:px-0"
          style={{
            backgroundImage: 'linear-gradient(97.1265deg, rgb(12, 12, 12) 0%, rgba(12, 12, 12, 0.55) 100%)'
          }}
        >
          My Portfolio
        </h2>

        {/* Description */}
        <p className="font-otterco-light text-[14px] text-center mb-12 md:mb-16 max-w-2xl px-4 md:px-0" style={{color: 'rgb(42, 42, 42)'}}>
          A showcase of projects that blend creativity with functionality. Each project represents a unique solution crafted with modern technologies and user-centered design principles.
        </p>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 w-full max-w-6xl mb-8 md:mb-12 px-3 md:px-0">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        {/* Browse More */}
        <div className="text-center">
          <div className="w-full h-[1px] mx-auto mb-8" style={{backgroundColor: '#ecebea'}}></div>
          <p className="font-otterco-light text-[14px] mb-4" style={{color: 'rgb(42, 42, 42)'}}>
            Want to see more work?
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="font-otterco text-[14px] underline hover:no-underline transition-all" style={{color: 'rgb(36, 36, 36)'}}>
              Browse all projects
            </button>
            <span className="font-otterco text-[14px]" style={{color: 'rgb(42, 42, 42)'}}>or</span>
            <button className="font-otterco text-[14px] underline hover:no-underline transition-all" style={{color: 'rgb(36, 36, 36)'}}>
              Start a new project
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Portfolio