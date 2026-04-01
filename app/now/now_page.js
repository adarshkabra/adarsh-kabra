export default function Now() {
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 32px' }}>
      <section style={{ padding: '52px 0 40px' }}>
        <p className="section-label">Now</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 500, color: '#1c1814', letterSpacing: '-0.02em', marginBottom: 8 }}>
          What I'm up to
        </h1>
        <p style={{ fontSize: 14, color: '#afa89e' }}>Last updated March 2025 · Delhi</p>
      </section>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 44, paddingBottom: 80 }}>
        <NowSection title="Working on">
          <NowItem>Consulting engagements at Deloitte — AI strategy and implementation for large enterprises.</NowItem>
          <NowItem>Building a Company Research Agent with Claude's API to automate research before important conversations.</NowItem>
          <NowItem>This site — writing more consistently, building in public.</NowItem>
        </NowSection>

        <NowSection title="Thinking about">
          <NowItem>How AI changes the unit economics of GTM — specifically what happens to the SDR layer at scale.</NowItem>
          <NowItem>Why most enterprise AI projects fail in implementation, not ideation.</NowItem>
          <NowItem>What the Founder's Office role looks like at an AI-native company vs a legacy org.</NowItem>
        </NowSection>

        <NowSection title="Reading">
          <NowItem>Ben Thompson's Stratechery archives — the aggregation theory pieces hold up remarkably well.</NowItem>
          <NowItem>Sequoia's writing on AI go-to-market transformation.</NowItem>
        </NowSection>

        <NowSection title="Open to">
          <NowItem>
            Conversations about AI, strategy, GTM, or anything at the intersection. Reach out at{' '}
            <a href="mailto:adarshkabra@gmail.com" style={{ color: '#7c5c2e', borderBottom: '1px solid rgba(124,92,46,0.3)' }}>adarshkabra@gmail.com</a>
            {' '}or on{' '}
            <a href="https://www.linkedin.com/in/adarsh-kabra/" target="_blank" rel="noreferrer" style={{ color: '#7c5c2e', borderBottom: '1px solid rgba(124,92,46,0.3)' }}>LinkedIn</a>.
          </NowItem>
        </NowSection>
      </div>
    </div>
  )
}

function NowSection({ title, children }) {
  return (
    <section>
      <h2 style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7c5c2e', fontWeight: 500, marginBottom: 18 }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>{children}</div>
    </section>
  )
}

function NowItem({ children }) {
  return (
    <div className="now-item">
      <span className="now-dash">—</span>
      <p style={{ fontSize: 15, color: '#5a5248', lineHeight: 1.8 }}>{children}</p>
    </div>
  )
}