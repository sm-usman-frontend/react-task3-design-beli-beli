import { useState, useRef, useEffect } from 'react'
import { categoryList } from '../data'
import { DownOutlined } from '@ant-design/icons'

function CategoryDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const toggleDropdown = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setOpen((currentOpen) => !currentOpen)
  }

  const closeWithoutNavigation = (event) => {
    event.preventDefault()
    setOpen(false)
  }

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
        onClick={toggleDropdown}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        All Category <DownOutlined className="category-arrow" />
      </button>
      {open && (
        <div className="category-menu" role="menu">
          {categoryList.filter(({ key }) => key !== 'all').map((category) => (
            <a
              href="#"
              key={category.key}
              className="category-menu-item"
              onClick={closeWithoutNavigation}
            >
              {category.name}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryDropdown
