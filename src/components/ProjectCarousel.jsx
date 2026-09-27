import { useState } from 'react'

import bravoAdmin from '../assets/bravo/bravo-admin.png'
import bravoCarrito from '../assets/bravo/bravo-carrito.png'
import bravoLogin from '../assets/bravo/bravo-login.png'
import bravoPrincipal from '../assets/bravo/bravo-principal.png'
import bravoUsuarios from '../assets/bravo/bravo-usuarios.png'


function ProjectCarousel() {
  const images = [
    {
      src: bravoPrincipal,
      alt: 'Pantalla principal de la aplicación Bravo',
    },
    {
      src: bravoLogin,
      alt: 'Pantalla de inicio de sesión de Bravo',
    },
    {
      src: bravoCarrito,
      alt: 'Pantalla de confirmación y carrito de Bravo',
    },
    {
      src: bravoAdmin,
      alt: 'Pantalla de administrador de Bravo',
    },
    {
      src: bravoUsuarios,
      alt: 'Pantalla de gestion de usuarios',
    },
  ]

  const [currentImage, setCurrentImage] = useState(0)

  const previousImage = () => {
    setCurrentImage(
      currentImage === 0
        ? images.length - 1
        : currentImage - 1
    )
  }

  const nextImage = () => {
    setCurrentImage(
      currentImage === images.length - 1
        ? 0
        : currentImage + 1
    )
  }

  return (
    <div className="project-carousel">

      <img
        src={images[currentImage].src}
        alt={images[currentImage].alt}
      />

      <button
        className="carousel-button carousel-previous"
        onClick={previousImage}
        aria-label="Imagen anterior"
      >
        ‹
      </button>

      <button
        className="carousel-button carousel-next"
        onClick={nextImage}
        aria-label="Imagen siguiente"
      >
        ›
      </button>

      <div className="carousel-indicators">
        {images.map((image, index) => (
          <button
            key={image.src}
            className={
              index === currentImage
                ? 'indicator active'
                : 'indicator'
            }
            onClick={() => setCurrentImage(index)}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>

    </div>
  )
}

export default ProjectCarousel