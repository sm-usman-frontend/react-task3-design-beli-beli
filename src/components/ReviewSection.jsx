import { useState } from 'react'
import ActionButton from './ActionButton'

const reviews = [
  {
    title: 'His favorite shirts!',
    date: '08 August 2023',
    details: 'Color : Black  •  Size : XL',
    body: 'They are scoundrels, do not buy this garbage, they give you poor quality rags, do not buy more clothes in AnyExpress, on top of that you want to return it and they block you, the miserable',
    helpful: 22,
  },
  {
    title: 'Cool as a cucumber',
    date: '12 July 2023',
    details: 'Color : Gray  •  Size : L',
    body: 'This shirt is made of polyester and I wasn\'t sure how that would go for me, but when I received it and tried it on, I realized that the weave is quite different from the polyester shirts of my childhood. There was nothing uncomfortable about it.',
    helpful: 34,
  },
  {
    title: 'My Son in Law likes these shirts',
    date: '12 July 2023',
    details: 'Color : Black  •  Size : 2XL',
    body: 'This is the perfect shirt for my husband who works county fairs, home shows and the state fair, often outside under a canopy as a vendor marketing his product. Light weight fabric that is cooler than most polo shirts with a looser weave that allows air flow.',
    helpful: 21,
  },
  {
    title: 'Best comfortable polo shirt for everyday',
    date: '08 Jun 2023',
    details: 'Color : Black  •  Size : 2XL',
    body: 'The best comfortable and practical polo shorts for summer wear. And you definitely can\'t beat the price for Hanes. I love it so much, I bought three shades of red, black, and heather gray before the prices started going up.',
    helpful: 18,
  },
  {
    title: 'Great quality for the price',
    date: '02 June 2023',
    details: 'Color : Navy  •  Size : L',
    body: 'The fabric feels soft and breathable, and the fit is exactly as described. It has already become one of my favorite shirts for daily wear.',
    helpful: 16,
  },
  {
    title: 'Comfortable and well made',
    date: '28 May 2023',
    details: 'Color : White  •  Size : M',
    body: 'The shirt arrived quickly and the stitching looks neat. The material is light enough for warm days while still keeping its shape after washing.',
    helpful: 12,
  },
  {
    title: 'Exactly what I expected',
    date: '19 May 2023',
    details: 'Color : Black  •  Size : XL',
    body: 'Good fit, accurate color and very easy to style. I ordered another one after trying the first shirt for a few days.',
    helpful: 9,
  },
  {
    title: 'Nice shirt for everyday use',
    date: '11 May 2023',
    details: 'Color : Gray  •  Size : 2XL',
    body: 'The size guide was helpful and the shirt is comfortable for long hours. Delivery packaging was also clean and secure.',
    helpful: 7,
  },
]

function RatingStars({ rating = 5 }) {
  const wholeStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <span className="rating-stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(wholeStars)}
      {hasHalfStar && <span className="half-star">★</span>}
    </span>
  )
}

function ReviewCard({ review, vote, onVote }) {
  const likeCount = review.helpful + (vote === 'like' ? 1 : 0)
  const dislikeCount = vote === 'dislike' ? 1 : 0

  return (
    <article className="review-card">
      <div className="review-card-header">
        <RatingStars rating={5} />
        <time>{review.date}</time>
      </div>
      <h3>{review.title}</h3>
      <small>{review.details}</small>
      <p>{review.body}</p>
      <div className="review-helpful">
        <button type="button" className={vote === 'like' ? 'vote-button selected' : 'vote-button'} aria-label={`Mark review helpful, ${likeCount} votes`} onClick={() => onVote('like')}>
          <span className="helpful-icon">&#128077;</span>{likeCount}
        </button>
        <button type="button" className={vote === 'dislike' ? 'vote-button selected' : 'vote-button'} aria-label={`Mark review not helpful, ${dislikeCount} votes`} onClick={() => onVote('dislike')}>
          <span className="helpful-icon">&#128078;</span>{dislikeCount}
        </button>
      </div>
    </article>
  )
}

function ReviewSection() {
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [votes, setVotes] = useState({})
  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 4)

  function handleVote(title, nextVote) {
    setVotes((currentVotes) => ({
      ...currentVotes,
      [title]: currentVotes[title] === nextVote ? null : nextVote,
    }))
  }

  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <h2 id="reviews-title">Customer Reviews</h2>
      <div className="review-summary">
        <div className="review-score">
          <div className="score-ring"><strong>4.8</strong></div>
          <div className="review-score-copy">
            <RatingStars rating={4.5} />
            <span>95% of buyers are satisfied</span>
            <small>98 rating&nbsp;&nbsp;•&nbsp;&nbsp;125 Reviews</small>
          </div>
        </div>
        <div className="review-breakdown">
          {[['5', 136], ['4', 33], ['3', 9], ['2', 10], ['1', 2]].map(([rating, total]) => (
            <div key={rating}><span>{rating} ★</span><i><b style={{ width: `${Math.max(total / 136 * 100, 8)}%` }} /></i><em>{total}</em></div>
          ))}
        </div>
        <div className="review-filters">
          {['All (190)', 'Pic Review (12)', 'Fast Shipping (12)', '5 Stars (136)', '4 Stars (33)', '3 Stars (9)', '2 Stars (10)', '1 Stars (2)', 'Good Quality (12)'].map((filter) => <button type="button" key={filter}>{filter}</button>)}
        </div>
      </div>
      <div className="reviews-grid">{visibleReviews.map((review) => <ReviewCard key={review.title} review={review} vote={votes[review.title]} onVote={(vote) => handleVote(review.title, vote)} />)}</div>
      <ActionButton className="reviews-button" onClick={() => setShowAllReviews((isShown) => !isShown)}>
        {showAllReviews ? 'Show Fewer Reviews' : 'See All Reviews'}
      </ActionButton>
    </section>
  )
}

export default ReviewSection