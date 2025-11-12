import React from 'react'

export default function ResultsCard() {
  return (
    <div className="mt-10 bg-gray-800 p-6 rounded-2xl shadow-lg text-center w-96">
      <h2 className="text-2xl font-semibold text-emerald-400 mb-2">Predicted GreenScore®</h2>
      <div className="text-5xl font-bold text-white animate-pulse">84 / 100</div>
      <p className="text-gray-400 mt-2">Healthy & Sustainable 🌱</p>
    </div>
  )
}
