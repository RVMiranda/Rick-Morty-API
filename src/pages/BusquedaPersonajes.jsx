import React, { useEffect, useState } from "react";
import PersonajeCard from "../components/PersonajeCard";
import "../styles/BusquedaPersonajes.css";

export default function BusquedaPersonajes() {
    const [filters, setFilters] = useState({
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
    });
  
    const [personajes, setPersonajes] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);
  
    useEffect(() => {
      const fetchInicial = async () => {
        try {
          const resPrimera = await fetch("https://rickandmortyapi.com/api/character?page=1");
          const dataPrimera = await resPrimera.json();
          const primeros = dataPrimera.results.slice(0, 2);
  
          const resUltima = await fetch("https://rickandmortyapi.com/api/character?page=42");
          const dataUltima = await resUltima.json();
          const ultimos = dataUltima.results.slice(-2);
  
          setPersonajes([...primeros, ...ultimos]);
        } catch (error) {
          console.error("Error al cargar personajes iniciales:", error);
          setPersonajes([]);
        }
      };
  
      fetchInicial();
    }, []);
  
    const handleChange = (e) => {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      let query = "";
  
      for (const key in filters) {
        if (filters[key]) {
          query += `${query ? "&" : "?"}${key}=${filters[key]}`;
        }
      }
  
      fetch(`https://rickandmortyapi.com/api/character/${query}`)
        .then((res) => res.json())
        .then((data) => {
          setPersonajes(data.results || []);
          setIsSearchActive(true);
        })
        .catch(() => {
          setPersonajes([]);
          setIsSearchActive(true);
        });
    };
  
    return (
      <div className="busqueda-container">
        <h1>Buscar Personajes</h1>
  
        <form onSubmit={handleSearch} className="formulario-busqueda">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={filters.name}
            onChange={handleChange}
          />
          <select name="status" onChange={handleChange}>
            <option value="">Estado</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <input
            type="text"
            name="species"
            placeholder="Especie"
            value={filters.species}
            onChange={handleChange}
          />
          <input
            type="text"
            name="type"
            placeholder="Tipo"
            value={filters.type}
            onChange={handleChange}
          />
          <select name="gender" onChange={handleChange}>
            <option value="">Género</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
  
          <button type="submit">Buscar</button>
        </form>
  
        <div className="grid-busqueda">
          {personajes.length === 0 ? (
            <p>No se encontraron personajes.</p>
          ) : (
            personajes.map((p) => <PersonajeCard key={p.id} personaje={p} />)
          )}
        </div>
      </div>
    );
  }
