'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionHeader, MobileTag, MobileCard, MobileBulletPoint } from './ui/SharedUIComponents'

// Local components specific to MobileAppGallery
const AppStoreButton = ({
  href,
  type,
  children
}: {
  href: string;
  type: 'ios' | 'android';
  children: React.ReactNode
}) => {
  const bgColor = type === 'ios' ? 'bg-black hover:bg-gray-800' : 'bg-green-600 hover:bg-green-700'

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-otterco text-[10px] sm:text-[12px] px-2 sm:px-3 py-2 text-white rounded-md transition-colors ${bgColor}`}
    >
      {children}
    </Link>
  )
}

const TechItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="font-otterco text-[10px] sm:text-[11px] block mb-1" style={{color: 'rgb(42, 42, 42)'}}>
      {label}
    </span>
    <span className="font-otterco-light text-[10px] sm:text-[11px]" style={{color: 'rgb(42, 42, 42)'}}>
      {value}
    </span>
  </div>
)

const MetricCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="font-otterco-display text-[22px] sm:text-[28px] md:text-[32px] mb-1 sm:mb-2" style={{color: 'rgb(36, 36, 36)'}}>
      {value}
    </div>
    <div className="font-otterco text-[11px] sm:text-[13px]" style={{color: 'rgb(42, 42, 42)'}}>
      {label}
    </div>
  </div>
)

interface MobileAppGalleryProps {
  screenshots: string[]
  appTitle: string
  appStoreLinks?: {
    ios?: string | null
    android?: string | null
  }
}

const MobileAppGallery = ({ screenshots, appTitle, appStoreLinks }: MobileAppGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="mb-8 md:mb-12">
      <div className="flex items-center justify-between mb-6">
        <SectionHeader className="mb-0">Mobile App Preview</SectionHeader>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {appStoreLinks?.ios && (
            <AppStoreButton href={appStoreLinks.ios} type="ios">
              Download on App Store
            </AppStoreButton>
          )}
          {appStoreLinks?.android && (
            <AppStoreButton href={appStoreLinks.android} type="android">
              Get it on Google Play
            </AppStoreButton>
          )}
          <span className="font-otterco text-[10px] sm:text-[12px] px-2 sm:px-3 py-2 border border-border rounded-md" style={{color: 'rgb(42, 42, 42)'}}>
            Cross-Platform Mobile App
          </span>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

        {/* Left Column - App Information */}
        <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">

          {/* App Overview */}
          <MobileCard title="📱 Mobile CRM Application">
            <p className="font-otterco-light text-[13px] sm:text-[14px] leading-relaxed mb-3 sm:mb-4" style={{color: 'rgb(42, 42, 42)'}}>
              Cross-platform React Native application for iOS and Android, enabling roofing contractors to manage their business operations on-the-go with real-time synchronization.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <MobileTag>React Native</MobileTag>
              <MobileTag>Expo SDK</MobileTag>
              <MobileTag>TypeScript</MobileTag>
              <MobileTag>Zustand</MobileTag>
            </div>
          </MobileCard>

          {/* Key Capabilities */}
          <MobileCard title="🚀 Key Capabilities">
            <ul className="space-y-2.5 sm:space-y-3">
              <MobileBulletPoint>
                Complete CRM with lead management and pipeline tracking
              </MobileBulletPoint>
              <MobileBulletPoint>
                Real-time messaging across SMS, email, and social platforms
              </MobileBulletPoint>
              <MobileBulletPoint>
                Integrated calendar with Google Calendar synchronization
              </MobileBulletPoint>
              <MobileBulletPoint>
                Offline capability with seamless data synchronization
              </MobileBulletPoint>
              <MobileBulletPoint>
                Location-based services with address autocomplete
              </MobileBulletPoint>
            </ul>
          </MobileCard>

          {/* Technical Stack */}
          <MobileCard title="⚡ Technical Excellence">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-[11px] sm:text-[12px]">
              <TechItem label="Frontend" value="React Native + Expo" />
              <TechItem label="Backend" value="Convex Serverless" />
              <TechItem label="Auth" value="Clerk Authentication" />
              <TechItem label="Payments" value="Stripe React Native" />
            </div>
          </MobileCard>

        </div>

        {/* Right Column - Screenshot Display */}
        <div className="relative order-1 lg:order-2">
          <div className="border border-border rounded-xl overflow-hidden bg-white p-3 sm:p-4 flex items-center justify-center">
            <div className="relative max-w-60 sm:max-w-[280px] mx-auto">
              {/* Mobile Frame */}
              <div className="relative">
                <div className="bg-black rounded-6 sm:rounded-[28px] p-1.5 sm:p-2">
                  <div className="bg-white rounded-[20px] sm:rounded-6 overflow-hidden">
                    <Image
                      src={screenshots[selectedImage]}
                      alt={`${appTitle} Screenshot ${selectedImage + 1}`}
                      width={220}
                      height={480}
                      className="w-full h-auto"
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : screenshots.length - 1)}
              className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-border rounded-full flex items-center justify-center hover:bg-[#f6f5f4] transition-colors shadow-md text-sm sm:text-base"
              style={{color: 'rgb(36, 36, 36)'}}
            >
              ←
            </button>

            <button
              onClick={() => setSelectedImage(selectedImage < screenshots.length - 1 ? selectedImage + 1 : 0)}
              className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-border rounded-full flex items-center justify-center hover:bg-[#f6f5f4] transition-colors shadow-md text-sm sm:text-base"
              style={{color: 'rgb(36, 36, 36)'}}
            >
              →
            </button>
          </div>

          {/* Image counter and navigation dots */}
          <div className="flex items-center justify-center mt-3 gap-2 sm:gap-3">
            <span className="font-otterco text-[11px] sm:text-[12px]" style={{color: 'rgb(42, 42, 42)'}}>
              {selectedImage + 1} of {screenshots.length}
            </span>

            {/* Navigation dots */}
            <div className="flex gap-1">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                    selectedImage === index
                      ? 'bg-gray-800'
                      : 'bg-gray-300 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Full Width Development Metrics */}
      <div className="mt-6 sm:mt-8 border border-border rounded-xl p-4 sm:p-6 bg-[#f6f5f4]">
        <h4 className="font-otterco-display text-[16px] sm:text-[18px] mb-4 sm:mb-6 text-center" style={{color: 'rgb(36, 36, 36)'}}>
          📊 Development Metrics
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <MetricCard value="9" label="App Screens" />
          <MetricCard value="100%" label="TypeScript" />
          <MetricCard value="iOS + Android" label="Platforms" />
          <MetricCard value="EAS" label="Build Ready" />
        </div>
      </div>
    </div>
  )
}

export default MobileAppGallery