import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BellOutlined, CloseOutlined, MenuOutlined, ShoppingOutlined } from '@ant-design/icons'
import CategoryDropdown from './CategoryDropdown'
import SearchBox from './SearchBox'
import { categoryList } from '../data'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="utility-bar">
        <span>&#9633; Download BeliBeli App</span>
        <nav>
          <a href="#mitra">Mitra BeliBeli</a>
          <a href="#about">About BeliBeli</a>
          <a href="#care">BeliBeli Care</a>
          <a href="#promo">Promo</a>
          <button type="button" className="btn-signup">
            Sign Up
          </button>
          <button type="button" className="btn-login">
            Login
          </button>
        </nav>
      </div>
      <div className={`main-nav${menuOpen ? ' menu-open' : ''}`}>
        <Link className="brand" to="/">
          <span className="brand-letter">B</span> BeliBeli.com
        </Link>
          <div className="search-control">
            <CategoryDropdown />
            <SearchBox />
          </div>
        <div className="nav-actions">
          <Link className="nav-icon" to="/bag" aria-label="Shopping bag"><ShoppingOutlined /></Link>
          <button type="button" className="nav-icon" aria-label="Notifications"><BellOutlined /></button>
          <button className="mobile-menu" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Open navigation menu" aria-expanded={menuOpen}>
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-menu-panel">
            <strong>Shop by category</strong>
            <div className="mobile-category-links">
              {categoryList.map((category) => (
                <Link key={category.key} to={`/product/${category.product.id}`} onClick={() => setMenuOpen(false)}>
                  {category.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
