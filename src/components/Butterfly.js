import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PremiumButterfly() {
    const butterflyRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".butterfly-wrapper", {
                y: -25,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".left-wing", {
                rotateY: 55,
                transformOrigin: "right center",
                duration: 0.12,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });

              gsap.to(".right-wing", {
                rotateY: -55,
                transformOrigin: "left center",
                duration: 0.12,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });     
            
                  gsap.to(".butterfly-glow", {
        opacity: 0.8,
        scale: 1.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".butterfly-wrapper", {
        x: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, butterflyRef);


        return () => ctx.revert();
    }, []);

    return (
            <div
      ref={butterflyRef}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle at center, #0f172a 0%, #020617 100%)",
        overflow: "hidden",
      }}
    >
           <div
        className="butterfly-wrapper"
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          perspective: "1000px",
        }}
      >
                {/* Glow */}
        <div
          className="butterfly-glow"
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.45), transparent)",
            borderRadius: "50%",
            top: "40px",
            left: "40px",
            filter: "blur(40px)",
            zIndex: 0,
          }}
        />
                {/* SVG Butterfly */}
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            overflow: "visible",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* LEFT WING */}
          <g className="left-wing">
            <path
              d="
                M150 150
                C80 70, 20 120, 70 190
                C90 220, 120 220, 150 170
                Z
              "
              fill="url(#leftGradient)"
              opacity="0.95"
            />

                        <path
              d="
                M150 150
                C95 170, 70 240, 120 260
                C145 270, 160 230, 150 180
                Z
              "
              fill="url(#leftLower)"
              opacity="0.9"
            />
          </g>

                   {/* RIGHT WING */}
          <g className="right-wing">
            <path
              d="
                M150 150
                C220 70, 280 120, 230 190
                C210 220, 180 220, 150 170
                Z
              "
              fill="url(#rightGradient)"
              opacity="0.95"
            />

            <path
              d="
                M150 150
                C205 170, 230 240, 180 260
                C155 270, 140 230, 150 180
                Z
              "
              fill="url(#rightLower)"
              opacity="0.9"
            />
          </g>

            {/* BODY */}
          <rect
            x="145"
            y="110"
            width="10"
            height="90"
            rx="10"
            fill="#0F172A"
          />

                   {/* ANTENNAS */}
          <path
            d="M148 115 Q135 90 120 85"
            stroke="#94A3B8"
            strokeWidth="2"
            fill="none"
          />

          <path
            d="M152 115 Q165 90 180 85"
            stroke="#94A3B8"
            strokeWidth="2"
            fill="none"
          />


                    {/* Gradients */}
          <defs>
            <linearGradient
              id="leftGradient"
              x1="50"
              y1="50"
              x2="180"
              y2="220"
            >
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>

                        <linearGradient
              id="rightGradient"
              x1="250"
              y1="50"
              x2="120"
              y2="220"
            >
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>

              <linearGradient
              id="leftLower"
              x1="80"
              y1="150"
              x2="160"
              y2="260"
            >
              <stop offset="0%" stopColor="#7DD3FC" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>

                        <linearGradient
              id="rightLower"
              x1="220"
              y1="150"
              x2="140"
              y2="260"
            >
              <stop offset="0%" stopColor="#7DD3FC" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>

        </defs>

        </svg>
        </div> 
    </div>
    )
}