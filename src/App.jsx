import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import SongPage from './pages/SongPage'
import Footer from './components/Footer'
import AlbumPage from './pages/AlbumPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/search/:query" element={<SearchPage />} />
      <Route path="/song/:id" element={<SongPage /> } />
      <Route path="/album/:id" element={<AlbumPage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
