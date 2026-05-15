import { useState } from "react";
import gsap from "gsap";

export default function CakeCutting() {
    const [candlesOut, setCandleOut] = useState(false);
    const [cakeCut, setCakeCut] = useState(false);

    const blowCandles = () => {
        setCandleOut(true);

        gsap.to(".flame", {
            opacity: 0,
            scale : 0,
            duration: 0.4,
            stagger : 0.08,
            ease: "power2.out",
        });

        
    gsap.to(".smoke", {
      opacity: 1,
      y: -40,
      duration: 1.5,
      stagger: 0.1,
      ease: "power1.out",
    });
    }

    const cutCake = () => {
        setCakeCut(true);

            gsap.to(".cake-left", {
      x: -70,
      rotate: -8,
      duration: 1.2,
      ease: "power3.out",
    });

        gsap.to(".cake-right", {
      x: 70,
      rotate: 8,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.fromTo(
        ".knife",
        {
            y: -200,
            rotate: -25,
        },
        {
            y: 0,
            rotate: 0,
            duration:0.8,
            ease : "power4.out",
        }
    )
    }

    const styles = {
  page: {
    height: "85vh",
    background:
      "radial-gradient(circle at top, #1e293b 0%, #020617 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: "white",
    fontFamily: "Inter, sans-serif",
  },

  title: {
    fontSize: "4rem",
    marginBottom: "20px",
    // textShadow: "0 0 20px rgba(255,255,255,0.3)",
  },

  scene: {
    position: "relative",
    width: "400px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  cakeWrapper: {
    position: "relative",
    display: "flex",
    gap: "4px",
  },

  cakeHalf: {
    width: "140px",
    height: "120px",
    background: "#f59e0b",
    borderRadius: "20px 20px 10px 10px",
    position: "relative",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  },

  cakeTop: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "35px",
    background: "#fef3c7",
    borderRadius: "20px 20px 0 0",
  },

  icing: {
    position: "absolute",
    top: "30px",
    width: "100%",
    height: "12px",
    background: "#fff",
    borderRadius: "999px",
  },

  candles: {
    position: "absolute",
    top: "-70px",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },

  candle: {
    width: "14px",
    height: "60px",
    background:
      "repeating-linear-gradient(45deg,#60a5fa,#60a5fa 5px,#fff 5px,#fff 10px)",
    borderRadius: "6px",
    position: "relative",
  },

  flame: {
    width: "18px",
    height: "28px",
    background:
      "radial-gradient(circle, #fde68a 0%, #f59e0b 60%, transparent 100%)",
    borderRadius: "50%",
    position: "absolute",
    top: "-24px",
    left: "-2px",
    filter: "blur(1px)",
    animation: "flicker 0.15s infinite alternate",
  },

  smoke: {
    width: "18px",
    height: "18px",
    background: "rgba(255,255,255,0.4)",
    borderRadius: "50%",
    position: "absolute",
    top: "-20px",
    left: "-2px",
    filter: "blur(5px)",
  },

  knife: {
    position: "absolute",
    fontSize: "4rem",
    top: "-30px",
    zIndex: 20,
  },

  buttons: {
    display: "flex",
    gap: "20px",
    marginTop: "50px",
  },

  button: {
    padding: "14px 28px",
    borderRadius: "999px",
    border: "none",
    background: "white",
    color: "#111827",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.3s",
  },

  message: {
    marginTop: "40px",
    fontSize: "2rem",
    color: "#fde68a",
    textShadow: "0 0 20px rgba(255,255,255,0.4)",
  },
};


    return (
        <div style={styles.page}>
            <h1 style={styles.title}>🎂 Happy Birthday 🎉</h1>
            <h1 >Ananya🥰</h1>
            {/* cake scene */}
                <div style={styles.scene}>
                    {/* knife */}
                    <div className="knife" style={styles.knife}>
                        🔪
                    </div>

                    {/* cake */}
                    <div style={styles.cakeWrapper}>
                        {/* left half */}
                        <div className="cake-left" style={styles.cakeHalf}>
                            <div style={styles.cakeTop}/>
                            <div style={styles.icing} />
                        </div>

                        {/* Right half */}
                         <div className="cake-right" style={styles.cakeHalf}>
                            <div style={styles.cakeTop} />
                            <div style={styles.icing} />
                        </div>

                        {/* Candles */}
                        {!cakeCut && (
                            <div style={styles.candles}>
                                {[1, 2, 3].map((c) => (
                                    <div key={c} style={styles.candle}>
                                        <div className="flame"
                                        style={{
                                            ...styles.flame,
                                            opacity: candlesOut ? 0 : 1,
                                        }}
                                        />
                                        <div className="smoke"
                                         style={{
                                            ...styles.smoke,
                                            opacity: 0,
                                         }}
                                         />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {/* buttons */}
                <div style={styles.buttons}>
                    <button 
                    onClick={blowCandles}
                    disabled={candlesOut}
                    style={styles.button}>
                        Blow Candles
                    </button>

                    <button 
                    onClick={cutCake}
                    disabled={!candlesOut || cakeCut}
                    style={styles.button}>
                        Cut Cake
                    </button>
                </div>
                {/* Message */}
                {cakeCut && (
                    <h2 style={styles.message}>
                       🎉 Make a Wish! 🎉 
                    </h2>
                )}
        </div>
    );
}