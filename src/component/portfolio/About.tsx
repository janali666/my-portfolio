
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BookOpen,
  Lightbulb,
  MapPin,
  Calendar,
  Languages,
  Coffee,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "BS Software Engineering",
    desc: "MUST University, Graduated Aug 2025",
  },
  {
    icon: Code2,
    title: "Front-End Developer",
    desc: "Internship building responsive UIs",
  },
  {
    icon: BookOpen,
    title: "Quran Academy Founder",
    desc: "Teaching, leadership & communication",
  },
  {
    icon: Lightbulb,
    title: "AI Enthusiast",
    desc: "Exploring ML & intelligent systems",
  },
];

const facts = [
  { icon: MapPin, label: "Pakistan" },
  { icon: Calendar, label: "Available 2025" },
  { icon: Languages, label: "EN · UR" },
  { icon: Coffee, label: "Always Learning" },
];

export const About = () => {
  return (
    <section className="py-24 px-6 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Passion for Code & Curiosity
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A motivated Software Engineering graduate driven by AI, design,
            and building impactful digital products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* LEFT BIO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2 bg-gray-900 border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Who I Am
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              I'm a Software Engineering graduate with a strong interest in
              front-end development and Artificial Intelligence.
            </p>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              I also run an online Quran academy, where I developed leadership,
              communication, and teaching skills that help me build better
              products and work with people effectively.
            </p>

            {/* Facts */}
            <div className="flex flex-wrap gap-3">
              {facts.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 border border-gray-700 rounded-full text-xs text-gray-400"
                  >
                    <Icon size={14} />
                    {f.label}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-lg">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};