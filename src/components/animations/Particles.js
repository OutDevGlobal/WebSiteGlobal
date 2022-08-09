import React, {useCallback} from  'react'
import Particles from "react-particles"
import { loadFull } from "tsparticles"

export const BGParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    await loadFull(engine)
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, []);

  return <>
    <div id="particles-js">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: '#ffffff',
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 0.1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  </>
}