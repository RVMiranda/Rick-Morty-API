import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PersonajeCard.css';
import { useLikes } from '../context/LikesContext';

export default function PersonajeCard({ personaje }) {
  const { likes, toggleLike } = useLikes();
  const liked = likes[personaje.id];

  return (
    <div className="personaje-card">
      <div className="personaje-info">
        <h2>{personaje.name}</h2>
        <p>{personaje.status} | {personaje.species} | {personaje.gender}</p>

        <Link to={`/character/${personaje.id}`} className="detalle-btn">
          Ir al detallado
        </Link>

        <button onClick={() => toggleLike({ type: "LIKE", payload: personaje.id })} className="like-btn">
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="personaje-imagen">
        <img src={personaje.image} alt={personaje.name} />
      </div>
    </div>
  );
}
