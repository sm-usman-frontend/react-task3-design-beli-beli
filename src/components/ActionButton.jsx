function ActionButton({ children, variant = 'outline', className = '', ...props }) {
  return (
    <button type="button" className={`${variant}-button ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}

export default ActionButton