import Link from 'next/link'
import React from 'react'

const posts: Record<string, {
  title: string
  date: string
  tag: string
  readTime: string
  paragraphs: string[]
}> = {
  'lessons-from-corporate-life': {
    title: 'Lessons from corporate life',
    date: 'April 2026',
    tag: 'Work',
    readTime: '4 min',
    paragraphs: [
      "I have close to 7 years of work experience now. The points I am going to share below are nothing extraordinary, most of it you might already be aware of. I think it's helpful to bring these to the top of your memory once in a while though. Also I want to be upfront, some of these I still struggle with, so this is as much a reminder to myself as anything else.",
      "One more thing, I did not think about any of this when I was starting out. It's only as you get more tenured that you start noticing certain patterns, especially when you see younger folks make the same mistakes you made and you are like, oh, I did that too.",
      "1. Be easy to work with",
      "Fairly straightforward but probably the most underrated thing on this list. Do what you said you would do. If you are running into trouble, tell your manager before the deadline, not after. The other thing is patience, and I think I am okay at this one because I genuinely don't understand a lot of things myself, so when someone else is struggling I find it hard to be annoyed. But I have seen people lose their composure when asked to explain something a second time and it comes through even in the voice. Your juniors will notice and stop asking questions, which causes much bigger problems later. I would rather someone ask me ten questions upfront.",
      "2. Don't doubt yourself",
      "Very early in my career I was asked to host an event we were organizing, in front of hundreds of people. I told my manager I wasn't ready for it and said no. I think about that sometimes. I was probably right that I wasn't ready, but that's kind of the point. We are never going to be fully ready for anything. Looking back, even if I had fumbled through it, it would have given me a lot more confidence than sitting in the audience did. Say yes to the ambiguous, slightly scary opportunities, those tend to be where the actual learning happens.",
      "3. Be coachable",
      "This one I genuinely still find hard. In consulting it is very common to put your best effort into a deck and have it come back covered in comments. It is slightly annoying, I won't pretend otherwise. But here's the thing I started noticing, if I actually applied the feedback, the next round would come back with fewer comments. That became a small internal metric for me. It's a good feeling when it happens. So the feedback, as irritating as it is in the moment, is usually worth taking seriously. Also, and this might sound uncomfortable, most of the time deep down we already know our weak areas. The feedback just makes it harder to ignore.",
      "4. Talk about your work",
      "For a long time I believed that if you do great work, recognition will follow on its own. I am not sure that's true. I have noticed colleagues getting staffed on interesting projects and thought, I would have been a good fit for that. But I had not reached out or spoken about what I was working on, so naturally I wasn't top of mind. There is no formal process where the best person gets selected, it's usually whoever the leader already knows and has been in touch with. Also, a side benefit nobody really talks about, when you are out there having these conversations, you also get to hear what others are working on, where new things are happening, which opens up opportunities you wouldn't have even known existed otherwise. So please don't be shy. It's not bragging, it's just how things actually work.",
      "These are 4 lessons in 7 years, will probably write part 2 to this in 14 years :)",
    ]
  },
  'confessions-of-a-cricket-addict': {
    title: 'Confessions of a cricket addict',
    date: 'April 2026',
    tag: 'Personal',
    readTime: '5 min',
    paragraphs: [
      "My first real memory of understanding what was actually going on in a cricket game is the 2003 World Cup match against Pakistan. Sachin Tendulkar was batting unbelievably, upper cutting Shoaib Akhtar over third man like the man was bowling gentle medium pace. My family is not the kind that jumps around or screams, but they were deep in discussion every over, debating how India should negotiate Wasim, Waqar and Shoaib. Cricket had turned them into team management. If I was ever put in charge of getting the next generation hooked on cricket, I would have picked this game.",
      "The first time I truly understood cricket was this game. The second time I watched, it was because everyone in school was talking about it and I did not want to be left out. And once I was in, I wanted to lead the conversation, so I read Dainik Bhaskar cover to cover and came back armed with a nuanced expert take, something along the lines of Ricky Ponting having a spring in his bat which is why he was scoring so many runs. By the time the 2003 World Cup ended, I was addicted.",
      "Growing up, the only way to check the score on a school day was to sneak over to the library where there was a television. If you were lucky, your library period fell during match time and you got 40 minutes of uninterrupted cricket. If not, you went during lunch break, got the score from the teacher, and relayed it to every interested kid in school. Good news travelled fast. Bad news also travelled fast, just with more silence.",
      "Let me explain what kind of fan you are dealing with. Cricket fans exist on a spectrum. On one end are people who tune in for big ICC tournaments and the IPL, know the top players, enjoy a win and move on from a loss. Then there are people who watch the big bilateral series and feel properly gutted when India loses. And then there is whatever I am. I have watched matches against Zimbabwe. I have stayed up until 4 AM for games against West Indies. I follow not just India but other big series around the world. If cricket is happening somewhere, there is a reasonable chance I am watching it.",
      "Most of the extreme stuff happened growing up and in college, which is my only defence. Here is a partial list, see how many you can relate to:",
      "1. Watched an entire day of test cricket, 6 to 7 hours of television",
      "2. Watched a full 50 over one day game, close to 8 hours",
      "3. Stayed up until 4 AM for a game",
      "4. Woken up at 3:30 AM to watch an India New Zealand match (many do it for the Ashes, but a true cricket fan wakes up for New Zealand)",
      "5. Skipped school to watch a cricket game",
      "6. Tried to get an expert opinion published on ESPNCricinfo",
      "7. Skipped a social gathering to watch a match",
      "I will also admit, not proudly, that results affect my mood. A win and the next morning feels lighter. A loss and there is a cloud. I have also developed the habit of dissociating from big games mid-way, telling myself I do not really care, which convinces nobody, least of all me.",
      "The other thing people find odd is how much cricket information I carry around in my head. Who bowled a crucial over in a 2007 knockout game, where the match was held, who was commentating. My general memory is terrible, I forget most things, but cricket data sits somewhere different, somewhere apparently permanent.",
      "Some of my best memories are not from watching alone. In college, hundreds of us would crowd around a screen, cheering every run and every wicket. There is a version of watching cricket alone that is also great, but the crowd version is a different sport entirely. Anyone who has been through that knows exactly what I mean.",
      "Sometimes I wonder how a silly game can take up this much space in a person's life. Then I watch a Kohli cover drive, or a Rohit pull shot, or a Bumrah yorker at the death, and I stop wondering. Yahi choti choti khushiyon ke liye toh aadmi jeeta hai. (It is these small joys that make life worth living.)",
    ]
  },
  'on-strategy-in-startups': {
    title: 'What strategy actually means inside a 50-person startup',
    date: 'February 2026',
    tag: 'Strategy',
    readTime: '4 min',
    paragraphs: ['Coming soon.']
  },
  'ai-implementation-lessons': {
    title: 'Three things nobody tells you about enterprise AI implementation',
    date: 'January 2026',
    tag: 'AI',
    readTime: '6 min',
    paragraphs: ['Coming soon.']
  },
}

const paraStyle: React.CSSProperties = {
  fontSize: 16,
  color: '#4a4540',
  lineHeight: 1.85,
  marginBottom: 20,
}

const headingStyle: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontSize: 20,
  fontWeight: 500,
  color: '#1c1814',
  marginBottom: 12,
  marginTop: 36,
  letterSpacing: '-0.01em',
}

function isHeading(text: string) {
  return /^\d+\.\s[A-Z]/.test(text) && text.length < 60
}

function renderParagraph(text: string, i: number) {
  if (isHeading(text)) {
    return <h2 key={i} style={headingStyle}>{text}</h2>
  }
  return <p key={i} style={paraStyle}>{text}</p>
}

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

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
      <div style={{ padding: '32px 0 0' }}>
        <Link href="/" style={{ fontSize: 13, color: '#afa89e', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          ← Adarsh Kabra
        </Link>
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
        {post.paragraphs.map((p, i) => renderParagraph(p, i))}
      </article>
    </div>
  )
}
