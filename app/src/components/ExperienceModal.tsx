import { X, MapPin, Calendar, Briefcase } from 'lucide-react';
import type { Experience } from '@/types';
import { useEffect } from 'react';

interface ExperienceModalProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ExperienceModal({ experience, isOpen, onClose }: ExperienceModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !experience) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#1f1f1f] rounded-xl shadow-2xl modal-animate">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div
          className="relative h-48 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${experience.color}40 0%, #1f1f1f 100%)`,
          }}
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id={`pattern-${experience.id}`}
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="2" fill={experience.color} />
                  <path
                    d="M20 0v40 M0 20h40"
                    stroke={experience.color}
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#pattern-${experience.id})`} />
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-end gap-4">
              {/* Company Icon */}
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: experience.color }}
              >
                <Briefcase className="w-10 h-10 text-white" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-1">
                  {experience.company}
                </h2>
                <p className="text-xl text-gray-300">{experience.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
            <span className="flex items-center gap-2 bg-[#2a2a2a] px-3 py-1.5 rounded-full">
              <Calendar className="w-4 h-4" />
              {experience.period}
            </span>
            <span className="flex items-center gap-2 bg-[#2a2a2a] px-3 py-1.5 rounded-full">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6">{experience.description}</p>

          {/* Responsibilities */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Key Responsibilities & Achievements
            </h3>
            <ul className="space-y-3">
              {experience.details.map((detail, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-300"
                >
                  <span
                    className="flex-shrink-0 w-2 h-2 mt-2 rounded-full"
                    style={{ backgroundColor: experience.color }}
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-[#2a2a2a] text-gray-300 text-sm rounded-lg border border-[#404040] hover:border-[#e50914] hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#333] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#e50914] text-white font-semibold rounded hover:bg-[#b20710] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
