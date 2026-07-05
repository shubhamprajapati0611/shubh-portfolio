import Particles from "@tsparticles/react";

function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 40,
          },
          color: {
            value: ["#3b82f6", "#8b5cf6", "#ec4899"],
          },
          links: {
            enable: true,
            color: "#ffffff",
            opacity: 0.15,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 3,
          },
        },
      }}
      className="fixed inset-0 -z-10"
    />
  );
}

export default ParticlesBackground;