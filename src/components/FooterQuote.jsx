import heroBg from '../assets/hero_bg2.png'

function FooterQuote() {
  return (
    <section
      className="footer-quote"
      style={{ backgroundImage: `linear-gradient(rgba(31, 38, 48, .64), rgba(31, 38, 48, .64)), url(${heroBg})` }}
      aria-label="BeliBeli quote"
    >
      <p>&#8220;Let&apos;s Shop Beyond Boundaries&#8221;</p>
    </section>
  )
}

export default FooterQuote
