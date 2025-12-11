
const About = () => {
    return (
        <section id="about" className="section bg-secondary">
            <div className="container">
                <h2 className="title">About Me</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I am an experienced developer with a focus on Python, FastAPI, JavaScript, MongoDB, and Postgres.
                            I am adept at building RESTful APIs, integrating third-party services, and managing databases.
                        </p>
                        <p>
                            I have a strong understanding of backend architecture, authentication systems, and API performance optimization.
                            I am passionate about solving complex problems through efficient code and collaborating on innovative, data-driven projects.
                        </p>
                    </div>
                    <div className="skills-card">
                        <h3>Skills</h3>

                        <div className="skill-category">
                            <h4>Languages</h4>
                            <ul className="skills-list">
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h4>Frameworks</h4>
                            <ul className="skills-list">
                                <li>FastAPI</li>
                                <li>React</li>
                                <li>Node.js</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h4>Databases & Tools</h4>
                            <ul className="skills-list">
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Photoshop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        .bg-secondary {
          background-color: var(--bg-secondary);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 2rem;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
        .about-text {
          color: var(--text-secondary);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .skills-card {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .skill-category {
          margin-bottom: 1.5rem;
        }
        .skill-category h4 {
          color: var(--text-primary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          opacity: 0.8;
        }
        .skills-card h3 {
          margin-bottom: 1.5rem;
          color: var(--accent-primary);
        }
        .skills-list {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .skills-list li {
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-primary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }
      `}</style>
        </section>
    );
};

export default About;
