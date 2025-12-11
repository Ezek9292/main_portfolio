
const projects = [
  {
    title: 'Advertisement Management API',
    description: 'Developed a fully functional API for an online store using FastAPI. Implemented key features such as user authentication, product management (CRUD operations), and database integration.',
    tags: ['FastAPI', 'Python', 'Database Integration'],
    image: 'https://placehold.co/600x400/1e293b/6366f1?text=Ad+API',
    link: 'https://github.com/INNOTELL/advertisement_management_api',
  },
  {
    title: 'Book Search & Reading List',
    description: 'Built a Book Search application using FastAPI (backend) and Google Books API for data. Frontend built with HTML, CSS, JavaScript. Features search, detailed retrieval, and recommendations.',
    tags: ['FastAPI', 'Python', 'MongoDB', 'HTML/CSS/JS'],
    image: 'https://placehold.co/600x400/1e293b/a855f7?text=Book+Search',
    link: 'https://book-search-frontend-62jqhxkuw-ezekiel-donkors-projects.vercel.app/'
  },
  {
    title: 'Event Management API',
    description: 'Designed a scalable Event Management API using FastAPI with MongoDB. Features event CRUD, registration endpoints, validation, error handling, and modular architecture.',
    tags: ['FastAPI', 'MongoDB', 'API Design'],
    image: 'https://placehold.co/600x400/1e293b/14b8a6?text=Event+API',
    link: 'https://github.com/Ezek9292/event_project_APLI'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>View Project</a>
                  ) : (
                    <button className="btn btn-primary">View Project</button>
                  )}
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .project-card {
          background: var(--bg-secondary);
          border-radius: 12px;
          overflow: hidden;
          transition: var(--transition-medium);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-medium);
        }
        .project-card:hover .project-image img {
          transform: scale(1.05);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-fast);
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .project-info {
          padding: 1.5rem;
        }
        .project-info h3 {
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        .project-info p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tag {
          font-size: 0.8rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
        }
      `}</style>
    </section>
  );
};

export default Projects;
