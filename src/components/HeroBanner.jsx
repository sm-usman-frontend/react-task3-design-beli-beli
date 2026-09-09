import { useEffect, useState } from 'react'
import heroBg from '../assets/hero_bg.webp'
import heroBg2 from '../assets/hero_bg2.png'
import heroImg from '../assets/hero_bg_watches.png'

const heroSlides = [
  { image: heroBg, eyebrow: '#Big Fashion Sale', title: <>Limited Time Offer!<br />Up to <em>50% OFF!</em></>, caption: 'Redefine Your Everyday Style' },
  { image: heroBg2, eyebrow: '#Fresh Arrivals', title: <>Find Your<br /><em>Everyday Essentials</em></>, caption: 'New looks made for every moment' },
  { image: heroImg, eyebrow: '#Time To Shine', title: <>Style That<br /><em>Moves With You</em></>, caption: 'Discover watches and more' },
]

function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 4000)
    return () => clearInterval(id)
  }, [])

  const goTo = (idx) => setCurrent(idx)
  const slide = heroSlides[current]
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="hero-content">
        <small>{slide.eyebrow}</small>
        <h1>{slide.title}</h1>
        <p>{slide.caption}</p>
        <div className="hero-dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`dot ${idx === current ? 'active' : ''}`}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
