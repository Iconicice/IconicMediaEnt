import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1300),
      setTimeout(() => setPhase(4), 1800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const services = [
    { title: "Remote Production", desc: "& Mixing" },
    { title: "Custom I.M.E Beats", desc: "Tailored to your sound" },
    { title: "On-Site Studio", desc: "Recording (Coming Soon)" }
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center px-[10vw] z-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h2 
        className="text-[#00d4ff] text-2xl uppercase tracking-[0.3em] mb-12 font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Our Expertise
      </motion.h2>

      <div className="space-y-8">
        {services.map((svc, i) => (
          <motion.div
            key={i}
            className="border-l-2 border-[#00d4ff] pl-6 py-2"
            initial={{ opacity: 0, x: -20 }}
            animate={phase >= i + 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold uppercase">{svc.title}</h3>
            <p className="text-xl md:text-2xl text-white/60 mt-2">{svc.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
