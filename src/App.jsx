import Navbar from './components/Navbar'
import ProjectCarousel from './components/ProjectCarousel'


function App() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <p className="hero-greeting">¡Hola, soy</p>

          <h1>
            Pelayo<span>!</span>
          </h1>

          <h2>Desarrollador de Aplicaciones Multiplataforma</h2>

          <p className="hero-description">
            Creo aplicaciones y soluciones digitales mientras sigo aprendiendo y creciendo como desarrollador.
          </p>

          <div className="hero-buttons">
            <a href="#proyectos" className="button primary">Ver proyectos
            </a>


            <a href="#contacto" className="button secondary">
              Contactarme
            </a>
          </div>
        </section>

        <section id="sobre-mi" className="about">
          <div className="about-header">
            <p className="section-label">SOBRE MÍ</p>

            <h2>Me gusta convertir ideas en
              <span> aplicaciones.</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                Soy desarrollador de aplicaciones multiplataforma, recientemente titulado en DAM,
                y actualmente estoy buscando mi primera oportunidad profesional como desarrollador.
              </p>

              <p>
                Durante mi formación he trabajado con diferentes lenguajes, frameworks y bases de datos,
                desarrollando aplicaciones tanto de forma individual como en equipo. Durante mis
                prácticas de empresa participé junto a mis compañeros en el desarrollo de Bravo, una
                aplicación de gestión de reservas desarrollada con Flutter.
              </p>

              <p>
                Me interesa especialmente el desarrollo de software y las aplicaciones móviles. Actualmente
                sigo ampliando mis conocimientos en Flutter y Dart y desarrollando proyectos propios para
                continuar mejorando como programador.
              </p>
            </div>

            <div className="about-cards">
              <div className="about-card">
                <span className="about-card-icon">🎓</span>

                <div>
                  <h3>Formación</h3>
                  <p>Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)</p>
                </div>
              </div>

              <div className="about-card">
                <span className="about-card-icon">💻</span>

                <div>
                  <h3>Enfoque</h3>
                  <p>Desarrollo de software y aplicaciones móviles</p>
                </div>
              </div>

              <div className="about-card">
                <span className="about-card-icon">🚀</span>

                <div>
                  <h3>Actualmente</h3>
                  <p>Profundizando en Flutter y Dart y desarrollando proyectos propios</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="projects">
          <div className="projects-header">
            <p className="section-label">PROYECTOS</p>

            <h2>
              Cosas que he <span>desarrollado.</span>
            </h2>

            <p className="projects-intro">
              Algunos de los proyectos en los que he trabajado durante mi formación
              y mi aprendizaje como desarrollador.
            </p>
          </div>

          <div className="projects-grid">

            <article className="project-card">
              <div className="project-image">
                <ProjectCarousel />
              </div>

              <div className="projects-content">
                <div className="project-top">
                  <span className="project-type">
                    Proyecto de prácticas
                  </span>

                  <span className="project-number"> 01</span>
                </div>

                <h3>Bravo</h3>

                <p className="project-description">
                  Aplicación de gestión de reservas desarrollada en equipo
                  durante mis prácticas de empresa utilizando Flutter.
                </p>

                <div className="project-role">
                  <h4>Mi aportación</h4>

                  <ul>
                    <li>
                      Diseño de ventanas y flujo de navegación junto a otro compañero.
                    </li>

                    <li>
                      Desarrollo de las funcionalidades de gestión de inventario.
                    </li>

                    <li>
                      Implementación del acceso mediante autenticación biométrica.
                    </li>
                  </ul>
                </div>

                <div className="project-technologies">
                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>Biometría</span>
                </div>

              </div>

            </article>
          </div>
        </section>

        <section id="tecnologias" className="technologies">

          <div className="technologies-header">
            <p className="section-label">TECNOLOGÍAS</p>

            <h2>
              Las herramientas con las que
              <span> construyo.</span>
            </h2>

            <p className="technologies-intro">
              Tecnologías que he utilizado durante mi formación y en mis proyectos,
              junto con aquellas que estoy aprendiendo actualmente.
            </p>
          </div>

          <div className="technologies-grid">

            <div className="technology-group">
              <h3>Lenguajes</h3>

              <div className="technology-list">
                <div className="technology-item">
                  <span>Java</span>
                  <small>Experiencia / formación</small>
                </div>

                <div className="technology-item">
                  <span>Dart</span>
                  <small>Experiencia / formación</small>
                </div>

                <div className="technology-item">
                  <span>JavaScript</span>
                  <small className="learning">En aprendizaje</small>
                </div>

                <div className="technology-item">
                  <span>Python</span>
                  <small className="previous">Experiencia previa</small>
                </div>

                <div className="technology-item">
                  <span>SQL</span>
                  <small>Experiencia / formación</small>
                </div>
              </div>
            </div>

            <div className="technology-group">
              <h3>Desarrollo</h3>

              <div className="technology-list">
                <div className="technology-item">
                  <span>Flutter</span>
                  <small>Experiencia / formación</small>
                </div>

                <div className="technology-item">
                  <span>Flame</span>
                  <small>Experiencia / formación</small>
                </div>

                <div className="technology-item">
                  <span>HTML</span>
                  <small className="learning">En aprendizaje</small>
                </div>

                <div className="technology-item">
                  <span>CSS</span>
                  <small className="learning">En aprendizaje</small>
                </div>
              </div>
            </div>

            <div className="technology-group">
              <h3>Bases de datos</h3>

              <div className="technology-list">
                <div className="technology-item">
                  <span>MySQL</span>
                  <small>Experiencia / formación</small>
                </div>

                <div className="technology-item">
                  <span>MongoDB</span>
                  <small>Experiencia / formación</small>
                </div>
              </div>
            </div>

            <div className="technology-group">
              <h3>Herramientas</h3>

              <div className="technology-list">
                <div className="technology-item">
                  <span>Git</span>
                  <small>Experiencia / formación</small>
                </div>
              </div>
            </div>

          </div>

          <div className="technology-legend">
            <span>
              <i className="legend-dot"></i>
              Experiencia / formación
            </span>

            <span>
              <i className="legend-dot learning-dot"></i>
              En aprendizaje
            </span>

            <span>
              <i className="legend-dot previous-dot"></i>
              Experiencia previa
            </span>
          </div>

        </section>

        <section id="contacto" className="contact">

          <div className="contact-header">
            <p className="section-label">CONTACTO</p>

            <h2>
              ¿Hablamos<span>?</span>
            </h2>

            <p>
              Si estás buscando un desarrollador junior o quieres
              saber más sobre alguno de mis proyectos, puedes
              ponerte en contacto conmigo.
            </p>
          </div>

          <div className="contact-content">

            <div className='contact-links'>

              <a
                href="mailto:gonzalezdecastrop@gmail.com"
                className="contact-item"
              >
                <div className="contact-icon">
                  ✉
                </div>

                <div>
                  <span>Email</span>
                  <p>gonzalezdecastrop@gmail.com</p>
                </div>

                <span className="contact-arrow">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/pelayo-gonzález-de-castro-92b3a8198"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item">
                <div className="contact-icon">
                  in
                </div>

                <div>
                  <span>LinkedIn</span>
                  <p>Mi perfil profesional</p>
                </div>

                <span className='contact-arrow'>↗</span>
              </a>


              <a
                href="https://github.com/Pelayogdc"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">
                  &lt;/&gt;
                </div>

                <div>
                  <span>GitHub</span>
                  <p>Mis proyectos</p>
                </div>

                <span className="contact-arrow">↗</span>
              </a>

            </div>

            <div className="contact-cv">

              <h3>¿Quieres conocerme un poco más?</h3>

              <p>
                Puedes consultar mi currículum para conocer mi formación,
                experiencia y conocimientos.
              </p>

              <a
                href="/CV_Pelayo_Gonzalez.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-button"
              >
                Descargar CV
                <span>↗</span>
              </a>

            </div>
          </div>
        </section>

        <footer className="footer">

          <div className="footer-content">

            <div className="footer-info">
              <h3>Pelayo González de Castro</h3>

              <p>
                Desarrollador de aplicaciones multiplataforma
              </p>
            </div>

            <div className="footer-links">

              <a
                href="https://github.com/Pelayogdc"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/pelayo-gonzález-de-castro-92b3a8198"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a href="mailto:gonzalezdecastrop@gmail.com">
                Email
              </a>

            </div>
          </div>

          <div className="footer-bottom">

            <p>
              © 2026 Pelayo González de Castro
            </p>

            <p>
              DAM · Flutter · Dart · Java
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
