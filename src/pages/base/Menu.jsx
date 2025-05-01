import { Link } from "react-router-dom";
import '../../styles/Menu.css';

export default function Menu() {
    return (
        <header className="menu-container">
            <div className="menu-left">
                <div className="hamburger">☰</div>
            </div>
            <div className="menu-logo">
                <img src="/images/Logo.webp" alt="Rick and Morty"/>
            </div>
            <div className="menu-right">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/characters">Personajes</Link></li>
                <li><Link to="/busqueda">Busqueda de Personajes</Link></li>
                <li><Link to="/favoritos">Personajes favoritos</Link></li>
                <li><Link to="/extra">Pagina extra</Link></li>
            </div>
            
        </header>
    );
}
