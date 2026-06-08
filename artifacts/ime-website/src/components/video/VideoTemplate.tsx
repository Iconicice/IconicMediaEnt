import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = { open: 4000, services: 5000, beats1: 4500, beats2: 4500, close: 5000 };

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background layer */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/studio-bg.png)` }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/soundwaves.png)` }}
          animate={{ x: ['0%', '-5%', '0%'], y: ['0%', '2%', '0%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/60 backdrop-blur-sm" />
      </div>

      {/* Midground animated accents */}
      <motion.div
        className="absolute rounded-full blur-[100px] pointer-events-none"
        style={{ background: '#00d4ff', width: '40vw', height: '40vw' }}
        animate={{
          x: ['-20vw', '50vw', '80vw', '10vw', '-20vw'][currentScene],
          y: ['-20vh', '10vh', '-30vh', '50vh', '-20vh'][currentScene],
          opacity: [0.15, 0.2, 0.1, 0.25, 0.15][currentScene],
        }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      
      <motion.div
        className="absolute h-[1px] bg-[#00d4ff]/50"
        animate={{
          left: ['10%', '0%', '20%', '10%', '30%'][currentScene],
          width: ['0%', '100%', '60%', '80%', '40%'][currentScene],
          top: ['50%', '80%', '20%', '90%', '50%'][currentScene],
        }}
        transition={{ duration: 1.5, ease: 'circOut' }}
      />

      <AnimatePresence mode="popLayout">
        {currentScene === 0 && <Scene1 key="open" />}
        {currentScene === 1 && <Scene2 key="services" />}
        {currentScene === 2 && <Scene3 key="beats1" />}
        {currentScene === 3 && <Scene4 key="beats2" />}
        {currentScene === 4 && <Scene5 key="close" />}
      </AnimatePresence>
    </div>
  );
}
