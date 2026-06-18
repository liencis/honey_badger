import { useEffect } from 'react';
import confetti from 'canvas-confetti';
// To see the confetti and configuration options: https://ulitcos.github.io/react-canvas-confetti/

const svgBeePath = "M31.4,6.92c-2.51-.46-6.61,1.63-9.72,4.33-.21-.19-.44-.33-.66-.49,5.07-1.49,1.05-9.39-3.18-5.79.2-.88.78-2.45,2.41-3.66.44.39,1.34.21,1.33-.56-.02-1.23-1.96-.83-1.5.31-1.98,1.53-2.73,3.65-2.62,4.36-.04.05-.06.11-.1.16-.03-.05-.06-.11-.09-.16.11-.71-.65-2.83-2.62-4.36.46-1.14-1.48-1.54-1.5-.31-.01.77.89.95,1.33.56,1.63,1.21,2.2,2.78,2.41,3.66-4.23-3.61-8.25,4.31-3.17,5.79-.21.14-.42.28-.62.45C-2.11-.57-5.44,14.24,10.42,20.22c.55,4.38,3.33,6.72,6.26,7.03l.68,1.76.68-1.76c2.92-.31,5.68-2.63,6.25-6.97,6.59-2.29,15.92-11.94,7.11-13.35ZM19.91,7.39c.01.92-1.43.92-1.42,0-.01-.92,1.43-.92,1.42,0ZM16.2,7.39c.01.92-1.43.92-1.42,0-.01-.92,1.43-.92,1.42,0ZM17.24,9.61c.04-.06.08-.11.12-.17.04.06.08.11.12.16-.08,0-.16,0-.23,0Z";

export default function BeeConfetti() {
  const defaults = { 
    startVelocity: 30, 
    spread: 160, 
    ticks: 600, 
    zIndex: 0,
    gravity: -3,
    drift: 1.2,
    decay: 0.9,
    angle: 90,
    colors: ['#000000'],
  };

  useEffect(() => {

    const shoot = () => {
        var bee = confetti.shapeFromPath({path: svgBeePath})

        confetti({
            ...defaults,
            particleCount: 20,
            scalar: 2,
            shapes: [bee],
        });

        confetti({
            ...defaults,
            particleCount: 10,
            scalar: 1.5,
            shapes: [bee],
        });
    };

    shoot();
    setTimeout(shoot, 200);
    setTimeout(shoot, 400);
  }, []);

  return null;
}
