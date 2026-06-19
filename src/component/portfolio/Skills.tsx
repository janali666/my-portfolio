import { motion } from "framer-motion";
import { Code, Database, GitBranch, Palette, Cpu, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const technical = [
  { name: "HTML / CSS", level: 95, icon: Palette },
  { name: "JavaScript", level: 85, icon: Code },
  { name: "Front-End Development", level: 88, icon: Sparkles },
  { name: "API Integration", level: 78, icon: Database },
  { name: "Git & Version Control", level: 82, icon: GitBranch },
  { name: "AI / ML Foundations", level: 65, icon: Cpu },
];

const conceptual = [
  "OOP", "Data Structures", "Algorithms", "Problem Solving",
  "Responsive Design", "UI/UX", "Clean Code", "Debugging",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-neon-purple/10 blur-[100px] -z-10" />
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & Technologies"
          description="A growing toolkit covering the full front-end spectrum, with a focus on AI exploration."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Technical - 3 cols */}
          <div className="lg:col-span-3 glass rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-gradient-primary opacity-10 blur-3xl" />
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display text-xl font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary shadow-neon" />
                Technical Stack
              </h3>
              <span className="text-xs text-muted-foreground">Proficiency</span>
            </div>
            <div className="space-y-5">
              {technical.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="font-medium flex items-center gap-2">
                      <s.icon className="w-4 h-4 text-primary" />
                      {s.name}
                    </span>
                    <span className="text-primary font-display font-semibold">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-primary shadow-neon relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-3xl p-7">
              <h3 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-neon-purple" />
                Concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                {conceptual.map((c, i) => (
                  <motion.span
                    key={c}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="px-3.5 py-1.5 rounded-full bg-muted/60 border border-border text-sm hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {c}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-7 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-glow-pulse" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Currently Learning
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">
                  <span className="text-gradient">AI & ML</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Diving deep into machine learning, neural networks, and building
                  intelligent applications.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

