import React, { useState } from 'react'

export default function PredictionForm() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handlePredict = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <form
      onSubmit={handlePredict}
      className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-gray-800 p-6 rounded-2xl shadow-xl"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter food name (e.g., Oat Milk)"
        className="px-4 py-2 rounded-lg text-gray-900 w-72"
        required
      />
      <button
        type="submit"
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition duration-300"
      >
        {loading ? 'Predicting...' : 'Predict'}
      </button>
    </form>
  )
}
