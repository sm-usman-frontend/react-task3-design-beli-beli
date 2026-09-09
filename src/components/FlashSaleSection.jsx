import { useEffect, useRef, useState } from 'react'
import ProductCard from './ProductCard'
import CountdownTimer from './CountdownTimer'

function FlashSaleSection({ products }) {
  const scrollRef = useRef(null)
  const [expanded, setExpanded] = useState(false)
  const [canScroll, setCanScroll] = useState({ prev: false, next: true })

  const updateScrollState = () => {
    const container = scrollRef.current
    if (!container) return
    setCanScroll({
      prev: container.scrollLeft > 2,
      next: container.scrollLeft + container.clientWidth < container.scrollWidth - 2,
    })
  }

  useEffect(() => {
    updateScrollState()
    const container = scrollRef.current
    if (!container) return undefined
    container.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      container.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [products])

  const scroll = (dir) => {
    const container = scrollRef.current
    if (!container) return
    const card = container.querySelector('.product-card')
    if (!card) return
    const step = card.offsetWidth + 12
    container.scrollBy({
      left: dir === 'next' ? step : -step,
      behavior: 'smooth',
    })
  }

  return (
    <section className="surface-section flash-section">
      <div className="section-heading flash-heading">
        <h2>
          <span className="flash-icon">&#9773;</span> Flash Sale
          <CountdownTimer initialSeconds={43200} />
        </h2>
        <div className="flash-nav">
          <button type="button" className="nav-btn" onClick={() => scroll('prev')} aria-label="Previous products" disabled={!canScroll.prev}>
            &#8592;
          </button>
          <button type="button" className="nav-btn" onClick={() => scroll('next')} aria-label="Next products" disabled={!canScroll.next}>
            &#8594;
          </button>
        </div>
      </div>
      <div className="flash-scroll" ref={scrollRef}>
        <div className={`flash-track${expanded ? ' expanded' : ''}`}>
          {products.map((product) => (
            <ProductCard key={product.id + product.name} product={product} variant="flash" />
          ))}
        </div>
      </div>
      <button className="flash-view-more" type="button" onClick={() => setExpanded((open) => !open)}>
        {expanded ? 'Show Less' : 'View More'}
      </button>
    </section>
  )
}

export default FlashSaleSection
