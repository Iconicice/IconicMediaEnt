import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-black z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "linear" }}
      >
        <motion.h2 
          className="text-5xl md:text-7xl font-light italic mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          "Silent moves,
        </motion.h2>
        
        <motion.h2 
          className="text-6xl md:text-8xl font-black text-[#00d4ff] uppercase tracking-widest"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          Loud results."
        </motion.h2>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[10vh]"
        initial={{ opacity: 0 }}
        animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-white/50 uppercase tracking-widest">
          By Icynigma (Iconic.ice)
        </p>
      </motion.div>
    </motion.div>
  );
}
