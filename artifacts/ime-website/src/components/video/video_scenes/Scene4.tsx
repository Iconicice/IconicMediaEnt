import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 900),
      setTimeout(() => setPhase(4), 1200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const beats = [
    { name: "Fairies", price: "R75" },
    { name: "Escape", price: "R85" },
    { name: "Mystic", price: "R150" },
    { name: "Abracadabra", price: "R200" },
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex items-center px-[10vw] z-10"
      initial={{ opacity: 0, filter: 'blur(20px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {beats.map((beat, i) => (
          <motion.div
            key={i}
            className="bg-[#111] border border-[#00d4ff]/30 p-8 rounded-2xl relative overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={phase >= i + 1 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-3xl font-bold uppercase">{beat.name}</h3>
            <p className="text-2xl text-[#00d4ff] mt-2 font-mono">{beat.price}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
