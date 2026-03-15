import React from 'react'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-800">Photo Gallery</h1>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <Gallery />
      </main>
    </div>
  )
}

export default App