// import React, { useEffect, useMemo, useState } from "react";
// import "./HeartTree.css";

// const COLORS = [
//   "#ff1744",
//   "#ff5252",
//   "#ff8a80",
//   "#ff4081",
//   "#ff7043",
//   "#ffab91",
//   "#ff6f61",
// ];

// function random(min, max) {
//   return Math.random() * (max - min) + min;
// }

// // TRUE filled heart shape generator
// function createHeartShape(count) {
//   const hearts = [];

//   while (hearts.length < count) {
//     const x = random(-1.2, 1.2);
//     const y = random(-1.2, 1.2);

//     // Heart equation
//     const formula =
//       Math.pow(x * x + y * y - 1, 3) -
//       x * x * Math.pow(y, 3);

//     // INSIDE heart area
//     if (formula <= 0) {
//       hearts.push({
//         x,
//         y,
//       });
//     }
//   }

//   return hearts;
// }

// export default function HeartTree() {
//   const [falling, setFalling] = useState([]);

//   const leaves = useMemo(() => createHeartShape(220), []);

//   // Falling hearts animation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFalling((prev) => [
//         ...prev.slice(-25),
//         {
//           id: Date.now() + Math.random(),
//           left: random(38, 62),
//           size: random(12, 24),
//           duration: random(4, 8),
//           color:
//             COLORS[Math.floor(Math.random() * COLORS.length)],
//         },
//       ]);
//     }, 350);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="scene">
//       {/* Falling Hearts */}
//       {falling.map((h) => (
//         <div
//           key={h.id}
//           className="falling-heart"
//           style={{
//             left: `${h.left}%`,
//             width: `${h.size}px`,
//             height: `${h.size}px`,
//             background: h.color,
//             animationDuration: `${h.duration}s`,
//           }}
//         />
//       ))}

//       {/* Tree trunk */}
//       <div className="trunk"></div>

//       {/* Branches */}
//       <div className="branch left"></div>
//       <div className="branch right"></div>

//       {/* Tree canopy */}
//       <div className="canopy">
//         {leaves.map((leaf, i) => {
//           const size = random(18, 42);

//           return (
//             <div
//               key={i}
//               className="leaf"
//               style={{
//                 left: `${leaf.x * 180 + 300}px`,
//                 top: `${-leaf.y * 180 + 260}px`,
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 background:
//                   COLORS[
//                     Math.floor(Math.random() * COLORS.length)
//                   ],
//                 animationDelay: `${random(0, 3)}s`,
//               }}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import "./growingtree.css";

// const leaves = [
//   { x: 250, y: 180 },
//   { x: 300, y: 140 },
//   { x: 350, y: 170 },
//   { x: 220, y: 240 },
//   { x: 280, y: 220 },
//   { x: 360, y: 240 },
//   { x: 420, y: 190 },
//   { x: 190, y: 170 },
//   { x: 260, y: 110 },
//   { x: 340, y: 110 },
//   { x: 400, y: 150 },
//   { x: 230, y: 300 },
//   { x: 320, y: 290 },
//   { x: 390, y: 260 },
// ];

// export default function GrowingHeartTree() {
//   const [visibleLeaves, setVisibleLeaves] = useState([]);

//   useEffect(() => {
//     let i = 0;

//     const interval = setInterval(() => {
//       setVisibleLeaves((prev) => [...prev, i]);
//       i++;

//       if (i >= leaves.length) clearInterval(interval);
//     }, 250);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="tree-container">
//       <svg
//         width="600"
//         height="700"
//         viewBox="0 0 600 700"
//         className="tree-svg"
//       >
//         {/* Trunk */}
//         <path
//           d="M300 650 C300 500 290 420 300 350"
//           className="tree-path trunk"
//         />

//         {/* Branches */}
//         <path
//           d="M300 420 C240 360 190 300 150 220"
//           className="tree-path branch1"
//         />

//         <path
//           d="M300 420 C360 350 420 280 470 210"
//           className="tree-path branch2"
//         />

//         <path
//           d="M300 360 C260 300 230 240 210 180"
//           className="tree-path branch3"
//         />

//         <path
//           d="M300 360 C340 300 390 240 430 170"
//           className="tree-path branch4"
//         />

//         <path
//           d="M300 320 C300 250 300 180 300 120"
//           className="tree-path branch5"
//         />
//       </svg>

//       {/* Leaves */}
//       {leaves.map((leaf, index) => (
//         <div
//           key={index}
//           className={`heart ${
//             visibleLeaves.includes(index) ? "show" : ""
//           }`}
//           style={{
//             left: `${leaf.x}px`,
//             top: `${leaf.y}px`,
//             background: [
//               "#ff1744",
//               "#ff4081",
//               "#ff5252",
//               "#ff6f61",
//               "#ff8a80",
//             ][index % 5],
//           }}
//         />
//       ))}
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import "./growingtree.css";

