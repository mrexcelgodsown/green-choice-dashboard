import React from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'

export default function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: '#0f172a' },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
        },
        particles: {
          color: { value: '#00ffcc' },
          links: { color: '#00ffcc', distance: 120, enable: true, opacity: 0.4, width: 1 },
          move: { enable: true, speed: 1 },
          number: { value: 80 },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  )
}
