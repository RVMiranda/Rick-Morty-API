import React, { useEffect, useState } from 'react';
import PersonajeCard from '../components/PersonajeCard';

export default function Personajes() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setPersonajes(data.results))
      .catch(err => console.error('Error cargando personajes:', err));
  }, []);

  return (
    <div style={styles.grid}>
      {personajes.map(p => (
        <PersonajeCard key={p.id} personaje={p} />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    padding: '2rem'
  }
};
