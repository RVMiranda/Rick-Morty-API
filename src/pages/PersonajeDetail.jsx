import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLikes } from "../context/LikesContext";
import "../styles/PersonajeDetail.css";

export default function PersonajeDetail() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const { likes, toggleLike } = useLikes();
  const liked = likes[id];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      setPersonaje(data);

      const episodeData = await Promise.all(
        data.episode.slice(0, 5).map(url => fetch(url).then(res => res.json()))
      );
      setEpisodes(episodeData);
    };

    fetchData();
  }, [id]);

  if (!personaje) return <p style={{ textAlign: "center" }}>Cargando personaje...</p>;

  return (
    <div className="personaje-detail">
      <h1 className="personaje-title">
       {personaje.name}       
      </h1>

      <h3 className="subtitle">Detalles del personaje</h3>

      <p className="description">
        Estado: {personaje.status} <br />
        Especie: {personaje.species} <br />
        Género: {personaje.gender} <br />
        Origen: {personaje.origin.name} <br />
        Ubicación actual: {personaje.location.name}
      </p>

      <div className="imagen-like-container">
        <img src={personaje.image} alt={personaje.name} className="personaje-img" />
        <button
          onClick={() => toggleLike({ type: "LIKE", payload: personaje.id })}
          className="like-btn"
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

      <h3 className="episodes-title">Episodios donde aparece:</h3>
      <ul className="episode-list">
        {episodes.map((ep) => (
          <li key={ep.id}>{ep.name} ({ep.episode})</li>
        ))}
      </ul>
    </div>
  );
}
