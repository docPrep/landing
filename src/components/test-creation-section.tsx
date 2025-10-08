"use client"

import { BookOpen, Sparkles, Target, Layers, CheckCircle2 } from "lucide-react"

export function TestCreationSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-50 rounded-full mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
            <span className="text-xs sm:text-sm font-semibold text-indigo-900">Smart Test Creation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-950 mb-3 sm:mb-4 px-4">Create Tests Your Way</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Choose from flexible test creation options designed to match your study style and goals
          </p>
        </div>

        {/* Test Creation Options */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Chapter-Based Test */}
          <div className="group relative bg-gradient-to-br from-white to-indigo-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-100 hover:border-indigo-300 hover:-translate-y-2 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-100/50 to-transparent rounded-full blur-2xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500"></div>
            {/* Icon Badge */}
            <div className="absolute -top-4 sm:-top-6 left-6 sm:left-8 z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-950 mb-2 sm:mb-3">Chapter-Based Test</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Quick and focused practice on a single chapter. Perfect for targeted revision and concept mastery.
              </p>

              {/* Steps */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-indigo-700">1</span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Select your subject</p>
                    <p className="text-xs text-gray-500">Choose from available subjects</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-indigo-700">2</span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Pick one chapter</p>
                    <p className="text-xs text-gray-500">Focus on specific topics</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Start practicing</p>
                    <p className="text-xs text-gray-500">Auto-generated test ready instantly</p>
                  </div>
                </div>
              </div>

              {/* Use Case Badge */}
              <div className="bg-indigo-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-indigo-100">
                <p className="text-xs font-semibold text-indigo-700 mb-1">IDEAL FOR</p>
                <p className="text-xs sm:text-sm text-indigo-900">Chapter revision and concept evaluation</p>
              </div>
            </div>
          </div>

          {/* Custom Multi-Chapter Test */}
          <div className="group relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform -translate-x-20 translate-y-20 group-hover:scale-150 transition-transform duration-500"></div>
            {/* Icon Badge */}
            <div className="absolute -top-4 sm:-top-6 left-6 sm:left-8 z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>

            {/* Popular Badge */}
            <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 z-10">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-xl animate-pulse">
                POPULAR
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Custom Multi-Chapter Test</h3>
              <p className="text-sm sm:text-base text-indigo-100 mb-4 sm:mb-6 leading-relaxed">
                Full control over your practice. Create personalized tests spanning multiple chapters with custom
                difficulty.
              </p>

              {/* Steps */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white">Select your subject</p>
                    <p className="text-xs text-indigo-200">Choose your focus area</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white">Choose multiple chapters</p>
                    <p className="text-xs text-indigo-200">Mix and match topics</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white">Set question count</p>
                    <p className="text-xs text-indigo-200">Customize test length</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-white">4</span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white">Select difficulty level</p>
                    <p className="text-xs text-indigo-200">Easy, Medium, or Hard</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white">Generate custom test</p>
                    <p className="text-xs text-indigo-200">Tailored to your preferences</p>
                  </div>
                </div>
              </div>

              {/* Use Case Badge */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                <p className="text-xs font-semibold text-orange-300 mb-1">IDEAL FOR</p>
                <p className="text-xs sm:text-sm text-white">Comprehensive practice across multiple topics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 text-gray-600 px-4">
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            <span className="text-xs sm:text-sm font-medium">Both methods include instant feedback and detailed explanations</span>
          </div>
        </div>
      </div>
    </section>
  )
}
