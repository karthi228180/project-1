export default function FloatingBallons() {
    const colors = [
            "#ef4444",
    "#3b82f6",
    "#22c55e",
    "#eab308",
    "#ec4899",
    "#8b5cf6",
    ];

    return(
        <div className="balloon-container">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="balloon"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 8}s`,
            background: colors[i % colors.length],
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <div className="string"></div>
        </div>
      ))}           

          <style>{`
        .balloon-container {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 2;
        }

        .balloon {
          position: absolute;
          bottom: -150px;
          width: 70px;
          height: 90px;
          border-radius: 50%;
          animation: floatUp linear infinite;
          opacity: 0.9;
          box-shadow:
            inset -10px -10px 20px rgba(0,0,0,0.15),
            0 10px 20px rgba(0,0,0,0.2);
        }

        .balloon::before {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          background: inherit;
          bottom: -6px;
          left: 29px;
          transform: rotate(45deg);
        }

        .string {
          position: absolute;
          width: 2px;
          height: 100px;
          background: rgba(255,255,255,0.5);
          top: 90px;
          left: 34px;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
          }

          50% {
            transform: translateY(-50vh) translateX(30px);
          }

          100% {
            transform: translateY(-120vh) translateX(-20px);
          }
        }
      `}</style>
        </div>
    )
}