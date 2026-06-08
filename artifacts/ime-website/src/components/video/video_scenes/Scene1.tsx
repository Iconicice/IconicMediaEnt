import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene1() {
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
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-32 h-32 md:w-48 md:h-48 mb-8 relative"
        initial={{ opacity: 0, rotateY: 90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/crystal.png`} 
          className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,212,255,0.5)]"
          alt="IME Crystal"
        />
      </motion.div>
      
      <div className="overflow-hidden">
        <motion.h1 
          className="text-5xl md:text-8xl font-black tracking-tighter uppercase"
          initial={{ y: '100%' }}
          animate={phase >= 1 ? { y: '0%' } : { y: '100%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Ice Media
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h2 
          className="text-4xl md:text-7xl font-bold tracking-tight text-[#00d4ff]"
          initial={{ y: '-100%' }}
          animate={phase >= 2 ? { y: '0%' } : { y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Entertainment
        </motion.h2>
      </div>
      
      <motion.p
        className="mt-6 text-xl tracking-widest text-white/50 uppercase"
        initial={{ opacity: 0, letterSpacing: '0em' }}
        animate={phase >= 3 ? { opacity: 1, letterSpacing: '0.2em' } : { opacity: 0, letterSpacing: '0em' }}
        transition={{ duration: 1 }}
      >
        I.M.E Studio
      </motion.p>
    </motion.div>
  );
}
