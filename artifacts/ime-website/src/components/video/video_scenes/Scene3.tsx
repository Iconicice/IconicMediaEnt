import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1600),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center z-10"
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div className="text-center">
        <motion.p
          className="text-[#00d4ff] uppercase tracking-[0.5em] text-xl mb-4"
          initial={{ opacity: 0 }}
          animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
        >
          Exclusive Production
        </motion.p>
        
        <div className="overflow-hidden">
          <motion.h2
            className="text-6xl md:text-9xl font-black uppercase leading-none"
            initial={{ y: '100%' }}
            animate={phase >= 2 ? { y: '0%' } : { y: '100%' }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            I.M.E
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            className="text-6xl md:text-9xl font-black uppercase leading-none text-transparent"
            style={{ WebkitTextStroke: '2px white' }}
            initial={{ y: '-100%' }}
            animate={phase >= 3 ? { y: '0%' } : { y: '-100%' }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            Beats
          </motion.h2>
        </div>
      </div>
    </motion.div>
  );
}
