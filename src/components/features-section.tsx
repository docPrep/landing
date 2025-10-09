import { ImageIcon, List, MessageSquare, Plus, HelpCircle } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: ImageIcon,
      title: "Image-Based Questions (IBQs)",
      description: "Enhance visual diagnostic skills with real exam-style images.",
    },
    {
      icon: List,
      title: "One-Liners & Rapid Recall Pearls",
      description: "Revise key facts quickly for last-minute preparation.",
    },
    {
      icon: MessageSquare,
      title: "Assertion-Reason Questions",
      description: "Build logical connections and test deep conceptual understanding.",
    },
    {
      icon: Plus,
      title: "Clinical Vignettes & Case Scenarios",
      description: "Master patient-oriented problem solving and clinical reasoning.",
    },
    {
      icon: HelpCircle,
      title: "Integrated System-Based MCQs",
      description: "Learn through system-wise questions blending multiple subjects.",
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-white via-cyan-50/30 to-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 px-4">
            70,000+ High-Yield Clinical Questions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-600 px-4">
            Covering every format you&apos;ll face in the real exam
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-20 max-w-4xl lg:max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group relative rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-blue-50/30 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100/50 hover:border-blue-300 hover:-translate-y-2 hover:scale-105 overflow-hidden text-center lg:text-left ${
                  index >= 3 ? "sm:col-span-1 lg:col-start-2" : ""
                } ${index === 3 ? "lg:col-start-2" : ""}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto lg:mx-0">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="relative mb-2 sm:mb-3 text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="relative text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-3 sm:space-y-4 px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              The wait is almost over
            </span>
          </h3>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">
            Practice Smarter. Rank Higher.
          </p>
        </div>
      </div>
    </section>
  )
}
