import { useState, useEffect } from 'react';

export function useVideoPlayer({ durations }: { durations: Record<string, number> }) {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    // Start recording lifecycle logic (mocked for this environment)
    if (typeof window !== 'undefined' && (window as any).startRecording) {
      (window as any).startRecording();
    }
  }, []);

  useEffect(() => {
    const sceneKeys = Object.keys(durations);
    const currentDuration = durations[sceneKeys[currentScene]];

    const timer = setTimeout(() => {
      if (currentScene < sceneKeys.length - 1) {
        setCurrentScene((prev) => prev + 1);
      } else {
        // Stop recording after full loop
        if (typeof window !== 'undefined' && (window as any).stopRecording && !(window as any)._hasStopped) {
          (window as any).stopRecording();
          (window as any)._hasStopped = true;
        }
        // Loop back
        setCurrentScene(0);
      }
    }, currentDuration);

    return () => clearTimeout(timer);
  }, [currentScene, durations]);

  return { currentScene };
}
