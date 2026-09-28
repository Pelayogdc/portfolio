import { useState } from "react"

function Navbar() {
    
    const[menuOpen, setMenuOpen] = useState(false)
    
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="logo">
                    Pelayo<span>.</span>
                </a>

                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    {menuOpen ? 'X' : '☰'}
                </button>


                <div className={"nav-links ${menuOpen ? 'open : ''}"}>
                    <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>Sobre mí</a>
                    <a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a>
                    <a href="#tecnologias" onClick={() => setMenuOpen(false)}>Tecnologías</a>
                    <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar