import { useEffect } from "react";
import gsap from 'gsap'

export default function Fireworks() {
    useEffect(() => {
        const interval = setInterval(() => {
            createFirework();
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    const createFirework = () => {
        const container = document.querySelector(".fireworks-container");

        const firework = document.createElement("div");
        firework.className = "firework";

         const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight / 2);

        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;

        container.appendChild(firework);

          for (let i = 0; i < 24; i++) {
      const particle = document.createElement("span");
      particle.className = "particle";

      firework.appendChild(particle);

      const angle = (Math.PI * 2 * i) / 24;
      const distance = 80 + Math.random() * 60;

       gsap.fromTo(
        particle,
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
        },
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          opacity: 0,
          scale: 0,
          duration: 1.5,
          ease: "power3.out",
        }
     );
    }

    gsap.to(firework, {
        opacity:0,
        duration: 1.6,
        onComplete: () => firework.remove(),
    });
    }


return(
    <>
    <div className="fireworks-container"></div>

        <style>
            {`
        .fireworks-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 5;
        }          
          .firework {
          position: absolute;
          width: 10px;
          height: 10px;
        }
          
        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: radial-gradient(circle, #fff, #f59e0b);
          box-shadow:
            0 0 10px #fff,
            0 0 20px #f59e0b,
            0 0 40px #f59e0b;
        }

            `}
        </style>
    </>
)
}