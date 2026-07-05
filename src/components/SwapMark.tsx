interface SwapMarkProps {
  size?: number
  className?: string
}

export default function SwapMark({ size = 20, className = '' }: SwapMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 8L9 8L6 3.5L3 8Z" fill="currentColor" />
      <path d="M3 8L15 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M21 16L15 16L18 20.5L21 16Z" fill="currentColor" />
      <path d="M21 16L9 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}