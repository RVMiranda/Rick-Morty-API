import React, { useEffect, useState } from "react";
import { useLikes } from "../context/LikesContext";
import PersonajeCard from "../components/PersonajeCard";

export default function Favoritos() {
  const { likes } = useLikes();
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const likedIds = Object.keys(likes).filter(id => likes[id]);
    if (likedIds.length === 0) {
      setPersonajes([]);
      return;
    }

    const fetchFavoritos = async () => {
      try {
        const requests = likedIds.map(id =>
          fetch(`https://rickandmortyapi.com/api/character/${id}`).then(res => res.json())
        );
        const results = await Promise.all(requests);
        setPersonajes(results);
      } catch (error) {
        console.error("Error cargando personajes favoritos:", error);
        setPersonajes([]);
      }
    };

    fetchFavoritos();
  }, [likes]);

  return (
    <div style={styles.contenedor}>
      <h1>Mis Personajes Favoritos ❤️</h1>

      {personajes.length === 0 ? (
        <p>No has marcado personajes como favoritos aún.</p>
      ) : (
        <div style={styles.grid}>
          {personajes.map(p => (
            <PersonajeCard key={p.id} personaje={p} />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    paddingTop: "1rem",
  }
};
