"use client"

import { Trophy, Smartphone, TrendingUp, Star, Zap, Award, CheckCircle2, BookOpen, Users, Rocket, Sparkles } from "lucide-react" 
import { useEffect, useRef, useState } from "react"
import { AnimatedGridBackground } from "./animated-grid-background"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function WhyDocPrep() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const plugin = useRef(
    Autoplay({ 
      delay: 3000, 
      stopOnInteraction: false,
    })
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const topFeatures = [
    {
      icon: Trophy,
      title: "Legacy of Excellence",
      description: "Built on the success of Trackprep.com (#1 NEET UG Practice Platform)",
    },
    {
      icon: Smartphone,
      title: "Anytime, Anywhere",
      description: "Available on Android, iOS, and Web",
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description: "In-depth analytics to identify strengths and weaknesses",
    },
  ]




  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white via-[#F5F5FF] to-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <AnimatedGridBackground />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#3D3D8F]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FF6B4A]/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#3D3D8F] to-[#5B5BC7] bg-clip-text text-transparent text-balance px-4">Why DocPrep?</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#FF6B4A] font-semibold max-w-3xl mx-auto text-pretty px-4">
          Designed to empower medical students to ace NEET PG
          </p>
        </div>

        

        <div className={`relative px-4 sm:px-8 md:px-12 mb-8 sm:mb-12 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-7xl mx-auto cursor-grab active:cursor-grabbing"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
              watchDrag: true,
            }}
          >
            <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
              {[...topFeatures, ...topFeatures].map((feature, index) => {
                const Icon = feature.icon
                const colors = index % 2 === 0 ? 'from-[#FF6B4A] to-[#FF8566]' : 'from-[#3D3D8F] to-[#5B5BC7]'
                const borderColor = index % 2 === 0 ? '#FF6B4A' : '#3D3D8F'
                return (
                  <CarouselItem key={index} className="pl-1 sm:pl-2 md:pl-4 basis-[90%] xs:basis-[85%] sm:basis-1/2 lg:basis-1/3 select-none">
                    <article
                      role="listitem"
                      className="group relative rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#3D3D8F]/30 hover:-translate-y-2 overflow-hidden pointer-events-auto h-full"
                    >
                      {/* Animated Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                      
                      {/* Glowing Orb */}
                      <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${colors} opacity-10 rounded-full blur-2xl transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16 group-hover:scale-150 transition-transform duration-500 pointer-events-none`}></div>
                      
                      {/* Floating Icon Badge */}
                      <div className="relative mb-4 sm:mb-5 pointer-events-none">
                        <div className={`absolute -inset-2 bg-gradient-to-br ${colors} rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-pulse`}></div>
                        <div className={`relative inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${colors} text-white shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`} aria-hidden="true">
                          <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                        </div>
                      </div>
                      
                      <h3 className={`relative mb-2 sm:mb-3 text-lg sm:text-xl font-bold bg-gradient-to-r ${colors} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 pointer-events-none line-clamp-2`}>
                        {feature.title}
                      </h3>
                      <p className="relative text-xs sm:text-sm text-gray-600 leading-relaxed pointer-events-none line-clamp-3 sm:line-clamp-none">{feature.description}</p>
                      
                      {/* Decorative Corner Elements */}
                      <div className={`absolute top-2 sm:top-3 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 rounded-tr-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} style={{ borderColor }}></div>
                      <div className={`absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 rounded-bl-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} style={{ borderColor }}></div>
                      
                      {/* Bottom Accent Line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 pointer-events-none`}></div>
                    </article>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Coming Soon Section */}
        <div className={`relative text-center py-20 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Animated Background Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-[#3D3D8F]/20 via-[#FF6B4A]/20 to-[#5B5BC7]/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          {/* Floating Sparkles */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2">
            <Sparkles className="w-6 h-6 text-[#3D3D8F] animate-bounce opacity-40" style={{ animationDelay: '0s', animationDuration: '2s' }} />
          </div>
          <div className="absolute top-1/3 right-1/3">
            <Sparkles className="w-8 h-8 text-[#FF6B4A] animate-bounce opacity-50" style={{ animationDelay: '0.3s', animationDuration: '2.5s' }} />
          </div>
          <div className="absolute bottom-1/3 right-1/4">
            <Sparkles className="w-5 h-5 text-[#5B5BC7] animate-bounce opacity-30" style={{ animationDelay: '0.6s', animationDuration: '2.2s' }} />
          </div>
          <div className="absolute top-1/4 left-1/3">
            <Star className="w-6 h-6 text-[#FF8566] animate-pulse opacity-40" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="absolute bottom-1/4 left-1/4">
            <Star className="w-7 h-7 text-[#3D3D8F] animate-pulse opacity-35" style={{ animationDelay: '0.8s' }} />
          </div>
          
          {/* Main Content */}
          <div className="relative">
            {/* Glowing Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3D3D8F]/10 to-[#FF6B4A]/10 border-2 border-[#3D3D8F]/20 px-6 py-2 rounded-full mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-pulse"></div>
              <span className="text-sm font-bold bg-gradient-to-r from-[#3D3D8F] to-[#5B5BC7] bg-clip-text text-transparent">
                SOMETHING EXCITING
              </span>
            </div>
            
            {/* Main Heading with Animation */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 relative">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#3D3D8F] via-[#5B5BC7] to-[#3D3D8F] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Coming
                </span>
                {/* Animated Underline */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3D3D8F] to-transparent opacity-50"></div>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-[#FF6B4A] via-[#FF8566] to-[#FF6B4A] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]" style={{ animationDelay: '0.5s' }}>
                  Soon
                </span>
                {/* Animated Underline */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B4A] to-transparent opacity-50"></div>
              </span>
            </h2>
            
            {/* Subtitle with Dots Animation */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <span className="text-lg sm:text-xl text-gray-600 font-medium">Get Ready</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[#3D3D8F] animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-[#5B5BC7] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            
            {/* Decorative Line Elements */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-[#3D3D8F] rounded"></div>
              <Rocket className="w-6 h-6 text-[#FF6B4A] animate-pulse" />
              <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-[#FF6B4A] rounded"></div>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  )
}
