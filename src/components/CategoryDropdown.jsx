import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { categoryList } from '../data'

function CategoryDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="category-dropdown" ref={ref}>
      <button
        type="button"
        className="category-button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        All Category&#9660;
      </button>
      {open && (
        <div className="category-menu" role="menu">
          {categoryList.map((category) => (
            <Link
              key={category.key}
              to={`/product/${category.product.id}`}
              className="category-menu-item"
              onClick={() => setOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryDropdown
