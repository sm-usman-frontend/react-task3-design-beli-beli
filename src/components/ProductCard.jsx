import { useState } from 'react'
import { Link } from 'react-router-dom'
import ImagePlaceholder from './ImagePlaceholder'

function ProductCard({ product, variant = '' }) {
  const [liked, setLiked] = useState(product.liked || false)

  const toggleLike = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setLiked((l) => !l)
  }

  return (
    <Link to={`/product/${product.id}`} className={`product-card${variant ? ` ${variant}-product-card` : ''}`}>
      <div className="product-image">
        <ImagePlaceholder label={product.image} />
        <button
          type="button"
          className={`favorite ${liked ? 'liked' : ''}`}
          aria-label="Add to wishlist"
          onClick={toggleLike}
        >
          {liked ? '\u2665' : '\u2661'}
        </button>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="rating">
          &#9733; {product.rating} <span>&middot; {product.sold} Sold</span>
        </div>
        <strong>{product.price}</strong>
        {product.oldPrice && <del>{product.oldPrice}</del>}
      </div>
      {variant === 'flash' && (
        <div className="flash-card-progress">
          <span className="progress-track"><i /></span>
          <span>{product.saleCount || '05/10'} Sale</span>
        </div>
      )}
    </Link>
  )
}

export default ProductCard
