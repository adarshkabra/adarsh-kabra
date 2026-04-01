import Link from 'next/link'

const posts = [
  { slug: 'how-ai-changes-gtm', title: 'How AI is quietly reshaping the GTM playbook', date: 'Mar 2025', tag: 'GTM' },
  { slug: 'on-strategy-in-startups', title: 'What strategy actually means inside a 50-person startup', date: 'Feb 2025', tag: 'Strategy' },
  { slug: 'ai-implementation-lessons', title: 'Three things nobody tells you about enterprise AI implementation', date: 'Jan 2025', tag: 'AI' },
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
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>

      {/* HERO */}
      <section style={{ padding: '52px 0 40px', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(42px, 6vw, 62px)',
          fontWeight: 500, color: '#1c1814',
          lineHeight: 1.1, letterSpacing: '-0.025em',
          marginBottom: 14,
        }}>
          Adarsh Kabra
        </h1>
        <p style={{
          fontSize: 16, color: '#6e6860',
          fontWeight: 400, lineHeight: 1.5,
          marginBottom: 28,
        }}>
          Learning how businesses work. Building with AI to find out.
        </p>

        {/* Three dots divider */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 28 }}>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#c4bdb4', display: 'inline-block' }} />
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#c4bdb4', display: 'inline-block' }} />
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#c4bdb4', display: 'inline-block' }} />
        </div>

        {/* Social pills */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:adarshkabra@gmail.com" className="social-pill">
            <span>✉</span> Email
          </a>
          <a href="https://www.linkedin.com/in/adarsh-kabra/" target="_blank" rel="noreferrer" className="social-pill">
            <span style={{ fontSize: 12 }}>in</span> LinkedIn
          </a>
  <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-pill">
  <span>⌥</span> GitHub
</a>
        </div>
      </section>

      {/* CONTENT GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: 32,
        paddingBottom: 64,
        alignItems: 'start',
      }}>

        {/* LEFT — Writing */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <p className="section-label" style={{ marginBottom: 0 }}>Writing</p>
            <Link href="/writing" style={{ fontSize: 12, color: '#afa89e' }}>All posts →</Link>
          </div>

          <div style={{ borderTop: '1px solid #e4dfd7' }}>
            {posts.map(post => (
              <Link key={post.slug} href={`/writing/${post.slug}`} className="post-row">
                <div>
                  <div style={{ marginBottom: 4 }}>
                    <span className="tag">{post.tag}</span>
                  </div>
                  <span style={{ fontSize: 15, color: '#1c1814', fontWeight: 400, lineHeight: 1.4 }}>
                    {post.title}
                  </span>
                </div>
                <span style={{ fontSize: 12, color: '#c4bdb4', whiteSpace: 'nowrap', marginTop: 2 }}>
                  {post.date}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* RIGHT — Projects */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <p className="section-label" style={{ marginBottom: 0 }}>Built</p>
            <Link href="/projects" style={{ fontSize: 12, color: '#afa89e' }}>All →</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {projects.map(p => (
              <Link key={p.name} href={p.href} className="project-card">
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{
                    fontSize: 24, lineHeight: 1,
                    background: '#f5ede0', borderRadius: 8,
                    padding: '8px', flexShrink: 0,
                  }}>
                    {p.emoji}
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <p style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 15, fontWeight: 500,
                      color: '#1c1814', marginBottom: 3,
                    }}>
                      {p.name}
                    </p>
                    <p style={{ fontSize: 13, color: '#6e6860', lineHeight: 1.5, marginBottom: 10 }}>
                      {p.desc}
                    </p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
