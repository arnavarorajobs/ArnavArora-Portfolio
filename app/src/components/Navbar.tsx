import { Github, Linkedin, Mail, Phone } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

export function Navbar({ isScrolled }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#141414] shadow-lg'
          : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="px-4 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-[#e50914] font-bold text-2xl tracking-tighter">
            ARNAV
          </span>
          <span className="text-white font-bold text-2xl tracking-tighter">
            ARORA
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#experience"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Skills
          </a>
          <a
            href="#education"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Education
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#e50914] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#e50914] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:arnavarorajobs@gmail.com"
            className="text-gray-300 hover:text-[#e50914] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="tel:+917042548250"
            className="text-gray-300 hover:text-[#e50914] transition-colors"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
