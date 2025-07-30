export function GalaxyBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient - more moody */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950" />

      {/* Diamond stars only - scattered across the background */}
      <div className="absolute inset-0">
        {/* Large diamond stars */}
        <div className="absolute top-20 left-20">
          <svg width="12" height="12" viewBox="0 0 24 24" className="text-purple-400/60 animate-pulse">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        <div className="absolute top-40 right-32">
          <svg width="8" height="8" viewBox="0 0 24 24" className="text-indigo-400/70 animate-pulse delay-1000">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        <div className="absolute top-60 left-1/3">
          <svg width="10" height="10" viewBox="0 0 24 24" className="text-blue-400/50 animate-pulse delay-2000">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        <div className="absolute bottom-40 right-20">
          <svg width="14" height="14" viewBox="0 0 24 24" className="text-purple-300/40 animate-pulse delay-3000">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        <div className="absolute bottom-60 left-1/4">
          <svg width="6" height="6" viewBox="0 0 24 24" className="text-indigo-300/60 animate-pulse delay-500">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        {/* Medium diamond stars */}
        <div className="absolute top-32 right-1/4">
          <svg width="8" height="8" viewBox="0 0 24 24" className="text-slate-300/40 animate-pulse delay-1500">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        <div className="absolute top-80 left-1/2">
          <svg width="6" height="6" viewBox="0 0 24 24" className="text-purple-200/50 animate-pulse delay-2500">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        <div className="absolute bottom-32 right-1/3">
          <svg width="10" height="10" viewBox="0 0 24 24" className="text-indigo-200/30 animate-pulse delay-4000">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        {/* Small diamond stars */}
        <div className="absolute top-16 left-1/2">
          <svg width="4" height="4" viewBox="0 0 24 24" className="text-slate-400/30">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        <div className="absolute top-72 right-16">
          <svg width="5" height="5" viewBox="0 0 24 24" className="text-purple-400/20">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        <div className="absolute bottom-20 left-16">
          <svg width="6" height="6" viewBox="0 0 24 24" className="text-indigo-300/25">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        <div className="absolute bottom-80 right-1/2">
          <svg width="4" height="4" viewBox="0 0 24 24" className="text-blue-300/35">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        {/* Additional scattered diamond stars for more mystical feel */}
        <div className="absolute top-1/3 left-20">
          <svg width="3" height="3" viewBox="0 0 24 24" className="text-slate-300/20">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>

        <div className="absolute top-2/3 right-24">
          <svg width="7" height="7" viewBox="0 0 24 24" className="text-purple-300/30 animate-pulse delay-6000">
            <path
              d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>
      </div>

      {/* Darker, moodier nebula effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/4 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/3 rounded-full blur-3xl" />

      {/* Additional moody atmosphere layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30" />
    </div>
  )
}
