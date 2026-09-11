import { Link } from 'react-router-dom'
import FavoriteButton from './FavoriteButton'
import ImagePlaceholder from './ImagePlaceholder'

function ProductCard({ product, variant = '' }) {
  return (
    <Link to={`/product/${product.id}`} className={`product-card${variant ? ` ${variant}-product-card` : ''}`}>
      <div className="product-image">
        <ImagePlaceholder label={product.image} />
        <FavoriteButton initialLiked={product.liked || false} />
      </div>
      <div className="product-info card-info">
        <h3 className="heading-text responsive-heading card-heading">{product.name}</h3>
        <div className="body-text responsive-text rating card-rating">
          &#9733; {product.rating} <span>&middot; {product.sold} Sold</span>
        </div>
        <strong className="body-text responsive-text card-price">{product.price}</strong>
        {product.oldPrice && <del className="card-old-price">{product.oldPrice}</del>}
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
