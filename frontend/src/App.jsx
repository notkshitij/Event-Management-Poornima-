import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import ExploreEvents from './pages/ExploreEvents.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<ExploreEvents />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
