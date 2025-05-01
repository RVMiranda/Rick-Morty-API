import { Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Menu from './pages/base/Menu.jsx';
import EpisodeDetail from './pages/EpisodeDetail.jsx';
import Personajes from './pages/Personajes.jsx';
import PersonajeDetail from './pages/PersonajeDetail.jsx';
import BusquedaPersonajes from './pages/BusquedaPersonajes.jsx';
import Favoritos from './pages/PersonajesFavoritos.jsx';
import ExtraPage from './pages/Extra.jsx';

export default function Router() {
    return (
      <>
        <Menu />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/episode/:id" element={<EpisodeDetail />} />
          <Route path="/characters" element={<Personajes />} />
          <Route path="/character/:id" element={<PersonajeDetail />} />
          <Route path="/busqueda" element={<BusquedaPersonajes />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/extra" element={<ExtraPage />} />
        </Routes>
      </>
    );
  }