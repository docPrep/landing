import { Twitter, Linkedin, Instagram } from "lucide-react"
import { AnimatedBeamsBackground } from "./animated-beams-background"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#3D3D8F] via-[#2E2E7A] to-[#1F1F5C] text-white py-12 sm:py-16 overflow-hidden">
      <AnimatedBeamsBackground />
      
      {/* Additional decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Heading */}
          <h3 className="text-lg sm:text-xl md:text-2xl text-white/90 font-semibold text-center px-4">Follow us for more updates</h3>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6 sm:gap-8">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-orange-600 hover:border-orange-400 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-orange-600 hover:border-orange-400 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-orange-600 hover:border-orange-400 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-sm md:text-base mt-2 sm:mt-4">© 2025 - DocPrep</p>
        </div>
      </div>
    </footer>
  )
}
