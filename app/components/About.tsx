import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-white border-t border-border rounded-t-[80px] md:rounded-t-[120px] border-b border-border rounded-b-[80px] md:rounded-b-[120px] relative z-10 flex flex-col items-center justify-center py-12 md:py-20">
      <div className="w-[90%] md:w-[84%] mx-auto flex flex-col items-center">

        {/* Experience Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2 px-6 py-3 border border-border rounded-[50px] bg-white">
            <span className="font-otterco text-[12px]" style={{color: 'rgb(36, 36, 36)'}}>✦ 3+ YEARS OF ✦</span>
            <span className="font-otterco-display font-medium text-[12px]" style={{color: 'rgb(36, 36, 36)'}}>WORK EXPERIENCE</span>
          </div>
        </div>

        {/* Heading */}
        <h2
          className="font-otterco-display font-medium text-[28px] md:text-[36px] leading-tight bg-clip-text text-transparent text-center mb-12 md:mb-16 px-4 md:px-0"
          style={{
            backgroundImage: 'linear-gradient(97.1265deg, rgb(12, 12, 12) 0%, rgba(12, 12, 12, 0.55) 100%)'
          }}
        >
          About
        </h2>

        {/* Main Content Section */}
        <div className="w-full max-w-5xl mb-12 md:mb-16 px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column - About Me */}
            <div>
              <h3 className="font-otterco-display text-[16px] md:text-[18px] mb-4 md:mb-6" style={{color: 'rgb(36, 36, 36)'}}>
                More about me
              </h3>
              <p className="font-otterco-light text-[14px] leading-relaxed mb-6" style={{color: 'rgb(42, 42, 42)'}}>
                I&apos;m Shohanur Rahman, a professional fullstack web developer with more than 3 years of experience. I&apos;m passionate about creating modern web and mobile applications that deliver exceptional user experiences and solve real-world problems.
              </p>
              <p className="font-otterco-light text-[14px] leading-relaxed mb-6" style={{color: 'rgb(42, 42, 42)'}}>
                As a fullstack developer, I&apos;m capable of building anything in web development - from responsive frontend interfaces to robust backend systems. My expertise extends to mobile development with React Native, where I&apos;ve built many successful projects across different platforms.
              </p>
              <p className="font-otterco-light text-[14px] leading-relaxed" style={{color: 'rgb(42, 42, 42)'}}>
                With a proven track record of delivering scalable solutions, I specialize in modern JavaScript frameworks, full-stack architectures, and cross-platform mobile applications. My commitment to quality code and innovative solutions drives every project I undertake.
              </p>
            </div>

            {/* Right Column - Experience Timeline */}
            <div>
              <h3 className="font-otterco-display text-[16px] md:text-[18px] mb-4 md:mb-6" style={{color: 'rgb(36, 36, 36)'}}>
                My experiences
              </h3>

              <div className="space-y-4 md:space-y-6">
                {/* Experience 1 - BAJIKAR */}
                <div className="border-l-2 border-border pl-4">
                  <div className="font-otterco text-[12px] mb-1" style={{color: 'rgb(42, 42, 42)'}}>
                    JAN 2024 - DEC 2024
                  </div>
                  <h4 className="font-otterco-display text-[14px] mb-2" style={{color: 'rgb(36, 36, 36)'}}>
                    Frontend Developer - BAJIKAR Casino Platform
                  </h4>
                  <p className="font-otterco-light text-[12px] leading-relaxed" style={{color: 'rgb(42, 42, 42)'}}>
                    Built enterprise-grade online casino platform with 6,300+ games, live dealer rooms, and cryptocurrency integration using Next.js 15 and React 19.
                  </p>
                </div>

                {/* Experience 2 - TrueHub */}
                <div className="border-l-2 border-border pl-4">
                  <div className="font-otterco text-[12px] mb-1" style={{color: 'rgb(42, 42, 42)'}}>
                    MAR 2022 - NOV 2024
                  </div>
                  <h4 className="font-otterco-display text-[14px] mb-2" style={{color: 'rgb(36, 36, 36)'}}>
                    Full Stack Developer - TrueHub Investment Platform
                  </h4>
                  <p className="font-otterco-light text-[12px] leading-relaxed" style={{color: 'rgb(42, 42, 42)'}}>
                    Developed comprehensive cryptocurrency investment platform with real-time analytics, multi-language support, and advanced trading features.
                  </p>
                </div>

                {/* Experience 3 - RoofSilo */}
                <div className="border-l-2 border-border pl-4">
                  <div className="font-otterco text-[12px] mb-1" style={{color: 'rgb(42, 42, 42)'}}>
                    JUN 2023 - MAR 2024
                  </div>
                  <h4 className="font-otterco-display text-[14px] mb-2" style={{color: 'rgb(36, 36, 36)'}}>
                    Mobile Application Developer - RoofSilo Mobile CRM
                  </h4>
                  <p className="font-otterco-light text-[12px] leading-relaxed" style={{color: 'rgb(42, 42, 42)'}}>
                    Created cross-platform mobile CRM application for roofing contractors with lead management, photo documentation, and offline capabilities.
                  </p>
                </div>

                {/* Experience 4 - Early Career */}
                <div className="border-l-2 border-border pl-4">
                  <div className="font-otterco text-[12px] mb-1" style={{color: 'rgb(42, 42, 42)'}}>
                    AUG 2021 - MAY 2023
                  </div>
                  <h4 className="font-otterco-display text-[14px] mb-2" style={{color: 'rgb(36, 36, 36)'}}>
                    Full Stack Developer - SwiftPOS System
                  </h4>
                  <p className="font-otterco-light text-[12px] leading-relaxed" style={{color: 'rgb(42, 42, 42)'}}>
                    Built comprehensive Point of Sale system with real-time inventory management, barcode scanning, and multi-terminal synchronization using React Native and PostgreSQL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Single Call to Action */}
        <div className="text-center">
          <p className="font-otterco-light text-[14px] mb-6" style={{color: 'rgb(42, 42, 42)'}}>
            Ready to work together? Let&apos;s create something amazing.
          </p>
          <a href="/Shohanur Rahman - Full Stack Web Developer.pdf" target="_blank" rel="noopener noreferrer" className="font-otterco text-[14px] underline hover:no-underline transition-all inline-block" style={{color: 'rgb(36, 36, 36)'}}>
            Download my resume →
          </a>
        </div>

      </div>
    </section>
  )
}

export default About