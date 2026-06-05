import { useEffect } from 'react';
import confetti from 'canvas-confetti';
// To see the confetti and configuration options: https://ulitcos.github.io/react-canvas-confetti/

export default function Confetti() {
  const defaults = { 
    startVelocity: 45, 
    spread: 230, 
    ticks: 600, 
    zIndex: 0,
    gravity: 0.5,
    decay: 0.9,
    angle: 90,
    colors: ['#faa31b', '#f3e94c', '#f7c76a', '#f3cf80', '#e58824', '#af862d'],
  };
  useEffect(() => {
    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 90,
        scalar: 1.2,
        shapes: ['star'],
      });

      confetti({
        ...defaults,
        particleCount: 30,
        scalar: 0.75,
        shapes: ['circle'],
      });
    };

    shoot();
    setTimeout(shoot, 200);
    setTimeout(shoot, 400);
  }, []);

  return null;
}
