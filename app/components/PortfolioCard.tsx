import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PortfolioProject } from '../data/portfolioData'

interface PortfolioCardProps {
  project: PortfolioProject
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  return (
    <Link href={`/project/${project.id}`} className="block">
      <div className="border border-border rounded-3 p-4 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group">
        <div className="w-full h-24 bg-[#f6f5f4] rounded-md mb-3 flex items-center justify-center group-hover:bg-[#eeeded] transition-colors">
          <Image src={project.icon} alt="Project" width={24} height={24} className="w-6 h-6" />
        </div>
        <h3 className="font-otterco-display text-[14px] mb-2" style={{color: 'rgb(36, 36, 36)'}}>
          {project.title}
        </h3>
        <p className="font-otterco-light text-[11px] leading-relaxed mb-3" style={{color: 'rgb(42, 42, 42)'}}>
          {project.description}
        </p>
        <div className="flex gap-1 mb-3">
          {project.technologies.slice(0, 2).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-2 font-otterco text-[9px]"
              style={{color: 'rgb(36, 36, 36)'}}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="font-otterco text-[11px] underline group-hover:no-underline transition-all" style={{color: 'rgb(36, 36, 36)'}}>
          View →
        </div>
      </div>
    </Link>
  )
}

export default PortfolioCard