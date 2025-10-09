"use client"

import { Trophy, Smartphone, TrendingUp, Star, Zap, Award, CheckCircle2, BookOpen, Users, Rocket, Sparkles, Bell } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { AnimatedGridBackground } from "./animated-grid-background"
import { Marquee } from "@/components/ui/marquee"

export function WhyDocPrep() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const stats = [
    {
      number: "10000+",
      title: "Questions to Practice",
      description: "Categorized and explained",
      gradient: "from-[#3D3D8F] to-[#5B5BC7]",
    },
    {
      number: "24/7",
      title: "Access",
      description: "Study anytime, anywhere",
      gradient: "from-orange-500  to-orange-300",
    },
    {
      number: "125+",
      title: "Repeated Questions",
      description: "In NEET PG exams",
      gradient: "from-[#3D3D8F] to-[#2563EB]",
    },
  ]

  const marqueeHighlights = [
    { icon: Star, text: "Top Ranked Platform", subtext: "#1 Choice", color: "from-[#3D3D8F] to-[#5B5BC7]" },
    { icon: Award, text: "Certified Content", subtext: "Expert Verified", color: "from-[#FF6B4A] to-[#FF8566]" },
    { icon: Zap, text: "Fast Results", subtext: "Instant Feedback", color: "from-[#3D3D8F] to-[#5B5BC7]" },
    { icon: CheckCircle2, text: "100% Updated", subtext: "Latest Syllabus", color: "from-[#FF6B4A] to-[#FF8566]" },
    { icon: BookOpen, text: "Rich Library", subtext: "Vast Resources", color: "from-[#3D3D8F] to-[#5B5BC7]" },
    { icon: Users, text: "Active Community", subtext: "Learn Together", color: "from-[#FF6B4A] to-[#FF8566]" },
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

        

        <div className={`mb-8 sm:mb-12 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Marquee pauseOnHover className="[--duration:35s]" reverse>
            {topFeatures.map((feature, index) => {
              const Icon = feature.icon
              const colors = index === 1 ? 'from-[#FF6B4A] to-[#FF8566]' : 'from-[#3D3D8F] to-[#5B5BC7]'
              return (
                <article
                  key={index}
                  role="listitem"
                  className="group relative rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#3D3D8F]/30 hover:-translate-y-2 overflow-hidden mx-4 w-[340px] flex-shrink-0"
                >
                  {/* Animated Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Glowing Orb */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors} opacity-10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>
                  
                  {/* Floating Icon Badge */}
                  <div className="relative mb-5">
                    <div className={`absolute -inset-2 bg-gradient-to-br ${colors} rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-pulse`}></div>
                    <div className={`relative inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${colors} text-white shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`} aria-hidden="true">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  
                  <h3 className={`relative mb-3 text-xl font-bold bg-gradient-to-r ${colors} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {feature.title}
                  </h3>
                  <p className="relative text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  {/* Decorative Corner Elements */}
                  <div className={`absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 rounded-tr-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300`} style={{ borderColor: index === 1 ? '#FF6B4A' : '#3D3D8F' }}></div>
                  <div className={`absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 rounded-bl-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300`} style={{ borderColor: index === 1 ? '#FF6B4A' : '#3D3D8F' }}></div>
                  
                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </article>
              )
            })}
          </Marquee>
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
