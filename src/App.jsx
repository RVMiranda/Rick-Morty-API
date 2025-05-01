import React, { useState, useEffect } from 'react'
import './App.css'
import EpisodeCard from './components/EpisodeCard'

function App() {
  const [episodios, setEpisodios] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then((response) => response.json())
      .then((data) => setEpisodios(data.results))
      .catch((error) => console.error('Error fetching episodes:', error));
  }, [])

  return (
    <>
      <div className="app-container">
        <h1>Episodios de Rick & Morty</h1>
        <div className="grid-container">
          {episodios.map(episodios => (
            <EpisodeCard key={episodios.id} episode={episodios} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
