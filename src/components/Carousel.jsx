import { useState, useEffect } from 'react'
const Carousel = ({ images, autoPlay = true, interval = 4000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval])

  return (
    <div className="carousel-container" style={{
      position: 'relative',
      maxWidth: '700px',
      margin: '0 auto',
      overflow: 'hidden',
      borderRadius: 'var(--border-radius-lg)',
      boxShadow: 'var(--shadow-strong)'
    }}>
      <div className="carousel-track" style={{
        display: 'flex',
        transition: 'transform 0.5s ease',
        transform: `translateX(-${currentSlide * 100}%)`
      }}>
        {images.map((image, index) => (
          <div key={index} className="image-hover-effect" style={{ width: '100%', flexShrink: 0 }}>
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        ))}
      </div>
      <button 
        className="carousel-btn-modern" 
        onClick={prevSlide}
        style={{
          left: '15px'
        }}
      >‹</button>
      <button 
        className="carousel-btn-modern" 
        onClick={nextSlide}
        style={{
          right: '15px'
        }}
      >›</button>
      
      {/* Indicadores */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px'
      }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentSlide ? 'var(--accent-red)' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel