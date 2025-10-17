"use client"
import Image from "next/image"
import { AnimatedBackground } from "./ui/animated-background"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const target = new Date(now)
      const currentDay = now.getDate()
      if (currentDay > 20) {
        target.setMonth(target.getMonth() + 1)
      }
      target.setDate(20)
      target.setHours(0, 0, 0, 0)
      const targetDate = target

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
    <section className="relative min-h-screen h-auto overflow-hidden bg-gradient-to-br from-[#2e3192] via-[#3D3D8F] to-[#2e3192]">
      <AnimatedBackground />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 h-80 w-80 rounded-full bg-[#FF6B4A]/30 blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 left-20 h-80 w-80 rounded-full bg-orange-500/30 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/4 right-1/3 h-64 w-64 rounded-full bg-yellow-400/30 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 h-72 w-72 rounded-full bg-[#FF6B4A]/30 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {/* Top row - 3 Diyas with even spacing */}
        <div className="absolute top-16 left-1/4 -translate-x-1/2 animate-float md:block hidden" style={{ animationDelay: "0s" }}>
          <div className="relative group cursor-pointer pointer-events-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 via-yellow-500/40 to-orange-500/40 blur-xl rounded-full scale-150 group-hover:scale-[2.2] transition-transform duration-500" />
            <Image
              src="/diya.png"
              alt="Ornate Diya lamp"
              width={80}
              height={80}
              className="relative drop-shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
            />
          </div>
        </div>

       

        <div className="absolute top-16 left-3/4 -translate-x-1/2 animate-float  md:block hidden" style={{ animationDelay: "1s" }}>
          <div className="relative group cursor-pointer pointer-events-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/40 via-yellow-500/40 to-orange-400/40 blur-xl rounded-full scale-150 group-hover:scale-[2.2] transition-transform duration-500" />
            <Image
              src="/diya.png"
              alt="Ornate Diya lamp"
              width={80}
              height={80}
              className="relative drop-shadow-2xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500"
            />
          </div>
        </div>

   
        <div className="absolute top-1/2 -translate-y-1/2 left-12 animate-float  md:block hidden" style={{ animationDelay: "1.5s" }}>
          <div className="relative group cursor-pointer pointer-events-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/40 via-orange-500/40 to-yellow-400/40 blur-xl rounded-full scale-150 group-hover:scale-[2.2] transition-transform duration-500" />
            <Image
              src="/diya.png"
              alt="Ornate Diya lamp"
              width={90}
              height={90}
              className="relative drop-shadow-2xl group-hover:scale-125 group-hover:-rotate-6 transition-all duration-500"
            />
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-12 animate-float  md:block hidden" style={{ animationDelay: "2s" }}>
          <div className="relative group cursor-pointer pointer-events-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 via-yellow-400/40 to-orange-500/40 blur-xl rounded-full scale-150 group-hover:scale-[2.2] transition-transform duration-500" />
            <Image
              src="/diya.png"
              alt="Ornate Diya lamp"
              width={90}
              height={90}
              className="relative drop-shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
            />
          </div>
        </div>

      
  
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-4">
        <div className="flex justify-center mb-8 animate-slide-up">
          <div className="flex items-center rounded-xl w-auto mt-4 bg-white/10 backdrop-blur-sm px-6 py-3 shadow-2xl">
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
          <div className="space-y-6 sm:space-y-8 text-center">
          <div className="space-y-4 sm:space-y-6 animate-slide-up-large animate-delay-100 text-center px-4">
  <h1 className="font-sans text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl break-words">
    <span className="block">🪔 Festive Launch 🪔</span>
    <span className="block text-xl sm:text-2xl md:text-3xl text-orange-200 mt-2">
      Website goes live on the{" "}
    </span>
    <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent animate-pulse font-extrabold drop-shadow-2xl mt-2">
      20th
    </span>
  </h1>
  <p className="text-sm sm:text-sm md:text-lg font-bold text-orange-300 leading-relaxed drop-shadow-lg text-center">
  ✨ Celebrate with Diya lights 
  <br className="block md:hidden" /> 
  and be the first to explore ✨
</p>
</div>


            <div className="flex justify-center gap-4 sm:gap-6 animate-slide-up animate-delay-150">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-2xl border border-orange-400/30 hover:scale-110 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-300 drop-shadow-lg">
                    {item.value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm text-white/80 mt-1 font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-8 sm:gap-12 md:gap-16 my-10 animate-slide-up animate-delay-175">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative group animate-float cursor-pointer"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/50 via-yellow-500/50 to-orange-500/50 blur-2xl rounded-full scale-150 group-hover:scale-[3.5] transition-transform duration-700" />
                  <Image
                    src="/diya.png"
                    alt="Ornate Diya lamp"
                    width={85}
                    height={85}
                    className="relative drop-shadow-2xl group-hover:scale-150 group-hover:rotate-[360deg] transition-all duration-700 cursor-pointer"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center animate-slide-up animate-delay-200">
              {["MBBS Curriculum", "FMGE", "NEET PG", "NEET SS", "PG Residency"].map((category) => (
                <button
                  key={category}
                  className="rounded-full border-2 border-orange-400/50 px-3 py-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur-sm hover:bg-white hover:text-[#3D3D8F] hover:border-white hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

    
    </section>
  )
}
