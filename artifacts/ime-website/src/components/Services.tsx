import { motion } from "framer-motion";
import { Headphones, Radio, Mic2 } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Headphones,
      title: "Remote Production & Mixing",
      description: "No matter where you are, send us your raw vocals. We will engineer the magic off-site and deliver a polished masterpiece.",
      active: true,
    },
    {
      icon: Radio,
      title: "Custom I.M.E Beats",
      description: "Hunting for that perfect sound? We craft original instrumentals tailored to your vibe, ready to shake the industry.",
      active: true,
    },
    {
      icon: Mic2,
      title: "On-Site Studio Recording",
      description: "Currently paused as we re-wire and upgrade for the future! Check back soon for our state-of-the-art facility.",
      active: false,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="services" className="py-32 relative bg-black/40">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            The Arsenal
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative group p-8 rounded-2xl border ${
                  service.active 
                    ? "border-white/10 bg-white/5 hover:border-primary/50" 
                    : "border-white/5 bg-transparent opacity-60"
                } transition-colors duration-300`}
              >
                {!service.active && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/60">
                    Paused
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.active ? "bg-primary/20 text-primary" : "bg-white/10 text-white/40"
                }`}>
                  <Icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>

                {service.active && (
                  <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
