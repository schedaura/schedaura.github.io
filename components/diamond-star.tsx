interface DiamondStarProps {
  size?: number
  className?: string
}

export function DiamondStar({ size = 24, className = "" }: DiamondStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main diamond shape */}
      <path d="M12 2L18 12L12 22L6 12L12 2Z" fill="currentColor" fillOpacity="0.9" />
      {/* Inner diamond for depth */}
      <path d="M12 6L15 12L12 18L9 12L12 6Z" fill="currentColor" fillOpacity="0.6" />
      {/* Center sparkle point */}
      <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="1" />

      {/* Four-pointed star rays extending from diamond */}
      <path d="M12 1L12.5 6L12 2L11.5 6L12 1Z" fill="currentColor" fillOpacity="0.8" />
      <path d="M23 12L18 11.5L22 12L18 12.5L23 12Z" fill="currentColor" fillOpacity="0.8" />
      <path d="M12 23L11.5 18L12 22L12.5 18L12 23Z" fill="currentColor" fillOpacity="0.8" />
      <path d="M1 12L6 12.5L2 12L6 11.5L1 12Z" fill="currentColor" fillOpacity="0.8" />
    </svg>
  )
}
