import Header from './Header'
import HeroBanner from './HeroBanner'
import CategoryRow from './CategoryRow'
import SectionHeading from './SectionHeading'
import ProductCard from './ProductCard'
import StoreSection from './StoreSection'
import Footer from './Footer'
import FlashSaleSection from './FlashSaleSection'
import { categoryList, flashProducts, products } from '../data'

function HomePage() {
  return (
    <>
      <Header />
      <main className="home-page">
        <HeroBanner />
        <CategoryRow categories={categoryList} />
        <FlashSaleSection products={flashProducts} />
        <section className="surface-section today-section">
          <SectionHeading title="Todays For You!" action={['Best Seller', 'Keep Style', 'Special Discount', 'Official Store', 'Coveted Product']} />
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <StoreSection />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