// const leaves = [
//   // LEFT BIG BRANCH
//   { x: 240, y: 360 },
//   { x: 220, y: 330 },
//   { x: 200, y: 300 },
//   { x: 180, y: 270 },
//   { x: 160, y: 240 },

//   // RIGHT BIG BRANCH
//   { x: 340, y: 350 },
//   { x: 370, y: 320 },
//   { x: 400, y: 280 },
//   { x: 430, y: 240 },
//   { x: 450, y: 210 },

//   // LEFT TOP
//   { x: 250, y: 260 },
//   { x: 230, y: 220 },
//   { x: 210, y: 180 },

//   // RIGHT TOP
//   { x: 350, y: 250 },
//   { x: 380, y: 210 },
//   { x: 410, y: 170 },

//   // CENTER TOP
//   { x: 300, y: 250 },
//   { x: 300, y: 210 },
//   { x: 300, y: 170 },
//   { x: 300, y: 130 },
// ];

// Replace your current leaves array with this bigger one

const leaves = [
  // LEFT LOWER
  { x: 250, y: 380 },
  { x: 235, y: 360 },
  { x: 220, y: 340 },
  { x: 205, y: 320 },
  { x: 190, y: 300 },
  { x: 175, y: 280 },
  { x: 160, y: 260 },
  { x: 145, y: 240 },


  // LEFT MID
  { x: 240, y: 300 },
  { x: 225, y: 280 },
  { x: 210, y: 260 },
  { x: 195, y: 240 },
  { x: 180, y: 220 },

  // LEFT TOP
  { x: 260, y: 240 },
  { x: 245, y: 220 },
  { x: 230, y: 200 },
  { x: 215, y: 180 },
  { x: 200, y: 160 },

  // CENTER
  { x: 300, y: 320 },
  { x: 300, y: 290 },
  { x: 300, y: 260 },
  { x: 300, y: 230 },
  { x: 300, y: 200 },
  { x: 300, y: 170 },
  { x: 300, y: 140 },

  // RIGHT LOWER
  { x: 340, y: 370 },
  { x: 355, y: 350 },
  { x: 370, y: 330 },
  { x: 385, y: 310 },
  { x: 400, y: 290 },
  { x: 415, y: 270 },
  { x: 430, y: 250 },
  { x: 445, y: 230 },

  // RIGHT MID
  { x: 350, y: 290 },
  { x: 365, y: 270 },
  { x: 380, y: 250 },
  { x: 395, y: 230 },
  { x: 410, y: 210 },

  // RIGHT TOP
  { x: 340, y: 230 },
  { x: 355, y: 210 },
  { x: 370, y: 190 },
  { x: 385, y: 170 },
  { x: 400, y: 150 },

  // EXTRA FILL
  { x: 270, y: 250 },
  { x: 280, y: 220 },
  { x: 320, y: 220 },
  { x: 330, y: 250 },

  { x: 260, y: 180 },
  { x: 340, y: 180 },

  { x: 240, y: 140 },
  { x: 360, y: 140 },

  // OUTER GLOW STYLE
  { x: 130, y: 220 },
  { x: 470, y: 210 },

  { x: 170, y: 150 },
  { x: 430, y: 130 },
];


export default function GrowingHeartTree() {
  const [visibleLeaves, setVisibleLeaves] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleLeaves((prev) => [...prev, index]);

      index++;

      if (index >= leaves.length) {
        clearInterval(interval);
      }
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tree-container">
      <svg
        width="600"
        height="700"
        viewBox="0 0 600 700"
        className="tree-svg"
      >
        {/* MAIN TRUNK */}
        <path
          d="M300 650 C300 520 295 430 300 350"
          className="tree-path trunk"
        />

        {/* LEFT BRANCH */}
        <path
          d="M300 380 C250 340 210 290 150 220"
          className="tree-path branch"
        />

        {/* RIGHT BRANCH */}
        <path
          d="M300 380 C360 330 410 280 470 200"
          className="tree-path branch"
        />

        {/* LEFT TOP */}
        <path
          d="M300 320 C260 260 230 210 200 160"
          className="tree-path branch"
        />

        {/* RIGHT TOP */}
        <path
          d="M300 320 C350 260 390 210 430 150"
          className="tree-path branch"
        />

        {/* CENTER */}
        <path
          d="M300 320 C300 250 300 190 300 120"
          className="tree-path branch"
        />
      </svg>

      {/* LEAVES */}
      {leaves.map((leaf, index) => (
        <div
          key={index}
          className={`heart ${
            visibleLeaves.includes(index) ? "show" : ""
          }`}
          style={{
            left: `${leaf.x}px`,
            top: `${leaf.y}px`,
            background: [
              "#ff1744",
              "#ff4081",
              "#ff5252",
              "#ff6f61",
              "#ff8a80",
            ][index % 5],
          }}
        />
      ))}
    </div>
  );
}
