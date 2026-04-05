import './globals.css'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Adarsh Kabra',
  description: 'Learning how businesses work. Building with AI to find out.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
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
