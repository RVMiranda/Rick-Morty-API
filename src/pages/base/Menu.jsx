import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <header>
            <nav>
                <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
                    <li><Link to="/">Inicio</Link></li>
                </ul>
                <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
                    <li><Link to="/characters">Personajes</Link></li>
                </ul>
                <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
                    <li><Link to="/busqueda">Busqueda de Personajes</Link></li>
                </ul>
            </nav>
        </header>
    );
}
