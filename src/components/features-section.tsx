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
    <section className="relative bg-gradient-to-b from-white via-cyan-50/30 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
            70,000+ High-Yield Clinical Questions
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-yellow-600">
            Covering every format you&apos;ll face in the real exam
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 ${
                  index >= 3 ? "sm:col-span-1 lg:col-start-2" : ""
                } ${index === 3 ? "lg:col-start-2" : ""}`}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              The wait is almost over
            </span>
          </h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">
            Practice Smarter. Rank Higher.
          </p>
        </div>
      </div>
    </section>
  )
}
