import React from 'react'
import Image from 'next/image'

const CompanyLogos = () => {
  const logos = [
    '9kIk1y3XOCY94YnLwCDU3SSHL0I.svg',
    'FeK7mQ25Aj92hjXNE7801ccv4.svg',
    'Pjlzorsbp4GK4U9nqYaPWgkPs.svg',
    'S7Wn9R0XUGbZP76whfsn435N8o.svg',
    'XFWQcHTyPCmpljR7ttDhwueN9k.svg',
    'nPT3My9mYZPzyjp42aeGQACk4p4.svg'
  ]

  return (
    <section className="h-[360px] md:h-[480px] bg-white border-b border-border -mt-[150px] md:-mt-[200px] rounded-b-[80px] md:rounded-b-[120px] flex items-end overflow-hidden relative z-10">
      <div className="w-full h-[210px] md:h-[280px] flex items-center justify-center">
      <div className="flex animate-scroll">
          {/* Multiple sets for smooth infinite scroll */}
          {[...Array(4)].map((_, setIndex) => (
            logos.map((logo, index) => (
              <div key={`set-${setIndex}-${index}`} className="shrink-0 mx-10">
                <Image
                  src={`/company-logo/${logo}`}
                  alt={`Company logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyLogos