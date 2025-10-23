import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="hero" className="h-[660px] md:h-[742px] flex items-center justify-center border-b border-border rounded-b-[80px] md:rounded-b-[120px] relative z-20 overflow-hidden"  style={{backgroundColor: '#f6f5f4'}}>
      {/* Noise Effect */}
      <div className="noise-bg-hero" />
      <div className="max-w-6xl w-full px-6 flex flex-col items-center justify-center gap-[10px] mt-30 md:mt-10 relative z-10">
        <div className="relative">
          <div className="w-[128px] h-[128px] rounded-full flex items-center justify-center overflow-hidden relative z-10" style={{background: 'linear-gradient(rgb(255, 255, 254) 0%, rgba(255, 255, 254, 0) 100%)'}}>
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={120}
              height={120}
              className="w-[120px] h-[120px] object-cover rounded-full grayscale"
            />
          </div>

          {/* Service Button */}
          <button
            className="absolute -right-16 top-8 w-[100px] h-10 bg-white border border-border rounded-[50px] px-8 py-4 flex items-center justify-center gap-2 -rotate-12 animate-bounce z-20"
            style={{boxShadow: '0 20px 10px #ecebea66'}}
          >
            <span className="font-otterco-display font-medium text-[10px] whitespace-nowrap" style={{color: 'rgb(36, 36, 36)'}}>shohan 👋🏼</span>
          </button>
        </div>
        <div className="w-full max-w-[650px] text-center mb-[30px] px-4 md:px-0 relative z-10">
          <h1
            className="font-otterco-display font-medium text-[36px] leading-[44px] md:text-[56px] bg-clip-text text-transparent md:leading-tight"
            style={{
              backgroundImage: 'linear-gradient(97.0286deg, rgb(11, 11, 11) 0%, rgba(12, 12, 12, 0.55) 100%)'
            }}
          >
            Building scalable<br />
            full-stack applications<br />
            and mobile experiences.
          </h1>
        </div>
        <a href="#portfolio" className="w-[180px] h-[60px] text-white rounded-[50px] font-otterco-display font-medium text-[14px] relative z-10 flex items-center justify-center hover:opacity-90 transition-opacity" style={{backgroundColor: 'rgb(36, 36, 36)'}}>
          Latest work
        </a>
      </div>
    </section>
  )
}

export default Hero