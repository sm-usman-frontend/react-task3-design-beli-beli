import { Link } from 'react-router-dom'
import { AppstoreOutlined } from '@ant-design/icons'
import ImagePlaceholder from './ImagePlaceholder'

function CategoryRow({ categories }) {
  const visibleCategories = categories.filter(({ key }) => !['tshirt', 'jacket', 'shirt'].includes(key))

  return (
    <section className="category-row">
      {visibleCategories.map((category) => {
        const categoryContent = (
          <>
            {category.key === 'all' ? (
              <span className="all-category-icon" aria-hidden="true"><AppstoreOutlined /></span>
            ) : (
              <ImagePlaceholder label={category.name.toUpperCase()} />
            )}
            <span>{category.name}</span>
          </>
        )

        if (category.key === 'all') {
          return <span key={category.key} className="category-item">{categoryContent}</span>
        }

        return (
          <Link key={category.key} to={`/product/${category.product.id}`} className="category-item">
            {categoryContent}
          </Link>
        )
      })}
    </section>
  )
}

export default CategoryRow
