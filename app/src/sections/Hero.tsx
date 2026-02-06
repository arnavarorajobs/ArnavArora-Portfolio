import { ChevronDown, Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToContent = () => {
    const element = document.getElementById('experience');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M10 10h30v30h-30z M50 50h30v30h-30z M10 70h20v20h-20z M70 10h20v20h-20z"
                  fill="none"
                  stroke="#e50914"
                  strokeWidth="1"
                />
                <circle cx="25" cy="25" r="3" fill="#e50914" />
                <circle cx="65" cy="65" r="3" fill="#e50914" />
                <circle cx="20" cy="80" r="3" fill="#e50914" />
                <circle cx="80" cy="20" r="3" fill="#e50914" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-4 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-[#e50914] text-white text-xs font-bold rounded">
              NEW
            </span>
            <span className="text-gray-300 text-sm">
              Mechatronics Engineer
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            Arnav
            <span className="text-[#e50914]"> Arora</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Firmware & Robotics Engineer
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-xl">
            Specializing in embedded systems, real-time operating systems, and robotic control. 
            Experienced in QNX RTOS, ROS2, and automated testing frameworks for safety-critical applications.
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <span className="text-green-400">●</span> Open to Opportunities
            </span>
            <span>•</span>
            <span>Embedded Systems</span>
            <span>•</span>
            <span>Robotics</span>
            <span>•</span>
            <span>Firmware</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={scrollToContent}
              className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold rounded flex items-center gap-2"
            >
              <Play className="w-5 h-5 fill-black" />
              View Experience
            </Button>
            <Button
              variant="outline"
              onClick={scrollToContent}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-6 text-lg font-semibold rounded flex items-center gap-2 backdrop-blur-sm"
            >
              <Info className="w-5 h-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414] to-transparent" />

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
