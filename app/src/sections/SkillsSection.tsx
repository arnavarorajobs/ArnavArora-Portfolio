import { Code2, Cpu, Wrench, Bot } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    name: 'Languages & Tools',
    icon: Code2,
    skills: [
      'C', 'C++', 'Python', 'Bash', 'MATLAB', 'LabVIEW', 'C#', 'Java', 
      'Simulink', 'LT Spice', 'KiCAD', 'SQL'
    ],
  },
  {
    id: 'embedded',
    name: 'Embedded & OS',
    icon: Cpu,
    skills: [
      'QNX RTOS', 'Embedded Linux', 'Embedded C', 'Multithreading', 
      'State Machines', 'Serial Communication', 'UART', 'SPI', 'I2C'
    ],
  },
  {
    id: 'tools',
    name: 'DevOps & Tools',
    icon: Wrench,
    skills: [
      'Git', 'Gerrit', 'Jenkins', 'JIRA', 'Docker', 'PyTest', 'Allure', 
      'REST APIs', 'Debugging', 'Bug Tracking'
    ],
  },
  {
    id: 'robotics',
    name: 'Robotics & Control',
    icon: Bot,
    skills: [
      'ROS2', 'TF2', 'O2 Libraries', 'OpenCV', 'Finite State Machines', 
      'Sensor-Actuator Integration', 'Real-time Systems'
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 md:px-12 py-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="bg-[#1f1f1f] rounded-lg p-5 hover:bg-[#252525] transition-colors"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#e50914]/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#e50914]" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tech-badge px-3 py-1.5 bg-[#2a2a2a] text-gray-300 text-sm rounded-lg cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
