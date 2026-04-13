import Link from 'next/link'

export default function Cricket() {
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 32px' }}>
      <div style={{ padding: '32px 0 0' }}>
        <Link href="/" style={{ fontSize: 13, color: '#afa89e' }}>← Adarsh Kabra</Link>
      </div>
      <header style={{ padding: '40px 0 40px', borderBottom: '1px solid #e4dfd7' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
          <span className="tag">Personal</span>
          <span style={{ fontSize: 12, color: '#c4bdb4' }}>April 2026</span>
          <span style={{ fontSize: 12, color: '#c4bdb4' }}>· 5 min read</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 38px)', fontWeight: 500, color: '#1c1814', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
          Confessions of a cricket addict
        </h1>
      </header>
      <article style={{ padding: '40px 0 80px' }}>
        <p style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.85, marginBottom: 20 }}>My first real memory of understanding what was actually going on in a cricket game is the 2003 World Cup match against Pakistan. Sachin Tendulkar was batting unbelievably, upper cutting Shoaib Akhtar over third man like the man was bowling gentle medium pace. My family is not the kind that jumps around or screams, but they were deep in discussion every over, debating how India should negotiate Wasim, Waqar and Shoaib. Cricket had turned them into team management. If I was ever put in charge of getting the next generation hooked on cricket, I would have picked this game.</p>
        <p style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.85, marginBottom: 20 }}>The first time I truly understood cricket was this game. The second time I watched, it was because everyone in school was talking about it and I did not want to be left out. And once I was in, I wanted to lead the conversation, so I read Dainik Bhaskar cover to cover and came back armed with a nuanced expert take, something along the lines of Ricky Ponting having a spring in his bat which is why he was scoring so many runs. By the time the 2003 World Cup ended, I was addicted.</p>
        <p style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.85, marginBottom: 20 }}>Growing up, the only way to check the score on a school day was to sneak over to the library where there was a television. If you were lucky, your library period fell during match time and you got 40 minutes of uninterrupted cricket. If not, you went during lunch break, got the score from the teacher, and relayed it to every interested kid in school. Good news travelled fast. Bad news also travelled fast, just with more silence.</p>
        <p style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.85, marginBottom: 20 }}>Let me explain what kind of fan you are dealing with. Cricket fans exist on a spectrum. On one end are people who tune in for big ICC tournaments and the IPL, know the top players, enjoy a win and move on from a loss. Then there are people who watch the big bilateral series and feel properly gutted when India loses. And then there is whatever I am. I have watched matches against Zimbabwe. I have stayed up until 4 AM for games against West Indies. I follow not just India but other big series around the world. If cricket is happening somewhere, there is a reasonable chance I am watching it.</p>
        <p style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.85, marginBottom: 20 }}>Most of the extreme stuff happened growing up and in college, which is my only defence. Here is a partial list, see how many you can relate to:</p>
        <p style={{ fontSize: 16, color: '#4a4540', lineHeight: 2, marginBottom: 20 }}>
          1. Watched an entire day of test cricket, 6 to 7 hours of television<br/>
          2. Watched a full 50 over one day game, close to 8 hours<br/>
          3. Stayed up until 4 AM for a game<br/>
          4. Woken up at 3:30 AM to watch an India New Zealand match (many do it for the Ashes, but a true cricket fan wakes up for New Zealand)<br/>
          5. Skipped school to watch a cricket game<br/>
          6. Tried to get an expert opinion published on ESPNCricinfo<br/>
          7. Skipped a social gathering to watch a match
        </p>
        <p style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.85, marginBottom: 20 }}>I will also admit, not proudly, that results affect my mood. A win and the next morning feels lighter. A loss and there is a cloud. I have also developed the habit of dissociating from big games mid-way, telling myself I do not really care, which convinces nobody, least of all me.</p>
        <p style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.85, marginBottom: 20 }}>The other thing people find odd is how much cricket information I carry around in my head. Who bowled a crucial over in a 2007 knockout game, where the match was held, who was commentating. My general memory is terrible, I forget most things, but cricket data sits somewhere different, somewhere apparently permanent.</p>
        <p style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.85, marginBottom: 20 }}>Some of my best memories are not from watching alone. In college, hundreds of us would crowd around a screen, cheering every run and every wicket. There is a version of watching cricket alone that is also great, but the crowd version is a different sport entirely. Anyone who has been through that knows exactly what I mean.</p>
        <p style={{ fontSize: 16, color: '#4a4540', lineHeight: 1.85, marginBottom: 20 }}>Sometimes I wonder how a silly game can take up this much space in a person's life. Then I watch a Kohli cover drive, or a Rohit pull shot, or a Bumrah yorker at the death, and I stop wondering. Yahi choti choti khushiyon ke liye toh aadmi jeeta hai. (It is these small joys that make life worth living.)</p>
      </article>
    </div>
  )
}
