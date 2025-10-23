import React from 'react'
import Link from 'next/link'

const ProjectNotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1
          className="font-otterco-display font-medium text-[48px] md:text-[64px] leading-tight bg-clip-text text-transparent mb-4"
          style={{
            backgroundImage: 'linear-gradient(97.1265deg, rgb(12, 12, 12) 0%, rgba(12, 12, 12, 0.55) 100%)'
          }}
        >
          404
        </h1>

        <h2 className="font-otterco-display text-[24px] md:text-[32px] mb-4" style={{color: 'rgb(36, 36, 36)'}}>
          Project Not Found
        </h2>

        <p className="font-otterco-light text-[16px] mb-8 max-w-md mx-auto" style={{color: 'rgb(42, 42, 42)'}}>
          The project you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/#portfolio"
            className="font-otterco text-[14px] px-6 py-3 border border-border rounded-[8px] hover:bg-[#f6f5f4] transition-colors"
            style={{color: 'rgb(36, 36, 36)'}}
          >
            View All Projects
          </Link>
          <Link
            href="/"
            className="font-otterco text-[14px] underline hover:no-underline transition-all"
            style={{color: 'rgb(36, 36, 36)'}}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectNotFound