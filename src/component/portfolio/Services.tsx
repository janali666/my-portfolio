import { motion } from "framer-motion";
import { Code2, Smartphone, Cpu, Wand2, ArrowRight } from "lucide-react";
import  SectionHeading  from "./SectionHeading";

const services = [
  {
    icon: Code2,
    title: "Front-End Development",
    desc: "Modern, performant interfaces using HTML, CSS and JavaScript.",
    features: ["Clean code", "Component-based", "Cross-browser"],
    number: "01",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Pixel-perfect layouts that look great on any device.",
    features: ["Mobile-first", "Fluid grids", "Touch-friendly"],
    number: "02",
  },
  {
    icon: Cpu,
    title: "AI / ML Projects",
    desc: "Hands-on prototypes exploring machine learning use cases.",
    features: ["Python", "Data analysis", "Smart features"],
    number: "03",
  },
  {
    icon: Wand2,
    title: "UI Optimization",
    desc: "Refining existing websites for speed, polish and usability.",
    features: ["Performance", "Polish", "UX audit"],
    number: "04",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-neon-blue/10 blur-[120px] -z-10" />
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="What I Offer"
          description="Focused services that combine design sensibility with engineering discipline."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-hover rounded-3xl p-7 group relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 font-display text-7xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {s.number}
              </div>

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-neon group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>

                <ul className="space-y-1.5 mb-5">
                  {s.features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
