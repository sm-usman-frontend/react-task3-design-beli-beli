import { Link } from 'react-router-dom'
import ImagePlaceholder from './ImagePlaceholder'

function CategoryRow({ categories }) {
  return (
    <section className="category-row">
      {categories.map((category) => (
        <Link
          key={category.key}
          to={`/product/${category.product.id}`}
          className="category-item"
        >
          {category.key === 'all' ? (
            <span className="all-category-icon" aria-hidden="true">
              <i /><i /><i /><i />
            </span>
          ) : (
            <ImagePlaceholder label={category.name.toUpperCase()} />
          )}
          <span>{category.name}</span>
        </Link>
      ))}
    </section>
  )
}

export default CategoryRow
