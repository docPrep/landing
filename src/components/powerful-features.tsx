"use client"

import { TestTube2, LayoutGrid, BookOpen, FileText } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
      icon: BookOpen,
      title: "Access Concise & Focused Notes",
      description: "Expert handwritten notes with clear visuals and clinical insights.",
    },
    {
      icon: FileText,
      title: "Test Series",
      description: "Experience full-length Grand Test Series designed to simulate the real INICET and NEET PG exams.",
    },
  ]

  return (
    <section ref={sectionRef} className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            Master NEET PG with Our Powerful Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Tools designed specifically for medical students to excel in their exams
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-4" role="list">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const delay = (index + 1) * 150
            return (
              <article
                key={index}
                role="listitem"
                className={`group rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 hover:-translate-y-2 text-center lg:text-left ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 mx-auto lg:mx-0" aria-hidden="true">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
