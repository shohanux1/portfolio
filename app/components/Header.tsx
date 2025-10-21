import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="absolute top-10 left-0 right-0 h-14 flex items-center justify-center z-30">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          {/* Desktop: Email + Copy + CV */}
          <div className="hidden md:flex items-center gap-[10px]">
            <div className="bg-primary rounded-[50px] border border-border flex items-center gap-[10px]" style={{padding: '2px', paddingLeft: '16px'}}>
              <span className="font-otterco text-secondary text-[12px]">shohanurrahmandev@gmail.com</span>
              <button className="px-6 py-2 rounded-[50px] bg-white font-otterco-display font-medium text-secondary text-[14px]">
                Copy
              </button>
            </div>
            <div className="bg-primary rounded-[50px] border border-border" style={{padding: '2px'}}>
              <button className="px-6 py-2 rounded-[50px] bg-white font-otterco-display font-medium text-secondary text-[14px]">
                CV
              </button>
            </div>
          </div>

          {/* Mobile: Email + CV buttons only */}
          <div className="flex md:hidden items-center gap-[10px]">
            <div className="bg-primary rounded-[50px] border border-border" style={{padding: '2px'}}>
              <button className="px-6 py-2 rounded-[50px] font-otterco-display font-medium text-white text-[14px]" style={{backgroundColor: 'rgb(36, 36, 36)'}}>
                Email
              </button>
            </div>
            <div className="bg-primary rounded-[50px] border border-border" style={{padding: '2px'}}>
              <button className="px-6 py-2 rounded-[50px] bg-white font-otterco-display font-medium text-secondary text-[14px]">
                CV
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[10px]">
          <Link href="#hero" className="font-otterco text-secondary text-[14px]">Home</Link>
          <span className="font-otterco text-secondary text-[14px]">/</span>
          <Link href="#services" className="font-otterco text-secondary text-[14px]">Services</Link>
          <span className="font-otterco text-secondary text-[14px]">/</span>
          <Link href="#about" className="font-otterco text-secondary text-[14px]">About</Link>
          <span className="font-otterco text-secondary text-[14px]">/</span>
          <Link href="#portfolio" className="font-otterco text-secondary text-[14px]">Portfolio</Link>
          <span className="font-otterco text-secondary text-[14px]">/</span>
          <Link href="#contact" className="font-otterco text-secondary text-[14px]">Contact</Link>
        </nav>

        {/* Mobile Social Icons */}
        <div className="flex md:hidden items-center gap-2">
          <div className="bg-primary rounded-full border border-border" style={{padding: '2px'}}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <FaGithub className="w-4 h-4" style={{color: 'rgb(36, 36, 36)'}} />
            </a>
          </div>
          <div className="bg-primary rounded-full border border-border" style={{padding: '2px'}}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <FaLinkedin className="w-4 h-4" style={{color: 'rgb(36, 36, 36)'}} />
            </a>
          </div>
          <div className="bg-primary rounded-full border border-border" style={{padding: '2px'}}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <FaInstagram className="w-4 h-4" style={{color: 'rgb(36, 36, 36)'}} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header