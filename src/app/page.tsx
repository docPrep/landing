"use client";

import { Sparkles } from "lucide-react";

export default function Home() {
  const REDIRECT_URL = "https://www.docprep.in/auth"; //uri

  const handleButtonClick = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-8 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse delay-100"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-red-300 rounded-full opacity-20 animate-pulse delay-200"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 md:w-16 md:h-16 bg-orange-400 rounded-full opacity-20 animate-pulse delay-300"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-2 sm:px-4">
        {/* Diwali decoration */}
        <div className="flex justify-center mb-6 sm:mb-8 gap-2 sm:gap-4">
          <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-orange-500 animate-pulse" />
          <div className="text-4xl sm:text-6xl animate-bounce">🪔</div>
          <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-500 animate-pulse" />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-yellow-600 bg-clip-text text-transparent animate-fade-in leading-tight">
          The Wait is Over!
        </h1>

        {/* Diwali message */}
        <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-orange-800 animate-slide-up">
            This Diwali, Have a Great Diwali! 🎆
          </p>
          <p className="text-base sm:text-lg md:text-2xl text-gray-700 animate-slide-up delay-200">
            Your journey to NEET PG success starts now
          </p>
        </div>

        {/* DocPrep branding */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-600 mb-2 sm:mb-4 animate-slide-up delay-300">
            DocPrep
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 animate-slide-up delay-400">
            10,000+ Questions • Expert Solutions • Your Path to Excellence
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleButtonClick}
          className="group relative inline-flex items-center justify-center px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-full shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 animate-slide-up delay-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></span>
          <span className="relative flex items-center gap-2 sm:gap-3">
            🚀 We Are Live Now
          </span>
        </button>

        {/* Decorative sparkles */}
        <div className="mt-8 sm:mt-12 flex justify-center gap-4 sm:gap-8 text-2xl sm:text-4xl">
          <span className="animate-pulse">✨</span>
          <span className="animate-pulse delay-100">🎉</span>
          <span className="animate-pulse delay-200">🎊</span>
          <span className="animate-pulse delay-300">✨</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
}
