
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "janalinaqvi313@gmail.com",
    href: "mailto:janalinaqvi313@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 324 2112148",
    href: "tel:+923242112148",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92 340 5785020",
    href: "https://wa.me/923405785020",
  },
];

export const Contact = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent! I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-24 px-6 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Drop me a message.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-5 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          
          {/* LEFT */}
          <div className="lg:col-span-2 p-8 border-b lg:border-b-0 lg:border-r border-gray-800">
            <h3 className="text-2xl font-bold mb-3 text-blue-400">
              Get in touch
            </h3>

            <p className="text-gray-400 text-sm mb-8">
              I'm available for freelance work, internships and collaborations.
              Let’s create something great together.
            </p>

            {/* Channels */}
            <div className="space-y-4 mb-8">
              {channels.map((c, i) => {
                const Icon = c.icon;
                return (
                  <a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg border border-gray-700 hover:border-blue-500 transition"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-lg">
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">{c.label}</p>
                      <p className="text-sm">{c.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <MapPin size={14} /> Pakistan
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} /> Replies in 24h
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-gray-400 mb-2 block">
                  Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-2 block">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-400 mb-2 block">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 mb-2 block">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Your message..."
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition"
            >
              Send Message
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};