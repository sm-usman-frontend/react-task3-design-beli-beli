import { useEffect, useState } from 'react'
import heroBg from '../assets/hero_bg.webp'
import heroBg2 from '../assets/hero_bg2.png'
import heroImg from '../assets/hero_bg_watches.png'

const heroImages = [heroBg, heroBg2, heroImg, heroBg, heroBg2]

function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % heroImages.length), 3000)
    return () => clearInterval(id)
  }, [])

  const goTo = (idx) => setCurrent(idx)

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${heroImages[current]})` }}
    >
      <div className="hero-content">
        <small>#Big Fashion Sale</small>
        <h1>Limited Time Offer!<br />Up to 50% OFF!</h1>
        <p>Redefine Your Everyday Style</p>
        <div className="hero-dots">
          {heroImages.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === current ? 'active' : ''}`}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              &#8226;
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
