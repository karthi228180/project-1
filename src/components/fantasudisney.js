
import React, { useState } from "react";
import "./Fantasydisney.css";

export default function InteractiveDisneyGift() {
  const [step, setStep] = useState(0);
  const [openGift, setOpenGift] = useState(false);

  const next = () => setStep((s) => s + 1);

  return (
    <div className="world">

      {/* STEP 0 - GIFT */}
      {step === 0 && (
        <div className="center">
          <h1>🎁 A Magical Gift is Waiting</h1>

          <div
            className={`gift ${openGift ? "open" : ""}`}
            onClick={() => setOpenGift(true)}
          >
            🎁
          </div>

          {!openGift ? (
            <p>Click the gift to open magic ✨</p>
          ) : (
            <button onClick={next} className="btn-nw">
              Enter Magic World
            </button>
          )}
        </div>
      )}

      {/* STEP 1 - RAPUNZEL */}
      {step === 1 && (
        <div className="scene tangled">
          <div className="float">🏰✨🏮</div>

          <h1 onClick={next}>👸 Rapunzel</h1>

          <p>
            "Your life is full of light and dreams 🌸  
            Let your story shine brighter than lanterns ✨"
          </p>

          <button onClick={next}>Tap for Next Princess</button>
        </div>
      )}

      {/* STEP 2 - BARBIE */}
      {step === 2 && (
        <div className="scene barbie">
          <div className="float">💖💅✨</div>

          <h1 onClick={next}>💖 Barbie</h1>

          <p>
            "You are confident, beautiful & unstoppable 🌸  
            Always stay fabulous 💕"
          </p>

          <button onClick={next}>Go to Ocean</button>
        </div>
      )}

      {/* STEP 3 - MOANA */}
      {step === 3 && (
        <div className="scene moana">
          <div className="wave">🌊🌊🌊</div>

          <h1 onClick={next}>🌊 Moana</h1>

          <p>
            "Be brave like the ocean 💙  
            Your journey is just beginning ⛵"
          </p>

          <button onClick={next}>Final Surprise</button>
        </div>
      )}

      {/* FINAL */}
      {step === 4 && (
        <div className="scene final">
          <div className="sparkles">✨💖🎆✨</div>

          <h1>💝 All Princesses Together Say:</h1>

          <p className="big">
            “You are magical, strong, beautiful & deeply loved 💖”
          </p>
            <a href="/part4">
          <button onClick={() => setStep(0)}>
            🔁 Replay Magic
          </button>
          </a>
        </div>
      )}

    </div>
  );
}

