import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import '../pages/part3.css'


function Part3() {

    gsap.registerPlugin(ScrollTrigger);

    const containerRef = useRef();

    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel:true,
            duration: 1.2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf)

        }

        requestAnimationFrame(raf);

        // Hero animation
        gsap.from(".hero-title", {
            opacity:0,
            y:80,
            duration: 1.5,
            ease: "power4.out",
        });

        gsap.from(".hero-sub", {
            opacity: 0,
            y : 40,
            delay: 0.5,
            duration: 1.2,
        });

        // butterflu float

        gsap.to(".butterfly", {
            y: -20,
            repeat :-1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut",
        });

        // scroll story timeline

        const tl =gsap.timeline({
            scrollTrigger: {
                trigger : ".story",
                start: "top top",
                end : "bottom bottom",
                scrub: 2,
            },
        });

        tl.to(containerRef.current, {
            background :  "radial-gradient(circle at center, #1e3c72 0%, #0f172a 100%)",
            duration: 1,
        });

        tl.to(".particlss", {
              opacity: 1,
             scale: 1.2,
              duration: 1,
        });
       
        
            tl.to(".storm", {
                opacity: 1,
                y: 0,
                duration: 1,
        });
            tl.to(".city", {
                opacity: 1,
                scale: 1,
                duration: 1,
    });

        tl.to(".finale", {
      opacity: 1,
      y: 0,
      duration: 1,
    });

        return () => {
            lenis.destroy();
            ScrollTrigger.killAll();
        };
    }, [])

  return (
    <>
    <div ref={containerRef} className='bg-gradient text-white overflow-x-hidden'
    style={{
        minHeight:"100vh",
        background: "radial-gradient(circle at center, #020617 0%, #000000 100%)",
        transition: "background 1s ease",
        fontFamily: "Inter, sans-serif",
    }}>
            {/* Hero */}
            <section style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
            }}>
                <div className='butterfly'
                style={{
                    fontSize: "80px",
                    filter: "drop-shadow(0 0 25px rgba(255,255,255,0.5))",
                }}>
                    🦋
                </div>

                <h1 className='hero-title'
                 style={{
                    fontSize: "5rem",
                    fontWeight: "800",
                    marginTop: "20px",
                    textAlign:"center",
                 }}>
                    Butterfly Effect
                 </h1>

                         <p
                            className="hero-sub"
                            style={{
                                fontSize: "1.4rem",
                                opacity: 0.8,
                                marginTop: "10px",
                            }}
                            >
                            Tiny movements. Infinite consequences.
                            </p>

            </section>

            {/* story */}

            <section className='story'>
                {/* section 1 */}

                <div className='panel'>
                    <h2>It started with something small.</h2>
                </div>

                {/* section 2 */}
                <div className='panel particlss'>
                    <h2>A single movement changed the air.</h2>

                    <div className='particle-container'>
                        {[...Array(50)].map((_, i) => (
                            <span key={i}
                            className='particle'
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                            />
                        ))}
                    </div>
                </div>

                {/* section 3 */}
                <div className='panel strom'>
                    <h2>Small actions travel farther than we imagine.</h2>
                </div>

                {/* sectiono 4 */}
                <div className='panel city'>
                    <h2>Every choice creates a future.</h2>
                </div>

                {/* finalee */}
                <div className='panel finale'>
                    <h2>The world is shaped by tiny moments.</h2>

                    <button className='cta'>
                        Start Your Journey
                    </button>
                </div>
            </section>
    </div>
    </>
  )
}

export default Part3