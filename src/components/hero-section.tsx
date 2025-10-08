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

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex justify-center mb-8 animate-slide-up">
          <div className="inline-flex items-center bg-white rounded-full p-4 shadow-lg">
            <Image src="/logo.png" alt="DocPrep Logo" width={48} height={48} className="h-10 w-auto" />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6 animate-slide-up-large animate-delay-100">
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-balance">
                Ace NEET PG with India&apos;s Most Comprehensive Question Bank
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed text-pretty">
                Unlock your dream medical specialization with <span className="font-bold">DocPrep&apos;s</span> unmatched
                question bank! Master 10,000+ high-yield questions with expert explanations and concise notes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 animate-slide-up animate-delay-200">
              {["MBBS Curriculum", "FMGE", "NEET PG", "NEET SS", "PG Residency"].map((category) => (
                <button
                  key={category}
                  className="rounded-full border-2 border-white/40 bg-white/5 px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur-sm hover:bg-white hover:text-[#3D3D8F] hover:border-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-slide-up animate-delay-300">
              <Button size="lg" className="bg-gradient-to-r from-white to-gray-100 text-[#3D3D8F] hover:from-white hover:to-white hover:shadow-2xl hover:scale-105 font-semibold shadow-xl text-sm sm:text-base w-full sm:w-auto transition-all duration-300">
                <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Practice Questions Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/40 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-white hover:from-orange-500 hover:to-yellow-500 hover:border-orange-400 hover:shadow-xl hover:scale-105 backdrop-blur-sm font-semibold text-sm sm:text-base w-full sm:w-auto transition-all duration-300"
              >
                <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/40 bg-white/10 text-white hover:bg-white hover:text-[#3D3D8F] hover:border-white hover:shadow-xl hover:scale-105 backdrop-blur-sm font-semibold text-sm sm:text-base w-full sm:w-auto transition-all duration-300"
              >
                <PlayCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8">
              <div className="group rounded-lg sm:rounded-xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/30 p-3 sm:p-4 text-center shadow-lg hover:shadow-2xl hover:scale-105 hover:from-white/20 hover:to-white/10 transition-all duration-300 animate-slide-up animate-delay-400">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:scale-110 transition-transform">10K+</div>
                <div className="text-xs sm:text-sm md:text-base text-white/80">Questions</div>
              </div>
              <div className="group rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/10 backdrop-blur-md border border-yellow-400/30 p-3 sm:p-4 text-center shadow-lg hover:shadow-2xl hover:scale-105 hover:from-yellow-500/30 hover:to-orange-500/20 transition-all duration-300 animate-slide-up animate-delay-500">
                <div className="flex items-center justify-center gap-0.5 sm:gap-1 text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:scale-110 transition-transform">
                  4.8
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400 animate-pulse" />
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/90">Rating</div>
              </div>
              <div className="group rounded-lg sm:rounded-xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/30 p-3 sm:p-4 text-center shadow-lg hover:shadow-2xl hover:scale-105 hover:from-white/20 hover:to-white/10 transition-all duration-300 animate-slide-up animate-delay-600">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:scale-110 transition-transform">50K+</div>
                <div className="text-xs sm:text-sm md:text-base text-white/80">Students</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards & Phone Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative h-[600px]">
              {/* Floating Review Card 1 */}
              <div className="absolute top-0 right-20 w-80 animate-float-slow animate-slide-up animate-delay-400">
                <div className="rounded-2xl bg-white p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Best NEET PG App!</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    DocPrep&apos;s question bank is incredible! The explanations are clear and concise. I&apos;ve improved my
                    accuracy significantly. Highly recommend for serious NEET PG aspirants!
                  </p>
                </div>
              </div>

              {/* Floating Review Card 2 */}
              <div className="absolute top-48 right-0 w-80 animate-float-delayed animate-slide-up animate-delay-500">
                <div className="rounded-2xl bg-white p-6 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Dr. Priya Sharma</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    The custom test feature is a game-changer! I can focus on my weak areas and track my progress.
                    DocPrep helped me crack NEET PG with a great rank. Thank you!
                  </p>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-float animate-slide-up animate-delay-300">
                <div className="relative h-[500px] w-[260px]">
                  {/* Phone Frame */}
                  <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-teal-400 to-teal-600 p-3 shadow-2xl">
                    <div className="h-full w-full rounded-[2.5rem] bg-white overflow-hidden">
                      {/* Phone Screen Content */}
                      <div className="h-full flex flex-col">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-4 py-6 text-white">
                          <div className="text-xs font-semibold mb-1">NEET PG Preparation</div>
                          <div className="text-lg font-bold">10,000+ Questions</div>
                        </div>

                        {/* Question Card */}
                        <div className="flex-1 p-4 bg-gray-50">
                          <div className="bg-white rounded-xl p-4 shadow-sm h-full">
                            <div className="text-xs text-gray-500 mb-3">Question 1/20</div>
                            <p className="text-xs text-gray-800 mb-4 leading-relaxed">
                              Most helpful novel mantle cell lymphoma marker in Cyclin D1 absence:
                            </p>

                            {/* Options */}
                            <div className="space-y-2">
                              <div className="border-2 border-teal-500 rounded-lg px-3 py-2 text-xs bg-teal-50">
                                A. SOX11
                              </div>
                              <div className="border border-gray-200 rounded-lg px-3 py-2 text-xs">B. Annexin V</div>
                              <div className="border border-gray-200 rounded-lg px-3 py-2 text-xs">C. MYD88</div>
                              <div className="border border-gray-200 rounded-lg px-3 py-2 text-xs">D. ITRA 1</div>
                            </div>

                            {/* Navigation */}
                            <div className="flex justify-between mt-6">
                              <button className="text-xs text-gray-500 px-3 py-1.5 border border-gray-300 rounded-lg">
                                Previous
                              </button>
                              <button className="text-xs text-white px-4 py-1.5 bg-blue-600 rounded-lg font-semibold">
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
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
