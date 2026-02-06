import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Briefcase, MapPin, Calendar } from 'lucide-react';
import type { Experience } from '@/types';

interface ExperienceRowProps {
  experiences: Experience[];
  onSelectExperience: (experience: Experience) => void;
}

export function ExperienceRow({ experiences, onSelectExperience }: ExperienceRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <section id="experience" className="px-4 md:px-12 py-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
        Work Experience
      </h2>

      <div className="relative group">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-40 w-16 bg-gradient-to-r from-[#141414] to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-10 h-10 text-white" />
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 z-40 w-16 bg-gradient-to-l from-[#141414] to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-10 h-10 text-white" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          onScroll={checkScrollPosition}
          className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
        >
          {experiences.map((experience) => (
            <button
              key={experience.id}
              onClick={() => onSelectExperience(experience)}
              className="experience-card flex-shrink-0 w-[300px] md:w-[350px] bg-[#1f1f1f] rounded-lg overflow-hidden text-left group/card relative"
            >
              {/* Card Header with Company Color */}
              <div
                className="h-2 w-full"
                style={{ backgroundColor: experience.color }}
              />

              <div className="p-5">
                {/* Company Logo Placeholder */}
                <div className="w-14 h-14 rounded-lg bg-[#2a2a2a] flex items-center justify-center mb-4 group-hover/card:bg-[#e50914] transition-colors">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>

                {/* Company Name */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover/card:text-[#e50914] transition-colors">
                  {experience.company}
                </h3>

                {/* Role */}
                <p className="text-sm text-gray-300 mb-3">{experience.role}</p>

                {/* Meta Info */}
                <div className="flex flex-col gap-1 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {experience.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {experience.location}
                  </span>
                </div>

                {/* Short Description */}
                <p className="text-sm text-gray-400 mt-3 line-clamp-2">
                  {experience.description}
                </p>

                {/* Tech Preview */}
                <div className="flex flex-wrap gap-1 mt-4">
                  {experience.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#2a2a2a] text-xs text-gray-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {experience.technologies.length > 3 && (
                    <span className="px-2 py-0.5 bg-[#2a2a2a] text-xs text-gray-400 rounded">
                      +{experience.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-[#e50914] text-white text-sm font-semibold rounded">
                    Click to Expand
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
