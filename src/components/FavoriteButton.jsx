import { useState } from 'react'
import { HeartFilled } from '@ant-design/icons'

function FavoriteButton({ initialLiked = false }) {
  const [liked, setLiked] = useState(initialLiked)

  const toggleLike = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setLiked((currentLiked) => !currentLiked)
  }

  return (
    <button
      type="button"
      className={`favorite ${liked ? 'liked' : ''}`}
      aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
      aria-pressed={liked}
      onClick={toggleLike}
    >
      <HeartFilled />
    </button>
  )
}

export default FavoriteButton
