import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <section id="services" className="flex flex-col items-center justify-center py-12 md:py-20 -z-10" >
      <div className="max-w-6xl w-full px-3 md:px-6">
        <div className="text-center">
          <h2
            className="font-otterco-display font-medium text-[28px] md:text-[36px] leading-tight bg-clip-text text-transparent w-full md:w-[615px] mx-auto mb-12 md:mb-20 px-4 md:px-0"
            style={{
              backgroundImage: 'linear-gradient(96.0843deg, rgb(12, 12, 12) 0%, rgba(12, 12, 12, 0.55) 100%)',
              lineHeight: '44px'
            }}
          >
            Collaborate with brands and agencies to create impactful results.
          </h2>
          <div className="relative mb-20">
            <div className="w-full max-w-[972px] h-[1px] mx-auto" style={{backgroundColor: '#ecebea'}}></div>
            <button
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[125px] h-12 bg-white border border-border rounded-[60px] px-12 py-6 flex items-center justify-center gap-3 -rotate-12"
              style={{boxShadow: '0 20px 10px #ecebea66'}}
            >
              <span className="font-otterco-display font-medium text-[12px]" style={{color: 'rgb(36, 36, 36)'}}>Service</span>
            </button>
          </div>

          {/* Services Grid - 4 Columns Desktop, 2x2 Mobile */}
          <div className="w-full md:w-[84%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-20 px-3 md:px-0">
            {/* Column 1 */}
            <div className="flex flex-col items-start">
              <Image src="/icon/Coding-Script.svg" alt="UX & UI" width={36} height={36} className="w-9 h-9 mb-5" />
              <div className="w-full md:w-[183px] text-left">
                <h3 className="font-otterco text-[18px] mb-4" style={{color: 'rgb(36, 36, 36)'}}>
                  UX & UI
                </h3>
                <p className="font-otterco-light text-[14px]" style={{color: 'rgb(42, 42, 42)'}}>
                  Designing interfaces that are intuitive, efficient, and enjoyable to use.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-start">
              <Image src="/icon/Screen-share.svg" alt="Web Development" width={36} height={36} className="w-9 h-9 mb-5" />
              <div className="w-full md:w-[183px] text-left">
                <h3 className="font-otterco text-[18px] mb-4" style={{color: 'rgb(36, 36, 36)'}}>
                  Web Development
                </h3>
                <p className="font-otterco-light text-[14px]" style={{color: 'rgb(42, 42, 42)'}}>
                  Building responsive and scalable web applications with modern technologies.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-start">
              <Image src="/icon/Analytics.svg" alt="Frontend Development" width={36} height={36} className="w-9 h-9 mb-5" />
              <div className="w-full md:w-[183px] text-left">
                <h3 className="font-otterco text-[18px] mb-4" style={{color: 'rgb(36, 36, 36)'}}>
                  Frontend Development
                </h3>
                <p className="font-otterco-light text-[14px]" style={{color: 'rgb(42, 42, 42)'}}>
                  Creating engaging user experiences with React, Next.js, and modern frameworks.
                </p>
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-start">
              <Image src="/icon/data-server.svg" alt="Backend Development" width={36} height={36} className="w-9 h-9 mb-5" />
              <div className="w-full md:w-[183px] text-left">
                <h3 className="font-otterco text-[18px] mb-4" style={{color: 'rgb(36, 36, 36)'}}>
                  Backend Development
                </h3>
                <p className="font-otterco-light text-[14px]" style={{color: 'rgb(42, 42, 42)'}}>
                  Developing robust server-side applications and API integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services