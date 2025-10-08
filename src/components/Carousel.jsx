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
      maxWidth: '600px',
      margin: '0 auto',
      overflow: 'hidden',
      borderRadius: '8px'
    }}>
      <div className="carousel-track" style={{
        display: 'flex',
        transition: 'transform 0.5s ease',
        transform: `translateX(-${currentSlide * 100}%)`
      }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{
              width: '100%',
              flexShrink: 0,
              height: '300px',
              objectFit: 'cover'
            }}
          />
        ))}
      </div>
      <button 
        className="carousel-btn prev" 
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(208,0,0,0.8)',
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer'
        }}
      >‹</button>
      <button 
        className="carousel-btn next" 
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(208,0,0,0.8)',
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer'
        }}
      >›</button>
    </div>
  )
}

export default Carousel