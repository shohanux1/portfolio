'use client'

import React, { use } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projectsData } from '../../data/projectsData'
import MobileAppGallery from '../../components/MobileAppGallery'
import { Tag, SectionHeader, Card, FeatureCard, BulletPoint, HighlightCard } from '../../components/ui/SharedUIComponents'

interface ProjectDetailProps {
  params: Promise<{
    id: string
  }>
}

const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const { id } = use(params)
  const project = projectsData[id as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="w-[90%] md:w-[84%] mx-auto py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Link href="/#portfolio" className="font-otterco-display text-[18px] md:text-[20px]" style={{color: 'rgb(36, 36, 36)'}}>
              ← Back to Portfolio
            </Link>
            <div className="flex items-center gap-4">
              <a
                href={project.liveUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="font-otterco text-[14px] px-4 py-2 border border-border rounded-2 hover:bg-[#f6f5f4] transition-colors"
                style={{color: 'rgb(36, 36, 36)'}}
              >
                View Live →
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8 md:py-12">
        <div className="w-[90%] md:w-[84%] mx-auto">

          {/* Project Header */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Tag>{project.category}</Tag>
              <Tag>{project.year}</Tag>
            </div>

            <h1
              className="font-otterco-display font-medium text-[32px] md:text-[48px] leading-tight bg-clip-text text-transparent mb-4 md:mb-6"
              style={{
                backgroundImage: 'linear-gradient(97.1265deg, rgb(12, 12, 12) 0%, rgba(12, 12, 12, 0.55) 100%)'
              }}
            >
              {project.title}
            </h1>

            <p className="font-otterco-light text-[16px] md:text-[18px] leading-relaxed max-w-3xl mb-6" style={{color: 'rgb(42, 42, 42)'}}>
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Tag key={index}>{tech}</Tag>
              ))}
            </div>
          </div>

          {/* Live Preview or Screenshots */}
          {project.isMobileApp && project.screenshots ? (
            <MobileAppGallery
              screenshots={project.screenshots}
              appTitle={project.title}
              appStoreLinks={project.appStoreLinks}
            />
          ) : project.liveUrl ? (
            <div className="mb-8 md:mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-otterco-display text-[20px] md:text-[24px]" style={{color: 'rgb(36, 36, 36)'}}>
                  Live Preview
                </h2>
                <a
                  href={project.liveUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-otterco text-[14px] underline hover:no-underline transition-all"
                  style={{color: 'rgb(36, 36, 36)'}}
                >
                  Open in new tab →
                </a>
              </div>

              <div className="border border-border rounded-xl overflow-hidden bg-white">
                <div className="bg-[#f6f5f4] px-4 py-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="font-otterco text-[12px]" style={{color: 'rgb(42, 42, 42)'}}>
                        {project.liveUrl || 'Live Preview'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <iframe
                    src={project.liveUrl || ''}
                    className="w-full h-[400px] md:h-[600px]"
                    title={`${project.title} Live Preview`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              </div>
            </div>
          ) : null}

          {/* Project Overview */}
          <div className="mb-8 md:mb-12">
            <SectionHeader>Project Overview</SectionHeader>
            <p className="font-otterco-light text-[16px] leading-relaxed mb-8" style={{color: 'rgb(42, 42, 42)'}}>
              {project.longDescription}
            </p>

            <h4 className="font-otterco-display text-[18px] mb-4" style={{color: 'rgb(36, 36, 36)'}}>
              Key Challenges & Solutions
            </h4>
            <p className="font-otterco-light text-[14px] leading-relaxed" style={{color: 'rgb(42, 42, 42)'}}>
              {project.challenges}
            </p>
          </div>

          {/* Technology Stack */}
          {project.techStack && (
            <div className="mb-8 md:mb-12">
              <SectionHeader>Technology Stack</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(project.techStack).map(([category, techs]) => (
                  <Card key={category} title={category}>
                    <ul className="space-y-2">
                      {techs.map((tech, index) => (
                        <li key={index} className="font-otterco-light text-[12px]" style={{color: 'rgb(42, 42, 42)'}}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Key Features by Category */}
          {project.keyFeatures && (
            <div className="mb-8 md:mb-12">
              <SectionHeader>Key Features</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(project.keyFeatures).map(([category, features]) => (
                  <FeatureCard key={category} title={category}>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index}>
                          <BulletPoint size="md" spacing="loose">{feature}</BulletPoint>
                        </li>
                      ))}
                    </ul>
                  </FeatureCard>
                ))}
              </div>
            </div>
          )}

          {/* Technical Highlights */}
          {project.technicalHighlights && (
            <div className="mb-8 md:mb-12">
              <SectionHeader>Technical Highlights</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.technicalHighlights.map((highlight, index) => (
                  <HighlightCard key={index}>{highlight}</HighlightCard>
                ))}
              </div>
            </div>
          )}

          {/* All Features List */}
          <div className="mb-8 md:mb-12">
            <SectionHeader>Complete Feature Set</SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.features.map((feature, index) => (
                <div key={index} className="p-3 border border-border rounded-2 bg-white">
                  <BulletPoint>{feature}</BulletPoint>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-8 md:py-12 border-t border-border">
            <SectionHeader className="mb-4">Interested in Similar Work?</SectionHeader>
            <p className="font-otterco-light text-[14px] mb-6 max-w-2xl mx-auto" style={{color: 'rgb(42, 42, 42)'}}>
              I&apos;d love to help you build something amazing. Let&apos;s discuss your project and create something that exceeds your expectations.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/#contact"
                className="font-otterco text-[14px] px-6 py-3 border border-border rounded-2 hover:bg-[#f6f5f4] transition-colors"
                style={{color: 'rgb(36, 36, 36)'}}
              >
                Start a Project
              </Link>
              <Link
                href="/#portfolio"
                className="font-otterco text-[14px] underline hover:no-underline transition-all"
                style={{color: 'rgb(36, 36, 36)'}}
              >
                View More Projects
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default ProjectDetail