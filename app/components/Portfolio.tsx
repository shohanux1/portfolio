import React from 'react'
import Image from 'next/image'

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
          {/* Project 1 */}
          <div className="border border-border rounded-[12px] p-4 bg-white">
            <div className="w-full h-24 bg-[#f6f5f4] rounded-[6px] mb-3 flex items-center justify-center">
              <Image src="/icon-sample/Website-Hack.svg" alt="Project" width={24} height={24} className="w-6 h-6" />
            </div>
            <h3 className="font-otterco-display text-[14px] mb-2" style={{color: 'rgb(36, 36, 36)'}}>
              E-Commerce Platform
            </h3>
            <p className="font-otterco-light text-[11px] leading-relaxed mb-3" style={{color: 'rgb(42, 42, 42)'}}>
              Modern solution with checkout and inventory.
            </p>
            <div className="flex gap-1 mb-3">
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>React</span>
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>Next.js</span>
            </div>
            <button className="font-otterco text-[11px] underline" style={{color: 'rgb(36, 36, 36)'}}>
              View →
            </button>
          </div>

          {/* Project 2 */}
          <div className="border border-border rounded-[12px] p-4 bg-white">
            <div className="w-full h-24 bg-[#f6f5f4] rounded-[6px] mb-3 flex items-center justify-center">
              <Image src="/icon-sample/Analytics.svg" alt="Project" width={24} height={24} className="w-6 h-6" />
            </div>
            <h3 className="font-otterco-display text-[14px] mb-2" style={{color: 'rgb(36, 36, 36)'}}>
              Analytics Dashboard
            </h3>
            <p className="font-otterco-light text-[11px] leading-relaxed mb-3" style={{color: 'rgb(42, 42, 42)'}}>
              Real-time dashboard with charts.
            </p>
            <div className="flex gap-1 mb-3">
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>Vue.js</span>
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>D3.js</span>
            </div>
            <button className="font-otterco text-[11px] underline" style={{color: 'rgb(36, 36, 36)'}}>
              View →
            </button>
          </div>

          {/* Project 3 */}
          <div className="border border-border rounded-[12px] p-4 bg-white">
            <div className="w-full h-24 bg-[#f6f5f4] rounded-[6px] mb-3 flex items-center justify-center">
              <Image src="/icon-sample/Video-chat.svg" alt="Project" width={24} height={24} className="w-6 h-6" />
            </div>
            <h3 className="font-otterco-display text-[14px] mb-2" style={{color: 'rgb(36, 36, 36)'}}>
              Video Conference
            </h3>
            <p className="font-otterco-light text-[11px] leading-relaxed mb-3" style={{color: 'rgb(42, 42, 42)'}}>
              Secure platform with screen sharing.
            </p>
            <div className="flex gap-1 mb-3">
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>React</span>
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>WebRTC</span>
            </div>
            <button className="font-otterco text-[11px] underline" style={{color: 'rgb(36, 36, 36)'}}>
              View →
            </button>
          </div>

          {/* Project 4 */}
          <div className="border border-border rounded-[12px] p-4 bg-white">
            <div className="w-full h-24 bg-[#f6f5f4] rounded-[6px] mb-3 flex items-center justify-center">
              <Image src="/icon-sample/Block-Chain.svg" alt="Project" width={24} height={24} className="w-6 h-6" />
            </div>
            <h3 className="font-otterco-display text-[14px] mb-2" style={{color: 'rgb(36, 36, 36)'}}>
              Blockchain Wallet
            </h3>
            <p className="font-otterco-light text-[11px] leading-relaxed mb-3" style={{color: 'rgb(42, 42, 42)'}}>
              Secure wallet with multi-currency.
            </p>
            <div className="flex gap-1 mb-3">
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>Web3</span>
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>Ethereum</span>
            </div>
            <button className="font-otterco text-[11px] underline" style={{color: 'rgb(36, 36, 36)'}}>
              View →
            </button>
          </div>

          {/* Project 5 */}
          <div className="border border-border rounded-[12px] p-4 bg-white">
            <div className="w-full h-24 bg-[#f6f5f4] rounded-[6px] mb-3 flex items-center justify-center">
              <Image src="/icon-sample/Growth.svg" alt="Project" width={24} height={24} className="w-6 h-6" />
            </div>
            <h3 className="font-otterco-display text-[14px] mb-2" style={{color: 'rgb(36, 36, 36)'}}>
              SaaS Platform
            </h3>
            <p className="font-otterco-light text-[11px] leading-relaxed mb-3" style={{color: 'rgb(42, 42, 42)'}}>
              Enterprise software solution with scalability.
            </p>
            <div className="flex gap-1 mb-3">
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>Laravel</span>
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>MySQL</span>
            </div>
            <button className="font-otterco text-[11px] underline" style={{color: 'rgb(36, 36, 36)'}}>
              View →
            </button>
          </div>

          {/* Project 6 */}
          <div className="border border-border rounded-[12px] p-4 bg-white">
            <div className="w-full h-24 bg-[#f6f5f4] rounded-[6px] mb-3 flex items-center justify-center">
              <Image src="/icon-sample/Send-messages.svg" alt="Project" width={24} height={24} className="w-6 h-6" />
            </div>
            <h3 className="font-otterco-display text-[14px] mb-2" style={{color: 'rgb(36, 36, 36)'}}>
              Chat Application
            </h3>
            <p className="font-otterco-light text-[11px] leading-relaxed mb-3" style={{color: 'rgb(42, 42, 42)'}}>
              Real-time messaging with file sharing.
            </p>
            <div className="flex gap-1 mb-3">
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>Socket.io</span>
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>MongoDB</span>
            </div>
            <button className="font-otterco text-[11px] underline" style={{color: 'rgb(36, 36, 36)'}}>
              View →
            </button>
          </div>

          {/* Project 7 */}
          <div className="border border-border rounded-[12px] p-4 bg-white">
            <div className="w-full h-24 bg-[#f6f5f4] rounded-[6px] mb-3 flex items-center justify-center">
              <Image src="/icon-sample/Financial-growth.svg" alt="Project" width={24} height={24} className="w-6 h-6" />
            </div>
            <h3 className="font-otterco-display text-[14px] mb-2" style={{color: 'rgb(36, 36, 36)'}}>
              Finance Tracker
            </h3>
            <p className="font-otterco-light text-[11px] leading-relaxed mb-3" style={{color: 'rgb(42, 42, 42)'}}>
              Personal finance management with insights.
            </p>
            <div className="flex gap-1 mb-3">
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>Python</span>
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>Django</span>
            </div>
            <button className="font-otterco text-[11px] underline" style={{color: 'rgb(36, 36, 36)'}}>
              View →
            </button>
          </div>

          {/* Project 8 */}
          <div className="border border-border rounded-[12px] p-4 bg-white">
            <div className="w-full h-24 bg-[#f6f5f4] rounded-[6px] mb-3 flex items-center justify-center">
              <Image src="/icon-sample/Coding-Script.svg" alt="Project" width={24} height={24} className="w-6 h-6" />
            </div>
            <h3 className="font-otterco-display text-[14px] mb-2" style={{color: 'rgb(36, 36, 36)'}}>
              API Gateway
            </h3>
            <p className="font-otterco-light text-[11px] leading-relaxed mb-3" style={{color: 'rgb(42, 42, 42)'}}>
              Microservices architecture with routing.
            </p>
            <div className="flex gap-1 mb-3">
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>Express</span>
              <span className="px-2 py-1 bg-[#f6f5f4] border border-border rounded-[8px] font-otterco text-[9px]" style={{color: 'rgb(36, 36, 36)'}}>Docker</span>
            </div>
            <button className="font-otterco text-[11px] underline" style={{color: 'rgb(36, 36, 36)'}}>
              View →
            </button>
          </div>
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