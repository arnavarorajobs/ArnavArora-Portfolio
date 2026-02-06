import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

const coursework = [
  'Embedded Systems',
  'Software Development',
  'Robotics',
  'Analog & Digital Circuits',
  'Computer Networking',
  'Image Processing',
  'Serial Communication',
  'Predictive & Intelligent Control',
  'Mechatronics',
  'RTOS',
];

export function EducationSection() {
  return (
    <section id="education" className="px-4 md:px-12 py-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
        Education
      </h2>

      <div className="bg-[#1f1f1f] rounded-lg overflow-hidden">
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-r from-[#e50914]/30 via-[#1f1f1f] to-[#1f1f1f]">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="edu-pattern"
                  x="0"
                  y="0"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="25" cy="25" r="2" fill="#e50914" />
                  <path
                    d="M25 10v30 M10 25h30"
                    stroke="#e50914"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#edu-pattern)" />
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end gap-4">
            <div className="w-16 h-16 bg-[#e50914] rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                McMaster University
              </h3>
              <p className="text-gray-400">Hamilton, Ontario</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Degree Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">
                B.Eng. Mechatronics Engineering
              </h4>
              <p className="text-[#e50914] font-medium">Summa Cum Laude</p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                September 2019 - June 2025
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Hamilton, ON
              </span>
            </div>
          </div>

          {/* GPA & Achievements */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 rounded-lg">
              <Award className="w-5 h-5 text-[#e50914]" />
              <span className="text-white font-semibold">GPA: 3.9</span>
            </div>
            <div className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 rounded-lg">
              <BookOpen className="w-5 h-5 text-[#e50914]" />
              <span className="text-gray-300">Summa Cum Laude</span>
            </div>
          </div>

          {/* Coursework */}
          <div>
            <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
              Relevant Coursework
            </h5>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1.5 bg-[#2a2a2a] text-gray-300 text-sm rounded-lg hover:bg-[#e50914] hover:text-white transition-colors cursor-default"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
