import React from 'react'
import ParticleBackground from './components/ParticleBackground'
import HeroSection from './components/HeroSection'
import PredictionForm from './components/PredictionForm'
import ResultsCard from './components/ResultsCard'

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticleBackground />
      <HeroSection />
      <PredictionForm />
      <ResultsCard />
    </div>
  )
}
