import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { searchProducts } from '../data'

function SearchBox({ placeholder = 'Search product or brand here...' }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const containerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    function handleClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSearch = (e) => {
    const value = e.target.value
    setQuery(value)
    if (value.trim()) {
      setResults(searchProducts(value))
      setShowResults(true)
    } else {
      setResults([])
      setShowResults(false)
    }
  }

  const handleSelect = (product) => {
    setQuery('')
    setResults([])
    setShowResults(false)
    navigate(`/product/${product.id}`)
  }

  return (
    <div className="search-container" ref={containerRef}>
      <label className="search-box">
        <SearchOutlined className="search-icon" /> <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleSearch}
          onFocus={() => { if (query.trim()) setShowResults(true) }}
        />
      </label>
      {showResults && results.length > 0 && (
        <div className="search-results">
          {results.map((product) => (
            <div
              key={product.id}
              className="search-result-item"
              onClick={() => handleSelect(product)}
            >
              <span className="search-result-name">{product.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBox
