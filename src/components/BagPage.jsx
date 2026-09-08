import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ImagePlaceholder from './ImagePlaceholder'

function BagPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const product = location.state?.product
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <>
        <Header />
        <main className="bag-page bag-empty-page">
          <div className="bag-empty">
            <span className="bag-empty-icon">&#128722;</span>
            <h1>Your bag is empty</h1>
            <p>Add something you love and it will appear here.</p>
            <Link className="primary-button bag-shop-button" to="/">Continue Shopping</Link>
          </div>
        </main>
        <Footer showQuote={false} />
      </>
    )
  }

  const itemTotal = Number(product.price.replace(/[^0-9]/g, '')) * quantity
  const formattedTotal = `Rp${itemTotal.toLocaleString('id-ID')}`

  return (
    <>
      <Header />
      <main className="bag-page">
        <div className="bag-breadcrumb"><Link to="/">Home</Link> <span>/</span> Shopping Bag</div>
        <div className="bag-heading">
          <div>
            <p className="bag-eyebrow">READY TO CHECK OUT</p>
            <h1>Shopping Bag</h1>
          </div>
          <span className="bag-item-count">{quantity} item{quantity > 1 ? 's' : ''}</span>
        </div>
        <div className="bag-layout">
          <section className="bag-items" aria-label="Items in your shopping bag">
            <div className="bag-panel-label">YOUR ITEM</div>
            <article className="bag-item">
              <ImagePlaceholder label={product.image || product.name} src={product.imageSrc} />
              <div className="bag-item-details">
                <span className="bag-item-category">BELIBELI EDIT</span>
                <h2>{product.fullName || product.name}</h2>
                <p>Selected style: {product.colors?.[0] || 'Classic'} <span>&bull;</span> Size: {product.sizes?.[0] || 'Standard'}</p>
                <button type="button" className="bag-remove" onClick={() => navigate('/')}>Remove item</button>
              </div>
              <div className="bag-item-purchase">
                <strong>{product.price}</strong>
                {product.oldPrice && <del>{product.oldPrice}</del>}
                <div className="quantity-control" aria-label="Quantity">
                  <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((current) => Math.max(1, current - 1))}>-</button>
                  <span>{quantity}</span>
                  <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((current) => current + 1)}>+</button>
                </div>
              </div>
            </article>
            <button type="button" className="continue-shopping" onClick={() => navigate(`/product/${product.id}`)}>&#8592; Continue shopping</button>
          </section>
          <aside className="bag-summary">
            <p className="bag-panel-label">ORDER SUMMARY</p>
            <div className="bag-summary-line"><span>Subtotal</span><strong>{formattedTotal}</strong></div>
            <div className="bag-summary-line"><span>Delivery</span><strong>FREE</strong></div>
            <div className="bag-summary-line bag-summary-total"><span>Total</span><strong>{formattedTotal}</strong></div>
            <button type="button" className="primary-button bag-checkout-button">Proceed to Checkout <span>&#8594;</span></button>
            <p className="bag-secure">&#10003; Secure checkout &nbsp; &bull; &nbsp; Buyer protection</p>
          </aside>
        </div>
      </main>
      <Footer showQuote={false} />
    </>
  )
}

export default BagPage
