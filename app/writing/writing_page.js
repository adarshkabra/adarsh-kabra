import Link from 'next/link'

const posts = [
  { slug: 'how-ai-changes-gtm', title: 'How AI is quietly reshaping the GTM playbook', date: 'Mar 2025', readTime: '5 min', tag: 'GTM', excerpt: 'The sales motion is changing faster than most orgs realize. AI isn\'t just a tool inside GTM — it\'s starting to rewrite what GTM means.' },
  { slug: 'on-strategy-in-startups', title: 'What strategy actually means inside a 50-person startup', date: 'Feb 2025', readTime: '4 min', tag: 'Strategy', excerpt: 'At a large firm, strategy means frameworks and decks. At a startup, it means deciding what not to do when everything feels urgent.' },
  { slug: 'ai-implementation-lessons', title: 'Three things nobody tells you about enterprise AI implementation', date: 'Jan 2025', readTime: '6 min', tag: 'AI', excerpt: 'After working on several GenAI rollouts inside large enterprises, a few patterns keep showing up that no one talks about in the case studies.' },
]

export default function Writing() {
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 32px' }}>
      <section style={{ padding: '52px 0 40px' }}>
        <p className="section-label">Writing</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 500, color: '#1c1814', letterSpacing: '-0.02em', marginBottom: 8 }}>
          Essays & notes
        </h1>
        <p style={{ fontSize: 14, color: '#afa89e' }}>Thinking out loud on strategy, AI, and how businesses work.</p>
      </section>

      <div style={{ borderTop: '1px solid #e4dfd7' }}>
        {posts.map(post => (
          <article key={post.slug} style={{ padding: '28px 0', borderBottom: '1px solid #e4dfd7' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' }}>
              <span className="tag">{post.tag}</span>
              <span style={{ fontSize: 12, color: '#afa89e' }}>{post.date}</span>
              <span style={{ fontSize: 12, color: '#c4bdb4' }}>· {post.readTime} read</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 500, color: '#1c1814', letterSpacing: '-0.01em', marginBottom: 8, lineHeight: 1.35 }}>
              {post.title}
            </h2>
            <p style={{ fontSize: 14, color: '#6e6860', lineHeight: 1.75, marginBottom: 14 }}>{post.excerpt}</p>
            <span style={{ fontSize: 13, color: '#7c5c2e' }}>Read →</span>
          </article>
        ))}
      </div>
    </div>
  )
}