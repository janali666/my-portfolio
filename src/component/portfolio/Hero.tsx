
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import profile from '../../assets/profile.jpeg';
const techStack = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "Python",
  "AI/ML",
  "Node.js",
  "Git",
  "Figma",
];

const stats = [
  { value: "2025", label: "Graduated" },
  { value: "10+", label: "Projects" },
  { value: "AI", label: "Focus" },
];

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-gray-400 mb-4">
            Available for opportunities
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Hello, I'm <br />
            <span className="text-blue-400">Jan Ali</span> Naqvi
          </h1>

          <p className="text-gray-400 mb-6">
            Software Engineer • Front-End Developer • AI Enthusiast
          </p>

          <p className="text-gray-300 max-w-lg mb-8">
            I build modern, responsive websites and explore artificial
            intelligence to create smart and impactful solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-medium transition"
            >
              View Work
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              <Download size={18} />
              Resume
            </a>

            <a
              href="mailto:janalinaqvi313@gmail.com"
              className="w-11 h-11 flex items-center justify-center border border-gray-600 rounded-full hover:bg-gray-800"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-sm">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="border border-gray-700 rounded-lg p-4 text-center"
              >
                <h3 className="text-xl font-bold text-blue-400">
                  {s.value}
                </h3>
                <p className="text-xs text-gray-400">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-72 h-80 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden border border-gray-700">
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <div className="absolute bottom-6 left-0 right-0 overflow-hidden">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 border border-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};