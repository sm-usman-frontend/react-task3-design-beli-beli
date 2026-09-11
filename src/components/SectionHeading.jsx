import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import { products } from '../data'

function SectionHeading({ title, action = 'See more' }) {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div className="section-heading">
      <h2 className="heading-text responsive-heading">{title}</h2>
      {Array.isArray(action) ? (
        <div className="heading-categories">
          {action.map((category, index) => (
            <Link
              type="button"
              key={category}
              className={index === activeCategory ? 'active' : ''}
              to={`/product/${products[index % products.length].id}`}
              onClick={() => setActiveCategory(index)}
            >
              {category}
            </Link>
          ))}
        </div>
      ) : typeof action === 'object' ? (
        action
      ) : (
        <Link to="/product/1">{action} <RightOutlined /></Link>
      )}
    </div>
  )
}

export default SectionHeading
