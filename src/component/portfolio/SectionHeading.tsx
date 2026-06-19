import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

 const SectionHeading = ({ eyebrow, title, description }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="text-center max-w-2xl mx-auto mb-16"
  >
    <div className="inline-block px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-primary mb-4">
      {eyebrow}
    </div>
    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
      <span className="text-gradient">{title}</span>
    </h2>
    {description && <p className="text-muted-foreground">{description}</p>}
  </motion.div>
);

export default SectionHeading;