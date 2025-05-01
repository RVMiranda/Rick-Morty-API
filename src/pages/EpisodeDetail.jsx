import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLikes } from "../context/LikesContext";
import "../styles/EpisodeDetail.css";

export default function EpisodeDetail() {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);
  const { likes } = useLikes();

  useEffect(() => {
    const fetchEpisode = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const data = await res.json();
      setEpisode(data);
  
      const allCharacters = await Promise.all(
        data.characters.map((url) => fetch(url).then((res) => res.json()))
      );
  
      const likedInEpisode = allCharacters.filter((char) => likes[char.id]);
      const unlikedInEpisode = allCharacters.filter((char) => !likes[char.id]);
  
      const displayCharacters = [...likedInEpisode, ...unlikedInEpisode].slice(0, 3);
  
      setCharacters(displayCharacters);
    };
  
    fetchEpisode();
  }, [id, likes]);

  if (!episode) return <p style={{ textAlign: "center" }}>Cargando episodio...</p>;

  return (
    <div className="episode-detail">
      <h1>
        <span className="episode-title">{episode.name}</span>
      </h1>

      <h3 className="subtitle">Fecha de estreno y código de episodio</h3>

      <p className="description">Fecha: {episode.air_date}</p>
      <p className="description">Código: {episode.episode}</p>

      <div className="character-gallery">
        {characters.map((char) => (
          <img key={char.id} src={char.image} alt={char.name} />
        ))}
      </div>

      <h4 className="gallery-caption">Los tres personajes favoritos</h4>
    </div>
  );
}
