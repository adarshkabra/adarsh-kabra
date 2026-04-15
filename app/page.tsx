import Link from 'next/link'
import React from 'react'

const posts = [
  {
    slug: 'lessons-from-corporate-life',
    title: 'Lessons from corporate life',
    date: 'March 2026',
    tag: 'Work',
    icon: '📋',
    excerpt: 'Seven years in. A few things I wish I had known earlier.',
  },
  {
    slug: 'confessions-of-a-cricket-addict',
    title: 'Confessions of a cricket addict',
    date: 'April 2026',
    tag: 'Personal',
    icon: '🏏',
    excerpt: '2003 World Cup. India vs Pakistan. Where it all began',
  }
 

]

const projects = [
  {
    emoji: '🎬',
    name: 'CineMatch',
    desc: 'AI movie recommender. Tell it your mood, it finds your next watch.',
    tech: ['Groq', 'LLaMA 3.3'],
    href: '/projects',
  }
]


export default function Home() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 28px' }}>

      <section style={{ padding: '52px 0 36px', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(36px, 5vw, 52px)',
          fontWeight: 500, color: '#1c1814',
          lineHeight: 1.1, letterSpacing: '-0.02em',
          marginBottom: 10,
        }}>
          Adarsh Kabra
        </h1>
        <p style={{ fontSize: 15, color: '#6e6860', lineHeight: 1.6, marginBottom: 24 }}>
          AI is probably going to take my job. I am trying to stay on its good side.
        </p>


        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
          <a href="mailto:adarshkabra@gmail.com" className="social-pill">✉ Email</a>
          <a href="https://www.linkedin.com/in/adarsh-kabra/" target="_blank" rel="noreferrer" className="social-pill">in LinkedIn</a>
          <a href="https://github.com/adarshkabra" target="_blank" rel="noreferrer" className="social-pill">⌥ GitHub</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <div style={{ height: 1, background: '#e4dfd7', width: 80 }} />
          <div style={{ display: 'flex', gap: 5 }}>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#c4bdb4', display: 'inline-block' }} />
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#c4bdb4', display: 'inline-block' }} />
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#c4bdb4', display: 'inline-block' }} />
          </div>
          <div style={{ height: 1, background: '#e4dfd7', width: 80 }} />
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
         <div>
  <p className="section-label" style={{ marginBottom: 4 }}>Writing</p>
  <p style={{ fontSize: 13, color: '#6e6860', fontStyle: 'italic' }}>I have started writing on topics I feel strongly about, hoping a few humans read it. Someday this will be used for AI training on how not to write 🙂</p>
</div>
    
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/writing/${post.slug}`} className="project-card" style={{ display: 'block', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <span style={{ fontSize: 22, lineHeight: 1, background: '#f5ede0', borderRadius: 7, padding: '6px', display: 'inline-block' }}>
                  {post.icon}
                </span>
                <span className="tag">{post.tag}</span>
              </div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 500, color: '#1c1814', lineHeight: 1.35, marginBottom: 6 }}>
                {post.title}
              </p>
              <p style={{ fontSize: 12, color: '#9a9288', lineHeight: 1.5, marginBottom: 10 }}>
                {post.excerpt}
              </p>
              <span style={{ fontSize: 11, color: '#c4bdb4' }}>{post.date}</span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 64 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <p className="section-label" style={{ marginBottom: 0 }}>Built</p>
          
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {projects.map(p => (
            <Link key={p.name} href={p.href} className="project-card" style={{ display: 'block', textDecoration: 'none' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 22, lineHeight: 1, background: '#f5ede0', borderRadius: 8, padding: '7px', flexShrink: 0 }}>
                  {p.emoji}
                </span>
                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 500, color: '#1c1814', marginBottom: 4 }}>
                    {p.name}
                  </p>
                  <p style={{ fontSize: 12, color: '#6e6860', lineHeight: 1.5, marginBottom: 10 }}>
                    {p.desc}
                  </p>
                  <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                    {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
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
