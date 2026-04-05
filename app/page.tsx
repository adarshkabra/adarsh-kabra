import Link from 'next/link'
import React from 'react'

const posts = [
  {
    slug: 'lessons-from-corporate-life',
    title: 'Lessons from corporate life',
    date: 'Apr 2025',
    tag: 'Work',
    excerpt: 'Seven years in. A few things I wish I had known earlier — and some I am still working on.',
  },
  {
    slug: 'how-ai-changes-gtm',
    title: 'How AI is quietly reshaping the GTM playbook',
    date: 'Mar 2025',
    tag: 'GTM',
    excerpt: 'The sales motion is changing faster than most orgs realize. AI is starting to rewrite what GTM means.',
  },
  {
    slug: 'on-strategy-in-startups',
    title: 'What strategy actually means inside a 50-person startup',
    date: 'Feb 2025',
    tag: 'Strategy',
    excerpt: 'At a large firm, strategy means frameworks and decks. At a startup, it means deciding what not to do when everything feels urgent.',
  },
]

const projects = [
  {
    emoji: '🎬',
    name: 'CineMatch',
    desc: 'AI movie recommender. Tell it your mood, it finds your next watch.',
    tech: ['Groq', 'LLaMA 3.3'],
    href: '/projects',
  },
  {
    emoji: '🏏',
    name: 'IPL Preview Agent',
    desc: 'Pre-match analysis for IPL games — form, pitch, head-to-head.',
    tech: ['Groq', 'LLaMA 3.3'],
    href: '/projects',
  },
]

export default function Home() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px' }}>

      {/* HERO — compact, no separate nav */}
      <section style={{ padding: '52px 0 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px, 5vw, 44px)',
            fontWeight: 500, color: '#1c1814',
            lineHeight: 1.1, letterSpacing: '-0.02em',
          }}>
            Adarsh Kabra
          </h1>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', paddingTop: 6 }}>
            <Link href="/now" style={{ fontSize: 13, color: '#afa89e', transition: 'color 0.15s' }}>Now</Link>
            <Link href="/projects" style={{ fontSize: 13, color: '#afa89e' }}>Projects</Link>
            <a href="https://github.com/adarshkabra" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: '#afa89e' }}>GitHub</a>
          </div>
        </div>

        <p style={{ fontSize: 15, color: '#6e6860', lineHeight: 1.6, marginBottom: 24, maxWidth: 480 }}>
          Learning how businesses work. Building with AI to find out.
        </p>

        <div style={{ display: 'flex', justifyContent: 'flex-start', gap: 8, marginBottom: 28 }}>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#c4bdb4', display: 'inline-block', marginTop: 8 }} />
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#c4bdb4', display: 'inline-block', marginTop: 8 }} />
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#c4bdb4', display: 'inline-block', marginTop: 8 }} />
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a href="mailto:adarshkabra@gmail.com" className="social-pill">✉ Email</a>
          <a href="https://www.linkedin.com/in/adarsh-kabra/" target="_blank" rel="noreferrer" className="social-pill">in LinkedIn</a>
        </div>
      </section>

      {/* WRITING — full width, primary section */}
      <section style={{ marginBottom: 72 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <p className="section-label" style={{ marginBottom: 0 }}>Writing</p>
          <Link href="/writing" style={{ fontSize: 12, color: '#afa89e' }}>All posts →</Link>
        </div>

        <div style={{ borderTop: '1px solid #e4dfd7' }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/writing/${post.slug}`} className="post-row" style={{ display: 'block', padding: '20px 0', borderBottom: '1px solid #e4dfd7', transition: 'opacity 0.15s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="tag">{post.tag}</span>
                  <span style={{ fontSize: 12, color: '#c4bdb4' }}>{post.date}</span>
                </div>
              </div>
              <p style={{ fontSize: 16, color: '#1c1814', fontWeight: 400, lineHeight: 1.4, marginBottom: 6 }}>
                {post.title}
              </p>
              <p style={{ fontSize: 13, color: '#9a9288', lineHeight: 1.6 }}>
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* PROJECTS — below the fold */}
      <section style={{ marginBottom: 80 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <p className="section-label" style={{ marginBottom: 0 }}>Built</p>
          <Link href="/projects" style={{ fontSize: 12, color: '#afa89e' }}>All →</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {projects.map(p => (
            <Link key={p.name} href={p.href} className="project-card">
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: 22, lineHeight: 1,
                  background: '#f5ede0', borderRadius: 8,
                  padding: '8px', flexShrink: 0,
                }}>
                  {p.emoji}
                </span>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 500, color: '#1c1814', marginBottom: 3 }}>
                    {p.name}
                  </p>
                  <p style={{ fontSize: 13, color: '#6e6860', lineHeight: 1.5, marginBottom: 10 }}>
                    {p.desc}
                  </p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.tech.map((t: string) => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}
