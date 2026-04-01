const projects = [
  {
    emoji: '🎬',
    name: 'CineMatch',
    tag: 'AI · Movie Recommendations',
    year: '2025',
    desc: 'A conversational movie recommendation engine. Tell it your mood, what you\'ve liked before, or just a vibe — it finds your next watch.',
    tech: ['Groq API', 'LLaMA 3.3', 'JavaScript', 'HTML/CSS'],
  },
  {
    emoji: '🏏',
    name: 'IPL Match Preview Agent',
    tag: 'AI · Cricket Analytics',
    year: '2025',
    desc: 'An AI agent that generates pre-match analysis for IPL games — team form, head-to-head records, pitch conditions, and key matchups.',
    tech: ['Groq API', 'LLaMA 3.3', 'JavaScript', 'HTML/CSS'],
  },
]

export default function Projects() {
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 32px' }}>
      <section style={{ padding: '52px 0 40px' }}>
        <p className="section-label">Projects</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 500, color: '#1c1814', letterSpacing: '-0.02em', marginBottom: 8 }}>
          Things I've built
        </h1>
        <p style={{ fontSize: 14, color: '#afa89e' }}>Side projects I build to think through ideas more concretely.</p>
      </section>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 72 }}>
        {projects.map(p => (
          <div key={p.name} style={{ background: '#fff', border: '1px solid #e4dfd7', borderRadius: 12, padding: '24px 28px' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 32, lineHeight: 1, background: '#f5ede0', borderRadius: 10, padding: '10px', flexShrink: 0 }}>
                {p.emoji}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6, flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 500, color: '#1c1814', marginBottom: 2 }}>{p.name}</h2>
                    <span style={{ fontSize: 12, color: '#afa89e' }}>{p.tag}</span>
                  </div>
                  <span style={{ fontSize: 11, color: '#afa89e', background: '#f0ede8', padding: '3px 10px', borderRadius: 20 }}>{p.year}</span>
                </div>
                <p style={{ fontSize: 14, color: '#6e6860', lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}