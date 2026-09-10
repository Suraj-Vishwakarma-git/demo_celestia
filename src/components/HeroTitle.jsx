import { useEffect, useState } from "react";

const letters = "LEADERBOARD".split("");

export default function HeroTitle() {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    setVisibleLetters(0);

    const interval = setInterval(() => {
      setVisibleLetters((current) => {
        if (current >= letters.length) {
          clearInterval(interval);
          return current;
        }

        return current + 1;
      });
    }, 130);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero-title">
      <div className="title-animation">
        <div
          className="pixel-runner"
          style={{
            left: `${Math.min(visibleLetters, letters.length) * 8.5}%`,
          }}
        >
          ◆
        </div>

        <h1>
          {letters.map((letter, index) => (
            <span
              key={index}
              className={index < visibleLetters ? "letter visible" : "letter"}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}