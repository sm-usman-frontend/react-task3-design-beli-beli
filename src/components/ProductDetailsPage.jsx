import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ImagePlaceholder from './ImagePlaceholder'
import ProductGallery from './ProductGallery'
import Header from './Header'
import Footer from './Footer'
import { getProductById } from '../data'

function ProductDetailsPage() {
  const { productId } = useParams()
  const [selectedSize, setSelectedSize] = useState('M')

  const product = getProductById(productId)

  if (!product) {
    return (
      <>
        <Header />
        <main className="details-page">
          <div className="surface-section">
            <p>Product not found.</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const colors = product.colors || ['BLACK', 'WHITE']
  const sizes = product.sizes || ['S', 'M', 'L', 'XL', '2XL', '3XL']
  const description = product.description || 'This product is crafted with premium materials for everyday comfort and style. Built-in moisture wicking and sun protection keep you feeling dry while blocking out harmful UV rays.'
  const currentSize = sizes.includes(selectedSize) ? selectedSize : (sizes.find((s) => s === 'M') || sizes[0])
  const stylingIdeas = [
    { name: 'George Men\'s and Big Men\'s 100% Cotton', price: 'Rp220.000', image: 'IMAGE: LEATHER BELT', src: '' },
    { name: 'Men\'s Easy Reader | Black/Silver Watch', price: 'Rp450.000', image: 'IMAGE: BLACK WATCH', src: '' },
    { name: 'Sport Running Shoes for Men Mesh Breathable', price: 'Rp330.000', image: 'IMAGE: RUNNING SHOES', src: '' },
  ]

  return (
    <>
      <Header />
      <main className="details-page">
        <div className="breadcrumb">
          Home / Product / <b>{product.fullName || product.name}</b>
        </div>
        <section className="product-detail">
          <div className="product-left-column">
            <ProductGallery product={product} />
            <div className="seller-card">
              <div className="seller-identity">
                <span className="seller-mark">N</span>
                <div>
                  <strong>Barudak Disaster Mall <span className="seller-verified">&#10003;</span></strong>
                  <small>Online</small>
                </div>
              </div>
              <div className="seller-actions">
                <button type="button">Follow</button>
                <button type="button">Visit Store</button>
              </div>
              <div className="seller-stats">
                <span>&#9733; Rating Store : <b>96%</b></span>
                <span>&#9679; Location Store : <b>Tulungagung</b></span>
                <span>&#9632; Chat Reply : <b>98%</b></span>
              </div>
            </div>
          </div>
          <div className="purchase-panel">
            <h1>{product.fullName || product.name}</h1>
            <div className="detail-rating">
              {product.sold} Sold &nbsp;&bull;&nbsp;
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span> {product.rating} &nbsp;&bull;&nbsp; 185 Reviews
            </div>
            <div className="detail-price">
              <strong>{product.price}</strong>
              {product.oldPrice && (
                <div className="price-discount">
                  <del>{product.oldPrice}</del>
                  <small>25% off</small>
                </div>
              )}
            </div>
            <div className="color-options">
              {colors.slice(0, 2).map((color) => (
                <ImagePlaceholder key={color} label={`${color} ${product.image || product.name}`} />
              ))}
            </div>
            <div className="size-line">
              <b>Select Size</b>
              <button>Size Guide</button>
            </div>
            <div className="sizes">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={currentSize === size ? 'selected' : ''}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <button className="primary-button">Buy this Item</button>
            <button className="outline-button">Add to Bag</button>
            <div className="quick-actions">
              <span>&#9677; Chat</span>
              <span>&#9825; Wishlist</span>
              <span>&#9735; Share</span>
            </div>
          </div>
        </section>
        <section className="description">
          <div className="tabs">
            <button className="active">Description</button>
            <button>Styling Ideas</button>
            <button>Review</button>
            <button>Best Seller</button>
            <span>&#9735; Report Product</span>
          </div>
          <h2>Product Details</h2>
          <p>{description}</p>
          <dl className="product-specifications">
            <div><dt>Package Dimensions</dt><dd>27.3 x 24.8 x 4.9 cm; 180 g</dd></div>
            <div><dt>Specification</dt><dd>Moisture Wicking, Stretch, SPF/UV Protection, Easy Care</dd></div>
            <div><dt>Date First Available</dt><dd>August 08, 2023</dd></div>
            <div><dt>Department</dt><dd>Mens</dd></div>
          </dl>
        </section>
        <section className="styling-ideas">
          <div className="styling-ideas-header">
            <h2>Styling Ideas</h2>
            <button type="button">See more</button>
          </div>
          <div className="styling-ideas-layout">
            <div className="styling-product-list">
              <div className="styling-main-product">
                <ImagePlaceholder label={product.image} src={product.imageSrc} />
                <span className="styling-plus">+</span>
              </div>
              {stylingIdeas.map((idea) => (
                <article className="styling-product" key={idea.name}>
                  <ImagePlaceholder label={idea.image} src={idea.src} />
                  <p>{idea.name}</p>
                  <strong>{idea.price}</strong>
                </article>
              ))}
            </div>
            <aside className="styling-total">
              <span>Total</span>
              <strong>{product.price}</strong>
              <small>Save Rp067.500</small>
              <button type="button" className="primary-button">Add to Bag</button>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ProductDetailsPage
