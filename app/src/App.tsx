import { useState, useEffect } from 'react';
import { Hero } from './sections/Hero';
import { ExperienceRow } from './sections/ExperienceRow';
import { ProjectsRow } from './sections/ProjectsRow';
import { SkillsSection } from './sections/SkillsSection';
import { EducationSection } from './sections/EducationSection';
import { ExperienceModal } from './components/ExperienceModal';
import { Navbar } from './components/Navbar';
import type { Experience, Project } from './types';

const experiences: Experience[] = [
  {
    id: 'calyan',
    company: 'Calyan Technologies',
    role: 'Firmware & Test Engineer',
    period: 'Aug 2025 – Present',
    location: 'Remote, USA',
    description: 'Leading firmware validation and automated testing for embedded medical devices.',
    details: [
      'Architected Pytest-based automated test framework for embedded pacemaker firmware validation using serial protocols (UART, SPI, I2C), reducing manual testing cycles by 97% and accelerating firmware iteration velocity.',
      'Developed FDA-compliant reporting pipeline using pytest and Allure framework to generate standalone HTML reports with embedded visualizations, enabling automated conversion to comprehensive PDF documentation for regulatory submissions.',
      'Supporting unit-level and HIL-style testing for embedded firmware systems.',
    ],
    technologies: ['Python', 'Pytest', 'Allure', 'UART', 'SPI', 'I2C', 'Embedded C', 'FDA Compliance'],
    color: '#e50914',
  },
  {
    id: 'blackberry',
    company: 'BlackBerry QNX',
    role: 'Field Application Engineer Co-op',
    period: 'May 2024 – August 2024',
    location: 'Ottawa, ON',
    description: 'Developed real-time embedded applications and demonstrations for QNX RTOS.',
    details: [
      'Created and documented demonstrations to illustrate BlackBerry QNX\'s RTOS (SDP7.1 and SDP8) capabilities on platforms like Raspberry Pi4, 16-core Honeycomb, and AWS cloud, enhancing industrial customer engagement and ensuring easy reproducibility.',
      'Developed real-time embedded ROS2 applications on QNX RTOS using C++ and Python for robotic control and automation, applying real-time principles (latency, determinism, priority scheduling) to guarantee fail-safe operation.',
      'Validated joint-level robotic control behavior using ROS2 and C++, implementing finite state machines, real-time execution, and coordinated actuator control on Flexiv robotic arm.',
    ],
    technologies: ['QNX RTOS', 'ROS2', 'C++', 'Python', 'Real-time Systems', 'Raspberry Pi', 'AWS'],
    color: '#00a8e8',
  },
  {
    id: 'ericsson',
    company: 'Ericsson',
    role: 'RF Product Integrator Co-op',
    period: 'May 2022 – August 2023',
    location: 'Ottawa, ON',
    description: 'System integration and validation for RF hardware and software products.',
    details: [
      'Supported system-level integration and verification by clarifying functional behavior, expected outcomes, and acceptance criteria across HW/SW boundaries.',
      'Implemented test and validation methods for efficient integration of hardware and software. Developed all radio calibration and performance optimization procedures in Python, C/C++/C# and Labview.',
      'Employed embedded programming to automate procedures for flashing radios with software, reducing fatal process errors, and enhancing efficiency by 60%.',
      'Enhanced proficiency in debugging techniques by actively utilizing RF instruments such as oscilloscopes and network analyzers.',
      'Worked within Agile Scrum teams, collaborating with systems, hardware, software, and test engineers to meet integration and delivery timelines.',
    ],
    technologies: ['Python', 'C/C++', 'C#', 'LabVIEW', 'RF Instruments', 'Agile/Scrum', 'Git', 'Jenkins'],
    color: '#0091da',
  },
];

const projects: Project[] = [
  {
    id: 'pyramid',
    title: 'Pyramid Stacking with Medical Robot',
    organization: 'BlackBerry QNX',
    period: 'May 2024 – August 2024',
    description: 'Autonomous robotic manipulation using ROS2 and computer vision.',
    details: [
      'Developed a multi-threaded finite state machine using a series of ROS2 service/action nodes, enabling a Flexiv robot to autonomously identify, manipulate, and stack cubes into a pyramid using tf2 libraries and ArUco markers.',
      'Enhanced proficiency in thread synchronization, ROS2 service/call architecture, and coordinate system transformations, effectively showcasing the capabilities of Blackberry QNX\'s safety-certified RTOS to industrial stakeholders.',
    ],
    technologies: ['ROS2', 'C++', 'Python', 'OpenCV', 'ArUco Markers', 'TF2', 'Finite State Machines'],
    image: '🤖',
  },
  {
    id: 'station-vision',
    title: 'Station Vision',
    organization: 'Martinrea International, Vaughn',
    period: 'September 2023 – May 2024',
    description: 'Embedded hardware controller for ML-based quality inspection systems.',
    details: [
      'Engineered an embedded modular hardware controller to create optimal lighting conditions for existing computer vision ML quality inspection systems for an industry partner.',
      'Designed and programmed a custom built Arduino Micro using the ATMega32U4 AU/MU chip using KiCAD and Object Oriented Programming (Python & C/C++) working concurrently with the open source Arduino IDE.',
    ],
    technologies: ['KiCAD', 'Arduino', 'ATMega32U4', 'Python', 'C/C++', 'Computer Vision', 'ML'],
    image: '👁️',
  },
  {
    id: 'image-pipeline',
    title: 'Image Processing Pipeline',
    organization: 'McMaster University',
    period: 'January 2024 – March 2024',
    description: 'MATLAB-based image processing for demosaicing and denoising.',
    details: [
      'Developed a MATLAB-based image processing pipeline for demosaicing and denoising noisy Bayer patterns using linear regression.',
      'Integrated white balance correction, histogram equalization, and performance benchmarking with RMSE.',
    ],
    technologies: ['MATLAB', 'Image Processing', 'Linear Regression', 'Bayer Patterns', 'RMSE'],
    image: '📷',
  },
];

function App() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <div className="relative z-10 -mt-32 pb-20">
          <ExperienceRow 
            experiences={experiences} 
            onSelectExperience={setSelectedExperience}
          />
          
          <ProjectsRow projects={projects} />
          
          <SkillsSection />
          
          <EducationSection />
        </div>
      </main>

      <ExperienceModal
        experience={selectedExperience}
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </div>
  );
}

export default App;
