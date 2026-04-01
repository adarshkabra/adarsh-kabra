import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Adarsh Kabra',
  description: 'Strategy, AI, and GTM. Writing and projects by Adarsh Kabra.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="site-nav">
            <Link href="/" className="nav-logo">Adarsh Kabra</Link>
            <div className="nav-links">
              <Link href="/writing" className="nav-link">Writing</Link>
              <Link href="/projects" className="nav-link">Projects</Link>
              <Link href="/now" className="nav-link">Now</Link>
            </div>
          </nav>
        </header>
        <main style={{ minHeight: 'calc(100vh - 130px)' }}>{children}</main>
        <footer className="site-footer">
          <div className="footer-inner">
            <span className="footer-copy">© {new Date().getFullYear()} Adarsh Kabra</span>
            <div className="footer-links">
              <a href="mailto:adarshkabra@gmail.com" className="footer-link">Email</a>
              <a href="https://www.linkedin.com/in/adarsh-kabra/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}