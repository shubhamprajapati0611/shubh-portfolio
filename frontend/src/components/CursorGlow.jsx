import { useEffect, useState } from "react";

function CursorGlow({ darkMode }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const newStar = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setStars((prev) => [...prev, newStar]);

      setTimeout(() => {
        setStars((prev) =>
          prev.filter((star) => star.id !== newStar.id)
        );
      }, 500);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="fixed pointer-events-none z-50 animate-pulse"
          style={{
            left: star.x,
            top: star.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="text-xl"
            style={{
              color: darkMode ? "#FFD700" : "#D4A017",
              textShadow: darkMode
                ? "0 0 8px #FFD700, 0 0 18px #FFC107, 0 0 30px #FFD700"
                : "0 0 6px #D4A017, 0 0 14px #FFD700",
            }}
          >
            ✦
          </div>
        </div>
      ))}
    </>
  );
}

export default CursorGlow;