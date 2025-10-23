import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <section id="contact" className="bg-white border-t border-border rounded-t-[80px] md:rounded-t-[120px] min-h-[500px] md:h-[680px] relative z-10 flex flex-col items-center justify-center py-12 md:py-0">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center px-4 md:px-0">
          {/* Icon Circle */}
          <div className="flex justify-center mb-4 md:mb-5 mt-8 md:mt-16">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center border border-border" style={{background: 'linear-gradient(180deg, #f6f5f4 0%, rgba(246, 245, 244, 0) 100%)'}}>
              <Image src="/icon-sample/hi-five.svg" alt="Handshake" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>

          <h2
            className="font-otterco-display font-semibold text-[32px] md:text-[56px] leading-[40px] md:leading-[64px] text-center bg-clip-text text-transparent mb-8 md:mb-10"
            style={{
              backgroundImage: 'linear-gradient(97.1265deg, rgb(12, 12, 12) 0%, rgba(12, 12, 12, 0.55) 100%)'
            }}
          >
            Tell me about your next<br />project
          </h2>

          {/* Contact Buttons */}
          <div className="flex flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-20">
            <div className="bg-primary rounded-[50px] p-0.5 md:p-1 border border-border">
              <a href="mailto:shohanurrahmandev@gmail.com" className="px-8 py-4 rounded-[50px] bg-white font-otterco-display font-medium text-secondary text-[14px] flex items-center gap-2 hover:bg-gray-50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Email me
              </a>
            </div>
            <div className="bg-primary rounded-[50px] p-0.5 md:p-1 border border-border">
              <a href="https://wa.me/8801740486802" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-[50px] font-otterco-display font-medium text-white text-[14px] hover:opacity-90 transition-opacity block" style={{backgroundColor: 'rgb(36, 36, 36)'}}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Outside of centered container */}
      <div className="w-full pb-4 md:pb-16 px-6 md:px-0">
        {/* Divider */}
        <div className="w-[90%] md:w-[84%] h-[1px] mx-auto mb-6 md:mb-8" style={{backgroundColor: '#ecebea'}}></div>

        {/* Footer Content */}
        <div className="w-[90%] md:w-[84%] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-0">
          <p className="font-otterco text-secondary text-[12px] md:text-[14px] text-center md:text-left">© 2024 All rights reserved.</p>
          <nav className="flex items-center gap-[6px] md:gap-[10px] flex-wrap justify-center">
            <span className="font-otterco text-secondary text-[11px] md:text-[14px]">Home</span>
            <span className="font-otterco text-secondary text-[11px] md:text-[14px]">/</span>
            <span className="font-otterco text-secondary text-[11px] md:text-[14px] hidden sm:inline">Services</span>
            <span className="font-otterco text-secondary text-[11px] md:text-[14px] hidden sm:inline">/</span>
            <span className="font-otterco text-secondary text-[11px] md:text-[14px]">About</span>
            <span className="font-otterco text-secondary text-[11px] md:text-[14px]">/</span>
            <span className="font-otterco text-secondary text-[11px] md:text-[14px] hidden sm:inline">Portfolio</span>
            <span className="font-otterco text-secondary text-[11px] md:text-[14px] hidden sm:inline">/</span>
            <span className="font-otterco text-secondary text-[11px] md:text-[14px] hidden sm:inline">Process</span>
            <span className="font-otterco text-secondary text-[11px] md:text-[14px] hidden sm:inline">/</span>
            <span className="font-otterco text-secondary text-[11px] md:text-[14px]">Contact</span>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Contact