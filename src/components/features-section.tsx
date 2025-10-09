import { ImageIcon, List, MessageSquare, Plus, HelpCircle, Star, Sparkles } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"

export function FeaturesSection() {
  const features = [
    {
      icon: ImageIcon,
      title: "Image-Based Questions (IBQs)",
      description: "Enhance visual diagnostic skills with real exam-style images.",
      color: "from-[#3D3D8F] to-[#5B5BC7]",
    },
    {
      icon: List,
      title: "One-Liners & Rapid Recall Pearls",
      description: "Revise key facts quickly for last-minute preparation.",
      color: "from-[#FF6B4A] to-[#FF8566]",
    },
    {
      icon: MessageSquare,
      title: "Assertion-Reason Questions",
      description: "Build logical connections and test deep conceptual understanding.",
      color: "from-[#3D3D8F] to-[#5B5BC7]",
    },
    {
      icon: Plus,
      title: "Clinical Vignettes & Case Scenarios",
      description: "Master patient-oriented problem solving and clinical reasoning.",
      color: "from-[#FF6B4A] to-[#FF8566]",
    },
    {
      icon: HelpCircle,
      title: "Integrated System-Based MCQs",
      description: "Learn through system-wise questions blending multiple subjects.",
      color: "from-[#3D3D8F] to-[#5B5BC7]",
    },
  ]

  const stats = [
    { label: "Clinical Questions", value: "70,000+", icon: Sparkles },
    { label: "Success Rate", value: "95%", icon: Star },
    { label: "Active Students", value: "50,000+", icon: Sparkles },
    { label: "Question Formats", value: "5+", icon: Star },
  ]

  return (
    <section className="relative bg-gradient-to-b from-white via-[#F5F5FF] to-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3D3D8F]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B4A]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3D3D8F]/10 to-[#FF6B4A]/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-[#FF6B4A] animate-pulse" />
            <span className="text-sm font-semibold text-[#3D3D8F]">Premium Question Bank</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3D3D8F] to-[#5B5BC7] px-4">
            70,000+ High-Yield Clinical Questions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#FF6B4A] font-semibold px-4">
            Covering every format you&apos;ll face in the real exam
          </p>
        </div>

        {/* Animated Stats Marquee */}
        <div className="mb-12 sm:mb-16">
          <Marquee pauseOnHover className="[--duration:30s]">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="relative group mx-4"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3D3D8F] to-[#FF6B4A] rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3D3D8F] to-[#5B5BC7] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#3D3D8F] to-[#5B5BC7] bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Marquee>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-20 max-w-4xl lg:max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group relative rounded-2xl bg-white p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#3D3D8F]/30 hover:-translate-y-2 overflow-hidden text-center lg:text-left ${
                  index >= 3 ? "sm:col-span-1 lg:col-start-2" : ""
                } ${index === 3 ? "lg:col-start-2" : ""}`}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Glowing Orb */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>
                
                {/* Icon Badge */}
                <div className={`relative mb-4 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto lg:mx-0`}>
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                
                <h3 className={`relative mb-2 sm:mb-3 text-base sm:text-lg font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:${feature.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {feature.title}
                </h3>
                <p className="relative text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA with Animated Background */}
        <div className="relative text-center space-y-3 sm:space-y-4 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D3D8F]/5 via-[#FF6B4A]/5 to-[#3D3D8F]/5 blur-3xl rounded-3xl"></div>
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-[#3D3D8F] to-[#5B5BC7] bg-clip-text text-transparent">
                The wait is almost over
              </span>
            </h3>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B4A] to-[#FF8566]">
              Practice Smarter. Rank Higher. ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
