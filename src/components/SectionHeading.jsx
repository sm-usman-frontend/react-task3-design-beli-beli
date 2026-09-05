function SectionHeading({ title, action = 'See more' }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {Array.isArray(action) ? (
        <div className="heading-categories">
          {action.map((category) => <button type="button" key={category}>{category}</button>)}
        </div>
      ) : (
        <button type="button">{action} <span>&#8250;</span></button>
      )}
    </div>
  )
}

export default SectionHeading
