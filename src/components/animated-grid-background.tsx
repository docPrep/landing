export function AnimatedGridBackground() {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated dot grid pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
  
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#3D3D8F] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#FF7F50] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
  
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>
    )
  }
  