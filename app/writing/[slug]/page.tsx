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
    date: 'April 2025',
    tag: 'Work',
    readTime: '4 min',
    content: `
I have close to 7 years of work experience now. The points I am going to share below are nothing extraordinary, most of it you might already be aware of. I think it's helpful to bring these to the top of your memory once in a while though. Also I want to be upfront, some of these I still struggle with, so this is as much a reminder to myself as anything else.

One more thing, I did not think about any of this when I was starting out. It's only as you get more tenured that you start noticing certain patterns, especially when you see younger folks make the same mistakes you made and you are like, oh, I did that too.

**1. Be easy to work with**

Fairly straightforward but probably the most underrated thing on this list. Do what you said you would do. If you are running into trouble, tell your manager before the deadline, not after. The other thing is patience, and I think I am okay at this one because I genuinely don't understand a lot of things myself, so when someone else is struggling I find it hard to be annoyed. But I have seen people lose their composure when asked to explain something a second time and it comes through even in the voice. Your juniors will notice and stop asking questions, which causes much bigger problems later. I would rather someone ask me ten questions upfront.

**2. Don't doubt yourself**

Very early in my career I was asked to host an event we were organizing, in front of hundreds of people. I told my manager I wasn't ready for it and said no. I think about that sometimes. I was probably right that I wasn't ready, but that's kind of the point. We are never going to be fully ready for anything. Looking back, even if I had fumbled through it, it would have given me a lot more confidence than sitting in the audience did. Say yes to the ambiguous, slightly scary opportunities, those tend to be where the actual learning happens.

**3. Be coachable**

This one I genuinely still find hard. In consulting it is very common to put your best effort into a deck and have it come back covered in comments. It is slightly annoying, I won't pretend otherwise. But here's the thing I started noticing, if I actually applied the feedback, the next round would come back with fewer comments. That became a small internal metric for me. It's a good feeling when it happens. So the feedback, as irritating as it is in the moment, is usually worth taking seriously. Also, and this might sound uncomfortable, most of the time deep down we already know our weak areas. The feedback just makes it harder to ignore.

**4. Talk about your work**

For a long time I believed that if you do great work, recognition will follow on its own. I am not sure that's true. I have noticed colleagues getting staffed on interesting projects and thought, I would have been a good fit for that. But I had not reached out or spoken about what I was working on, so naturally I wasn't top of mind. There is no formal process where the best person gets selected, it's usually whoever the leader already knows and has been in touch with. Also, a side benefit nobody really talks about, when you are out there having these conversations, you also get to hear what others are working on, where new things are happening, which opens up opportunities you wouldn't have even known existed otherwise. So please don't be shy. It's not bragging, it's just how things actually work.

These are 4 lessons in 7 years, will probably write part 2 to this in 14 years :)
    `.trim()
  },
  'how-ai-changes-gtm': {
    title: 'How AI is quietly reshaping the GTM playbook',
    date: 'March 2025',
    tag: 'GTM',
    readTime: '5 min',
    content: `Coming soon.`
  },
  'on-strategy-in-startups': {
    title: 'What strategy actually means inside a 50-person startup',
    date: 'February 2025',
    tag: 'Strategy',
    readTime: '4 min',
    content: `Coming soon.`
  },
}

function renderContent(content: string) {
  return content.split('\n\n').map((para, i) => {
    if (para.startsWith('**') && para.endsWith('**')) {
      return (
        <h2 key={i} style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 20, fontWeight: 500,
          color: '#1c1814', marginBottom: 12,
          marginTop: 36, letterSpacing: '-0.01em',
        }}>
          {para.replace(/\*\*/g, '')}
        </h2>
      )
    }
    const parts = para.split(/(\*\*.*?\*\*)/).map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={j} style={{ color: '#1c1814', fontWeight: 500 }}>{part.replace(/\*\*/g, '')}</strong>
      }
      return part
    })
    return (
      <p key={i} style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.85, marginBottom: 20 }}>
        {parts}
      </p>
    )
  })
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    return (
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '80px 32px', textAlign: 'center' }}>
        <p style={{ color: '#afa89e' }}>Post not found.</p>
        <Link href="/" style={{ color: '#7c5c2e', fontSize: 14 }}>← Back home</Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 32px' }}>

      {/* Back link */}
      <div style={{ padding: '32px 0 0' }}>
        <Link href="/" style={{ fontSize: 13, color: '#afa89e', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          ← Adarsh Kabra
        </Link>
      </div>

      {/* Header */}
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

      {/* Content */}
      <article style={{ padding: '40px 0 80px' }}>
        {renderContent(post.content)}
      </article>

    </div>
  )
}
