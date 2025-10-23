'use client'

import React, { useState } from 'react'

interface CopyEmailButtonProps {
  email: string
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
  email,
  className = "",
  children,
  style
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setIsCopied(true)
      console.log('Email copied to clipboard')

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={className}
      style={style}
    >
      {isCopied ? 'Copied!' : children}
    </button>
  )
}

export default CopyEmailButton