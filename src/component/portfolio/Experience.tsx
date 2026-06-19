
import { motion } from "framer-motion";
import { Briefcase, BookOpen, Calendar } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    role: "Front-End Developer (Internship)",
    org: "Web Development Studio",
    period: "2024",
    type: "Internship",
    points: [
      "Built and shipped front-end features for production websites.",
      "Developed a complete website for an Online Quran Academy.",
      "Improved responsive design patterns and reusable UI components.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
  },
  {
    icon: BookOpen,
    role: "Founder & Instructor",
    org: "Online Quran Academy",
    period: "Ongoing",
    type: "Self-Started",
    points: [
      "Manage students, scheduling, and live online sessions.",
      "Sharpened communication, leadership, and teaching skills.",
      "Built the academy's web presence end-to-end.",
    ],
    tags: ["Leadership", "Teaching", "Operations"],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-black text-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest mb-3">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Practical experience that blends engineering, communication and
            leadership.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-700" />

          <div className="space-y-10">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-20 md:pl-24"
                >
                  {/* icon */}
                  <div className="absolute left-0 md:left-2 top-2 w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                    <Icon size={20} />
                  </div>

                  {/* card */}
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition">
                    {/* top */}
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
                      <div>
                        <h3 className="text-xl font-semibold">{item.role}</h3>
                        <p className="text-blue-400 text-sm">{item.org}</p>
                      </div>

                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">
                          {item.type}
                        </span>

                        <span className="flex items-center gap-1 text-sm text-gray-400">
                          <Calendar size={14} />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* points */}
                    <ul className="space-y-3 mb-5">
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-gray-300 text-sm"
                        >
                          <span className="text-blue-400">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full border border-gray-700 text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};