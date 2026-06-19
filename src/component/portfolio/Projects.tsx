
import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Globe } from "lucide-react";

const projects = [
  {
    icon: Brain,
    tag: "Final Year Project",
    badge: "AI / ML",
    title: "AI Symptom-Driven Disease Prediction",
    desc: "An AI system that predicts diseases from symptoms and suggests medication using machine learning.",
    tech: ["Python", "Machine Learning", "AI", "Data Science"],
    emoji: "🧠",
  },
  {
    icon: Globe,
    tag: "Internship Project",
    badge: "Web Dev",
    title: "Online Quran Academy Website",
    desc: "A responsive website with course info, instructors and contact flow built during internship.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    emoji: "🕌",
  },
];

export const Projects = () => {
  return (
    <section className="py-24 px-6 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest mb-3">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects in AI and real-world web development.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, index) => {
            const Icon = p.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 transition"
              >
                {/* Top */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                  <span className="text-6xl opacity-30">{p.emoji}</span>

                  {/* badges */}
                  <div className="absolute top-4 left-4 text-xs bg-black/60 px-3 py-1 rounded-full">
                    {p.tag}
                  </div>
                  <div className="absolute top-4 right-4 text-xs bg-blue-500 px-3 py-1 rounded-full">
                    {p.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={20} className="text-blue-400" />
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                  </div>

                  <p className="text-gray-400 text-sm mb-5">
                    {p.desc}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs border border-gray-700 rounded-full text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="flex items-center gap-2 text-blue-400 text-sm font-medium hover:underline">
                    View Details
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-full hover:bg-gray-800 transition text-sm"
          >
            More projects coming soon
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};