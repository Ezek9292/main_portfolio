

const Hero = () => {
  return (
    <section className="section hero">
      <div className="container hero-content">
        <h1 className="title animate-fade-in">
          Hi, I'm Ezekiel Donkor <br />
          <span style={{ color: 'var(--accent-primary)', fontSize: '0.8em' }}>Backend Developer</span>
        </h1>
        <p className="subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Results-driven Backend Developer passionate about designing, building, and maintaining scalable server-side applications.
        </p>
        <div className="cta-group animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; /* Offset for fixed header */
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 800px;
        }
        .cta-group {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Hero;
