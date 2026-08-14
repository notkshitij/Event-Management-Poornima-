import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SplashScreen from './pages/SplashScreen.jsx'
import Explore from './pages/Explore.jsx'
import ProblemStatements from './pages/ProblemStatements.jsx'
import InfoPage from './pages/InfoPage.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/problems" element={<ProblemStatements />} />
        <Route path="/info/:type" element={<InfoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
