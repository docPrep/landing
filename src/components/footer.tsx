import { Twitter, Linkedin, Instagram } from "lucide-react"
import { AnimatedBeamsBackground } from "./animated-beams-background"

export function Footer() {
  return (
    <footer className="relative bg-[#3D3D8F] text-white py-8 sm:py-10 overflow-hidden">
      <AnimatedBeamsBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Heading */}
          <h3 className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium text-center px-4">Follow us for more updates</h3>

          {/* Social Media Icons */}
          <div className="flex items-center gap-8 sm:gap-12">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF6B35] transition-colors duration-300 hover:scale-110 transform"
              aria-label="Twitter"
            >
              <Twitter className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF6B35] transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF6B35] transition-colors duration-300 hover:scale-110 transform"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-sm md:text-base mt-2 sm:mt-4">© 2025 - DocPrep</p>
        </div>
      </div>
    </footer>
  )
}
