import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-intro">
          <Link className="brand footer-brand" to="/">
            <span>&#9735;</span> BeliBeli.com
          </Link>
          <p>&#8220;Let'sShop Beyond Boundaries&#8221;</p>
        </div>
        <div className="footer-links">
          {[
            ['BeliBeli', '/', ['About BeliBeli', 'How to Buy', 'Terms and Conditions', 'Privacy']],
            ['Buy', '/buy', ['About BeliBeli', 'How to Buy', 'Terms and Conditions', 'Privacy']],
            ['Sell', '/sell', ['About BeliBeli', 'How to Buy', 'Terms and Conditions', 'Privacy']],
            ['Online and Help', '/help', ['About BeliBeli', 'How to Buy', 'Terms and Conditions', 'Privacy']],
          ].map(([title, , links]) => (
            <div key={title}>
              <b className="footer-link-title">{title}</b>
              {links.map((label) => (
                <Link key={label} to={label === 'About BeliBeli' ? '/' : `/${label.toLowerCase().replaceAll(' ', '-')}`}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="socials" aria-label="Social media links">
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.67.33-1 1-1Z" /></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-dot" cx="17.5" cy="6.5" r="1" /></svg>
          </a>
          <a href="#" aria-label="TikTok">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h3.2c.27 1.7 1.22 2.75 2.8 3.2V9c-1.05-.03-2.05-.32-3-.88V15a6 6 0 1 1-6-6c.34 0 .67.03 1 .08v3.08a3 3 0 1 0 2 2.84V3Z" /></svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 8.5h3V21h-3V8.5ZM9 8.5h2.88v1.71h.04C12.32 9.22 13.67 8.2 15.7 8.2c3.07 0 3.8 2.02 3.8 4.65V21h-3v-7.23c0-1.73-.03-3.95-2.4-3.95-2.4 0-2.77 1.87-2.77 3.82V21H9V8.5Z" /></svg>
          </a>
        </div>
        <small>&copy; 2021 - 2026 BeliBeli.com</small>
        <button className="back-to-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&#8593;</button>
      </div>
    </footer>
  )
}

export default Footer
