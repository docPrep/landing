"use client"

import { TestTube2, LayoutGrid, BookOpen, FileText, GraduationCap, Brain, Target, TrendingUp, Users, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Marquee } from "@/components/ui/marquee"

export function PowerfulFeatures() {
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

  const features = [
    {
      icon: TestTube2,
      title: "Practice Real Exam Questions",
      description: "7000+ topic-wise PYQs with high-yield focus to maximize accuracy and retention.",
    },
    {
      icon: LayoutGrid,
      title: "Create Custom Tests",
      description: "Build your own mini or full-length tests by topic, subject, or chapter.",
    },
    
    {
      icon: FileText,
      title: "Test Series",
      description: "Experience full-length Grand Test Series designed to simulate the real INICET and NEET PG exams.",
    },
  ]

  const marqueeItems = [
    { icon: GraduationCap, text: "Expert Faculty", subtext: "Top Educators", color: "from-[#3D3D8F] to-[#5B5BC7]" },
    { icon: Brain, text: "AI-Powered", subtext: "Smart Learning", color: "from-[#FF6B4A] to-[#FF8566]" },
    { icon: Target, text: "100% Accuracy", subtext: "Verified Content", color: "from-[#3D3D8F] to-[#5B5BC7]" },
    { icon: TrendingUp, text: "Track Progress", subtext: "Detailed Analytics", color: "from-[#FF6B4A] to-[#FF8566]" },
    { icon: Users, text: "50K+ Students", subtext: "Join Community", color: "from-[#3D3D8F] to-[#5B5BC7]" },
    { icon: Clock, text: "24/7 Access", subtext: "Study Anytime", color: "from-[#FF6B4A] to-[#FF8566]" },
  ]

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white via-[#F5F5FF] to-white py-20 sm:py-28 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B4A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3D3D8F]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#3D3D8F] to-[#5B5BC7] bg-clip-text text-transparent text-balance">
            Master NEET PG with Powerful Tools
          </h2>
          <p className="text-lg sm:text-xl text-[#FF6B4A] font-semibold max-w-3xl mx-auto text-pretty">
            Smart tools built to help medical students excel
          </p>
        </div>

        {/* Marquee Section */}
       

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Marquee pauseOnHover className="[--duration:40s]">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <article
                  key={index}
                  role="listitem"
                  className="group relative rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#3D3D8F]/30 hover:-translate-y-2 overflow-hidden mx-4 w-[320px] flex-shrink-0"
                >
                  {/* Glowing Orb */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3D3D8F]/10 to-[#FF6B4A]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className={`relative mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${index % 2 === 0 ? 'from-[#3D3D8F] to-[#5B5BC7]' : 'from-[#FF6B4A] to-[#FF8566]'} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`} aria-hidden="true">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="relative mb-3 text-lg font-bold text-gray-900">{feature.title}</h3>
                  <p className="relative text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-[#3D3D8F] to-[#5B5BC7]' : 'from-[#FF6B4A] to-[#FF8566]'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </article>
              )
            })}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
