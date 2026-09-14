import { useState } from 'react'
import Header from './Header'
import HeroBanner from './HeroBanner'
import CategoryRow from './CategoryRow'
import SectionHeading from './SectionHeading'
import ProductCard from './ProductCard'
import StoreSection from './StoreSection'
import Footer from './Footer'
import FooterQuote from './FooterQuote'
import FlashSaleSection from './FlashSaleSection'
import { categoryList, flashProducts, products } from '../data'

function HomePage() {
  const [showAllTodayProducts, setShowAllTodayProducts] = useState(false)

  return (
    <>
      <Header />
      <main className="home-page">
        <HeroBanner />
        <CategoryRow categories={categoryList} />
        <FlashSaleSection products={flashProducts} />
        <section className={`surface-section today-section${showAllTodayProducts ? ' expanded' : ''}`}>
          <SectionHeading title="Todays For You!" action={['Best Seller', 'Keep Style', 'Special Discount', 'Official Store', 'Coveted Product']} />
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button
            className="today-view-more"
            type="button"
            onClick={() => setShowAllTodayProducts((visible) => !visible)}
          >
            {showAllTodayProducts ? 'Show Less' : 'Show More'}
          </button>
        </section>
        <StoreSection />
      </main>
      <FooterQuote />
      <Footer />
    </>
  )
}

export default HomePage
