"use client"

import { Timer } from "lucide-react"
import Image from "next/image"
import { AnimatedBackground } from "./ui/animated-background"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      // Set target date to October 17th, 2025 at midnight
      const targetDate = new Date('2025-10-17T00:00:00')
      
      const difference = targetDate.getTime() - now.getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen h-auto overflow-hidden bg-white">
      <AnimatedBackground />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-4">
        <div className="flex justify-center mb-8 animate-slide-up">
          <div className="flex items-center  rounded-xl w-auto mt-4">
            <Image
              src="/logo.png"
              alt="DocPrep Logo"
              width={200}
              height={200}
              priority
              unoptimized
              className="h-16 w-56 object-contain"
            />
          </div>
        </div>


        <div className="flex flex-col items-center justify-center mb-5">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center ">
            <div className="space-y-4 sm:space-y-6 animate-slide-up-large animate-delay-100">
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#2e3192] text-balance">
              <span className="whitespace-nowrap">Ace NEET PG with</span><br/><span className="whitespace-nowrap text-2xl sm:text-6xl">India’s #1 Question Bank</span>
              </h1>
              <p className="text-sm whitespace-nowrap font-bold sm:text-lg md:text-xl text-[#f15a29] leading-relaxed text-pretty">
              Practice with Purpose
              Perform with Precision
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center  animate-slide-up animate-delay-200">
              {["MBBS Curriculum", "FMGE", "NEET PG", "NEET SS", "PG Residency"].map((category) => (
                <button
                  key={category}
                  className="rounded-full border-2  px-3 py-2  bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur-sm hover:bg-white hover:text-[#3D3D8F] hover:border-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Coming Soon Badge */}
            <div className="flex flex-col items-center gap-6 animate-slide-up animate-delay-300 sm:mb-20">
              
              
              {/* Countdown Timer */}
              <div className="relative">
                {/* Decorative background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3D3D8F]/20 via-[#FF6B4A]/20 to-[#3D3D8F]/20 blur-2xl rounded-3xl" />
                
                <div className="relative flex flex-col items-center gap-3 sm:gap-4 mb-2 animate-slide-up animate-delay-400 ">
                  <div className="flex items-center gap-2 mb-4 bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg">
                    <Timer className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
                    <span className="text-sm text-white sm:text-base font-bold">Launching In</span>
                  </div>
                  
                  <div className="flex gap-2 sm:gap-3 md:gap-4">
                    {/* Days */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-[#3D3D8F] to-[#5B5BC7] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative flex flex-col items-center bg-white rounded-xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 shadow-xl">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-[#3D3D8F] to-[#5B5BC7] bg-clip-text text-transparent">
                          {String(timeLeft.days).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-sm text-[#3D3D8F] font-semibold uppercase tracking-wider mt-1">Days</span>
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="flex items-center">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6B4A] animate-pulse">:</span>
                    </div>

                    {/* Hours */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-[#3D3D8F] to-[#5B5BC7] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative flex flex-col items-center bg-white rounded-xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 shadow-xl">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-[#3D3D8F] to-[#5B5BC7] bg-clip-text text-transparent">
                          {String(timeLeft.hours).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-sm text-[#3D3D8F] font-semibold uppercase tracking-wider mt-1">Hours</span>
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="flex items-center">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6B4A] animate-pulse">:</span>
                    </div>

                    {/* Minutes */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-[#FF6B4A] to-[#FF8566] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative flex flex-col items-center bg-white rounded-xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 shadow-xl">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-[#FF6B4A] to-[#FF8566] bg-clip-text text-transparent">
                          {String(timeLeft.minutes).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-sm text-[#FF6B4A] font-semibold uppercase tracking-wider mt-1">Mins</span>
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="flex items-center">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D3D8F] animate-pulse">:</span>
                    </div>

                    {/* Seconds */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-[#FF6B4A] to-[#FF8566] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                      <div className="relative flex flex-col items-center bg-white rounded-xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 shadow-xl">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-[#FF6B4A] to-[#FF8566] bg-clip-text text-transparent">
                          {String(timeLeft.seconds).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-sm text-[#FF6B4A] font-semibold uppercase tracking-wider mt-1">Secs</span>
                      </div>
                    </div>
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
