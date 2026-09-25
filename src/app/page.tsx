export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" id="home">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Sylva home">
            <span className="brand-mark">✦</span>
            sylva
          </a>
          <div className="nav-links">
            <a href="#story">Our story</a>
            <a href="#journal">Journal</a>
            <a href="#visit">Visit us</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">A slower way forward</p>
          <h1>Find your way back to the wild.</h1>
          <p className="hero-copy">
            Quiet places, thoughtful stays, and a little more room to breathe.
            Come away with the forest still in you.
          </p>
          <a className="primary-button" href="#visit">
            Plan your escape <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="hero-footer">
          <span>Cabins among the pines</span>
          <span className="scroll-note"><i /> Scroll to explore</span>
        </div>
      </section>

      <section className="intro" id="story">
        <p className="eyebrow">The sylva spirit</p>
        <h2>Space to notice<br />what matters.</h2>
        <p className="intro-copy" id="journal">
          We make room for the small things: morning light through the canopy,
          the sound of rain on a tin roof, a long walk with nowhere to be.
        </p>
        <a className="text-link" href="#visit">Read our story <span aria-hidden="true">→</span></a>
      </section>

      <section className="visit-strip" id="visit">
        <span className="eyebrow">Your next chapter</span>
        <p>Stay a while.</p>
        <a className="outline-button" href="mailto:hello@sylva.example">hello@sylva.example <span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}