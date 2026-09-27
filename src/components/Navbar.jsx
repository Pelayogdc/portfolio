function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="logo">
                    Pelayo<span>.</span>
                </a>


                <div className="nav-links">
                    <a href="#sobre-mi">Sobre mí</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#tecnologias">Tecnologías</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar