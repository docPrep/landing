"use client"

import { Trophy, Smartphone, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { AnimatedGridBackground } from "./animated-grid-background"

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
      description: "Built on the success of NEETprep.com (NEET UG)",
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

  return (
    <section ref={sectionRef} className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <AnimatedGridBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance px-4">Why DocPrep?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-pretty px-4">
            Our platform is designed specifically for medical students preparing for NEET PG
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-12" role="list">
          {topFeatures.map((feature, index) => {
            const Icon = feature.icon
            const delay = (index + 1) * 200
            return (
              <article
                key={index}
                role="listitem"
                className={`group rounded-xl sm:rounded-2xl bg-white p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#3D3D8F]/30 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-100 text-[#3D3D8F] group-hover:bg-[#3D3D8F] group-hover:text-white transition-all duration-300 group-hover:scale-110" aria-hidden="true">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </article>
            )
          })}
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Platform statistics">
          {stats.map((stat, index) => {
            const delay = (index + 4) * 200
            return (
              <article
                key={index}
                role="listitem"
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.gradient} p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                <div className="relative">
                  <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl font-bold text-white">{stat.number}</div>
                  <h3 className="mb-1 sm:mb-2 text-md sm:text-lg font-bold text-white">{stat.title}</h3>
                  <p className="text-sm text-white/90">{stat.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
