import React from 'react'

// Shared UI Components used across multiple files

export const Tag = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span
    className={`px-3 py-1 bg-[#f6f5f4] border border-border rounded-2 font-otterco text-[12px] ${className}`}
    style={{color: 'rgb(36, 36, 36)'}}
  >
    {children}
  </span>
)

export const SectionHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`font-otterco-display text-[20px] md:text-[24px] mb-6 ${className}`} style={{color: 'rgb(36, 36, 36)'}}>
    {children}
  </h3>
)

export const Card = ({ title, children, className = '' }: { title?: string; children: React.ReactNode; className?: string }) => (
  <div className={`border border-border rounded-xl p-4 bg-white ${className}`}>
    {title && (
      <h4 className="font-otterco-display text-[14px] mb-3" style={{color: 'rgb(36, 36, 36)'}}>
        {title}
      </h4>
    )}
    {children}
  </div>
)

export const FeatureCard = ({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={`border border-border rounded-xl p-6 bg-white ${className}`}>
    <h4 className="font-otterco-display text-[16px] mb-4" style={{color: 'rgb(36, 36, 36)'}}>
      {title}
    </h4>
    {children}
  </div>
)

export const BulletPoint = ({ children, size = 'sm', spacing = 'normal' }: {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  spacing?: 'tight' | 'normal' | 'loose';
}) => {
  const dotSize = size === 'lg' ? 'w-2 h-2' : size === 'md' ? 'w-1.5 h-1.5' : 'w-1.5 h-1.5'
  const textSize = size === 'lg' ? 'text-[14px]' : size === 'md' ? 'text-[14px]' : 'text-[13px]'
  const gap = spacing === 'loose' ? 'gap-3' : spacing === 'tight' ? 'gap-2' : 'gap-2'

  return (
    <div className={`flex items-start ${gap}`}>
      <div className={`${dotSize} rounded-full mt-2 shrink-0`} style={{backgroundColor: 'rgb(36, 36, 36)'}}></div>
      <span className={`font-otterco-light ${textSize} leading-relaxed`} style={{color: 'rgb(42, 42, 42)'}}>
        {children}
      </span>
    </div>
  )
}

export const HighlightCard = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 p-4 border border-border rounded-2 bg-[#f6f5f4]">
    <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{backgroundColor: 'rgb(36, 36, 36)'}}></div>
    <span className="font-otterco-light text-[14px] leading-relaxed" style={{color: 'rgb(42, 42, 42)'}}>
      {children}
    </span>
  </div>
)

// Mobile-specific components for MobileAppGallery
export const MobileTag = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span
    className={`px-2 sm:px-3 py-1 bg-[#f6f5f4] border border-border rounded-md sm:rounded-2 font-otterco text-[10px] sm:text-[11px] ${className}`}
    style={{color: 'rgb(36, 36, 36)'}}
  >
    {children}
  </span>
)

export const MobileCard = ({ title, children, className = '' }: { title?: string; children: React.ReactNode; className?: string }) => (
  <div className={`border border-border rounded-xl p-4 sm:p-6 bg-white ${className}`}>
    {title && (
      <h4 className="font-otterco-display text-[15px] sm:text-[16px] mb-3 sm:mb-4" style={{color: 'rgb(36, 36, 36)'}}>
        {title}
      </h4>
    )}
    {children}
  </div>
)

export const MobileBulletPoint = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2.5 sm:gap-3">
    <div className="w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 shrink-0" style={{backgroundColor: 'rgb(36, 36, 36)'}}></div>
    <span className="font-otterco-light text-[12px] sm:text-[13px] leading-relaxed" style={{color: 'rgb(42, 42, 42)'}}>
      {children}
    </span>
  </li>
)