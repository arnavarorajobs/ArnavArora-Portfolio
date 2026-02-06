import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectsRowProps {
  projects: Project[];
}

export function ProjectsRow({ projects }: ProjectsRowProps) {
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
    <section id="projects" className="px-4 md:px-12 py-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
        Featured Projects
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
          {projects.map((project) => (
            <div
              key={project.id}
              className="experience-card flex-shrink-0 w-[300px] md:w-[350px] bg-[#1f1f1f] rounded-lg overflow-hidden group/card"
            >
              {/* Project Image/Icon */}
              <div className="h-40 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern
                        id={`proj-pattern-${project.id}`}
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="15" cy="15" r="1.5" fill="#e50914" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#proj-pattern-${project.id})`} />
                  </svg>
                </div>

                {/* Emoji Icon */}
                <span className="text-6xl relative z-10">{project.image}</span>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] to-transparent opacity-60" />
              </div>

              <div className="p-5">
                {/* Organization Badge */}
                <span className="text-xs text-[#e50914] font-medium mb-2 block">
                  {project.organization}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover/card:text-[#e50914] transition-colors">
                  {project.title}
                </h3>

                {/* Period */}
                <p className="text-xs text-gray-500 mb-3">{project.period}</p>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Details Preview */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {project.details[0]}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#2a2a2a] text-xs text-gray-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 bg-[#2a2a2a] text-xs text-gray-400 rounded">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* View Details Link */}
                <button className="flex items-center gap-2 text-sm text-[#e50914] hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
