import { useEffect, useRef, useCallback } from 'react';

export function useSound() {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playHoverSound = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    const context = audioContextRef.current;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    oscillator.frequency.setValueAtTime(400, context.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.05, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.1);
    
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.1);
  }, []);

  const playClickSound = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    const context = audioContextRef.current;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    oscillator.frequency.setValueAtTime(600, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(300, context.currentTime + 0.1);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.15);
    
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.15);
  }, []);

  return { playHoverSound, playClickSound };
}
