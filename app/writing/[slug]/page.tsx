import Link from 'next/link'
import React from 'react'

const posts: Record<string, {
  title: string
  date: string
  tag: string
  readTime: string
  content: string
}> = {
  'lessons-from-corporate-life': {
    title: 'Lessons from corporate life',
    date: 'April 2026',
    tag: 'Work',
    readTime: '4 min',
    content: `I have close to 7 years of work experience now. The points I am going to share below are nothing extraordinary, most of it you might already be aware of. I think it's helpful to bring these to the top of your memory once in a while though. Also I want to be upfront, some of these I still struggle with, so this is as much a reminder to myself as anything else.

One more thing, I did not think about any of this when I was starting out. It's only as you get more tenured that you start noticing certain patterns, especially when you see younger folks make the same mistakes you made and you are like, oh, I did that too.

**1. Be easy to work with**

Fairly straightforward but probably the most underrated thing on this list. Do what you said you would do. If you are running into trouble, tell your manager before the deadline, not after.

**2. Don't doubt yourself**

We are never going to be fully ready for anything. Say yes to the ambiguous, slightly scary opportunities, those tend to be where the actual learning happens.

**3. Be coachable**

The feedback, as irritating as it is in the moment, is usually worth taking seriously. Most of the time deep down we already know our weak areas. The feedback just makes it harder to ignore.

**4. Talk about your work**

There is no formal process where the best person gets selected, it's usually whoever the leader already knows. So please don't be shy. It's not bragging, it's just how things actually work.

These are 4 lessons in 7 years, will probably write part 2 to this in 14 years :)`
  },
  'confessions-of-a-cricket-addict': {
    title: 'Confessions of a cricket addict',
    date: 'April 2026',
    tag: 'Personal',
    readTime: '5 min',
    content: `I cared about cricket more than anything being taught in school. That tells you most of what you need to know about me.

My first real memory of understanding what was actually going on in a game is the 2003 World Cup match against Pakistan. Sachin Tendulkar was batting unbelievably, upper cutting Shoaib Akhtar over third man like the man was bowling gentle medium pace.

These are 4 lessons in 7 years, will probably write part 2 to this in 14 years :)`
  },
}

export async function generateStaticParams() {
  return [
    { slug: 'lessons-from-corporate-life' },
    { slug: 'confessions-of-a-cricket-addict' },
    { slug: 'on-strategy-in-startups' },
    { slug: 'ai-implementation-lessons' },
  ]
}




export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    return (
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '80px 32px', textAlign: 'center' }}>
        <p style={{ color: '#afa89e' }}>Post not found. Slug: {params.slug}</p>
        <Link href="/" style={{ color: '#7c5c2e', fontSize: 14 }}>← Back home</Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 32px' }}>
      <div style={{ padding: '32px 0 0' }}>
        <Link href="/" style={{ fontSize: 13, color: '#afa89e' }}>← Adarsh Kabra</Link>
      </div>
      <header style={{ padding: '40px 0 40px', borderBottom: '1px solid #e4dfd7' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
          <span className="tag">{post.tag}</span>
          <span style={{ fontSize: 12, color: '#c4bdb4' }}>{post.date}</span>
          <span style={{ fontSize: 12, color: '#c4bdb4' }}>· {post.readTime} read</span>
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(28px, 5vw, 38px)',
          fontWeight: 500, color: '#1c1814',
          lineHeight: 1.2, letterSpacing: '-0.02em',
        }}>
          {post.title}
        </h1>
      </header>
      <article style={{ padding: '40px 0 80px' }}>
        {post.content.split('\n\n').map((para, i) => {
          if (para.startsWith('**') && para.endsWith('**')) {
            return <h2 key={i} style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 500, color: '#1c1814', marginBottom: 12, marginTop: 36 }}>{para.replace(/\*\*/g, '')}</h2>
          }
          return <p key={i} style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.85, marginBottom: 20 }}>{para}</p>
        })}
      </article>
    </div>
  )
}
