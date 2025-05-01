import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/EpisodeCard.css';

export default function EpisodeCard({ episode }) {
  const [imageUrl, setImageUrl] = useState('');
  const [likes, setLikes] = useState(0);
  const [noLikes, setNoLikes] = useState(0);

  const storageKey = `episode-${episode.id}-votes`;

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem(storageKey));
    if (storedVotes) {
      setLikes(storedVotes.likes || 0);
      setNoLikes(storedVotes.noLikes || 0);
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify({ likes, noLikes }));
  }, [likes, noLikes, storageKey]);

  useEffect(() => {
    if (episode.characters.length > 0) {
      fetch(episode.characters[0])
        .then(res => res.json())
        .then(data => setImageUrl(data.image))
        .catch(err => console.error('Error cargando imagen:', err));
    }
  }, [episode.characters]);

  return (
    <div className="episode-card">
      {imageUrl && (
        <img src={imageUrl} alt={`Imagen de ${episode.name}`} className="episode-image" />
      )}
      <div className="episode-content">
        <div className="episode-info">
          <h3>
            <Link to={`/episode/${episode.id}`} className="episode-link">
              {episode.name}
            </Link>
          </h3>
          <p>Fecha de transmisión: {episode.air_date}</p>
          <p>Código del episodio: {episode.episode}</p>
        </div>
        <div className="episode-buttons">
          <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
          <button onClick={() => setNoLikes(noLikes + 1)}>👎 {noLikes}</button>
        </div>
      </div>
    </div>
  );
}
