import { useEffect, useRef, useState } from 'react'
import { products } from '../data'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'

function BestSellerSection() {
  const scrollRef = useRef(null)
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
  }, [])

  const scroll = (direction) => {
    const container = scrollRef.current
    const card = container?.querySelector('.best-seller-item')
    if (!container || !card) return
    container.scrollBy({
      left: direction === 'next' ? card.offsetWidth + 16 : -(card.offsetWidth + 16),
      behavior: 'smooth',
    })
  }

  return (
    <section className="best-seller-section" aria-labelledby="best-seller-title">
      <SectionHeading
        title="Best Seller"
        action={<div className="flash-nav best-seller-nav"><button type="button" className="nav-btn" aria-label="Previous products" onClick={() => scroll('prev')} disabled={!canScroll.prev}>&#8592;</button><button type="button" className="nav-btn" aria-label="Next products" onClick={() => scroll('next')} disabled={!canScroll.next}>&#8594;</button></div>}
      />
      <div className="best-seller-scroll" ref={scrollRef}>
        <div className="best-seller-grid">
          {products.map((product, index) => <div className="best-seller-item" key={product.id}><span className="seller-rank">{index + 1}</span><ProductCard product={product} variant="best-seller" /></div>)}
        </div>
      </div>
    </section>
  )
}

export default BestSellerSection