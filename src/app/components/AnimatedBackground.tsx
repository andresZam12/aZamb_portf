"use client";

interface AnimatedBackgroundProps {
  isDark: boolean;
}

export default function AnimatedBackground({ isDark }: AnimatedBackgroundProps) {
  
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20, // 20-80px
    left: Math.random() * 100, // 0-100%
    top: Math.random() * 100, // 0-100%
    delay: Math.random() * 5, // 0-5s
    duration: Math.random() * 15 + 15, // 15-30s
    opacity: Math.random() * 0.15 + 0.05, // 0.05-0.2
  }));

  return (
    <>
      {/* Fondo de 3 franjas con gradiente animado sutil */}
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 animate-gradient-shift ${
          isDark
            ? "bg-[linear-gradient(to_right,#1a1a1a_0%,#1a1a1a_33.34%,#2d2d2d_33.34%,#2d2d2d_66.67%,#404040_66.67%,#404040_100%)]"
            : "bg-[linear-gradient(to_right,#3b2a23_0%,#3b2a23_33.34%,#8b5e3c_33.34%,#8b5e3c_66.67%,#c48758_66.67%,#c48758_100%)]"
        }`}
      />

      {/* Partículas flotantes */}
      <div className="absolute inset-0 -z-9 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full animate-float ${
              isDark ? "bg-white" : "bg-yellow-400"
            }`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: particle.opacity,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              filter: "blur(2px)",
            }}
          />
        ))}
      </div>
    </>
  );
}
