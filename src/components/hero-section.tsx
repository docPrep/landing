import { Button } from "@/components/ui/button"
import { ExternalLink, Star, PlayCircle, Sparkles } from "lucide-react"
import Image from "next/image"
import { AnimatedBackground } from "./ui/animated-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen h-auto overflow-hidden bg-gradient-to-br from-[#3D3D8F] via-[#2E2E7A] to-[#1F1F5C]">
      <AnimatedBackground />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="flex justify-center mb-8 animate-slide-up">
  <div className="flex items-center bg-white rounded-xl w-auto p-5 mb-4 shadow-xl">
    <Image 
      src="/logo.png" 
      alt="DocPrep Logo" 
      width={64} 
      height={64} 
      priority
      unoptimized
      className="h-16 w-32 object-contain"
    />
  </div>
</div>


        <div className="flex flex-col items-center justify-center mb-5">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center ">
            <div className="space-y-4 sm:space-y-6 animate-slide-up-large animate-delay-100">
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-balance">
                Ace NEET PG with India&apos;s Most Comprehensive Question Bank
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed text-pretty">
              Master 10,000+ high-yield questions with expert notes and explanations to secure your dream medical specialization.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center  animate-slide-up animate-delay-200">
              {["MBBS Curriculum", "FMGE", "NEET PG", "NEET SS", "PG Residency"].map((category) => (
                <button
                  key={category}
                  className="rounded-full border-2 border-white/40 bg-white/5 px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur-sm hover:bg-white hover:text-[#3D3D8F] hover:border-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Coming Soon Badge */}
            <div className="flex justify-center  animate-slide-up animate-delay-300">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-white to-gray-100 rounded-2xl leading-none flex items-center divide-x divide-gray-300 shadow-2xl">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500 animate-spin-slow" />
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3D3D8F] via-orange-500 to-[#3D3D8F] bg-clip-text text-transparent">
                      Coming Soon
                    </span>
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                  </div>
                </div>
              </div>
            </div>

           
          </div>

        
        </div>
      </div>

      {/* Wave Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
          <path
            d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 78.75C840 82.5 960 90 1080 93.75C1200 97.5 1320 97.5 1380 97.5L1440 97.5V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#E0F7FA"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  )
}
