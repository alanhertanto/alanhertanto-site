import { useEffect } from "react";
import { tsParticles } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

export default function ParticlesBackground() {
  useEffect(() => {
    (async () => {
      await loadLinksPreset(tsParticles);
      await tsParticles.load("tsparticles", {
        preset: "links",
        background: {
          color: {
            value: "#0d0d0d", // bisa kamu sesuaikan
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
      });
    })();
  }, []);

  return <div id="tsparticles" className="fixed top-0 left-0 w-full h-full -z-10" />;
}
