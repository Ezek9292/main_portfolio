
const experiences = [
    {
        company: 'Amalitech Ghana',
        role: 'Backend Developer (Intern)',
        date: '11/2025 – 12/2025',
        description: [
            'Collaborating in a 3-member development team to design and build a fully functional Library Management System.',
            'Working with Node.js (Express) and MongoDB to build secure RESTful APIs for user authentication, book management, and borrowing workflows.',
            'Implementing frontend interfaces using React.js, focusing on responsive UI and user dashboard features.',
            'Integrating backend and frontend services and managing state across different pages.',
            'Using Git & GitHub for source control, collaborating through feature branches, pull requests, and code reviews.',
            'Participating in daily standups, sprint planning, and Agile development activities.',
            'Applying best practices in API validation (Joi), security middleware, and error handling.'
        ]
    },
    {
        company: 'Dodoo Coding Club',
        role: 'Assistant Coding Instructor (Intern)',
        date: '10/2025 – 11/2025',
        description: [
            'Assist in teaching young learners foundational programming concepts using HTML, CSS, JavaScript, and Python.',
            'Support lesson planning and coding exercises that introduce students to web development and logical problem-solving.',
            'Guide students through hands-on projects, helping them understand core coding principles like variables, loops, and functions.',
            'Provide one-on-one mentorship to reinforce learning and encourage creativity through practical coding challenges.',
            'Collaborate with senior instructors to design an engaging and supportive learning environment that fosters curiosity and teamwork.'
        ]
    },
    {
        company: 'Speedaf Logistics Company',
        role: 'Assistant Warehouse Supervisor',
        date: '03/2021 - 08/2023',
        description: [
            'Supervised and coordinated a team of 10 operators, optimizing workflows, ensuring compliance with standards, and driving consistent productivity.',
            'Assisted supervisor in preparing and reviewing monthly reports, ensuring accuracy, completeness, and timely submission.',
            'Proposed and implemented an innovative solution that reduced instances of missing parcels, improving accuracy and efficiency.',
            'Monitored and verified the receipt of all parcels at designated sites, ensuring accuracy, accountability, and timely delivery.'
        ]
    }
];

const education = [
    {
        school: 'MEST Africa',
        degree: 'Backend Developer, FastAPI (Python)',
        date: '11/2025'
    },
    {
        school: 'Axia Africa',
        degree: 'Frontend Developer',
        date: '09/2025',
        location: 'Online'
    },
    {
        school: 'University of Cape Coast',
        degree: 'Bachelor of Commerce in Marketing',
        date: '05/2019',
        location: 'Cape Coast'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="title">Work Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{exp.role}</h3>
                                    <span className="company">{exp.company}</span>
                                    <span className="date">{exp.date}</span>
                                </div>
                                <ul className="timeline-list">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="title" style={{ marginTop: '4rem' }}>Education</h2>
                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card">
                            <h3>{edu.school}</h3>
                            <p className="degree">{edu.degree}</p>
                            <div className="meta">
                                <span>{edu.date}</span>
                                {edu.location && <span> • {edu.location}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .timeline {
          margin-top: 3rem;
          position: relative;
          border-left: 2px solid rgba(255, 255, 255, 0.1);
          margin-left: 1rem;
        }
        .timeline-item {
          margin-bottom: 3rem;
          padding-left: 2rem;
          position: relative;
        }
        .timeline-dot {
          position: absolute;
          left: -7px;
          top: 0;
          width: 12px;
          height: 12px;
          background: var(--accent-primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-glow);
        }
        .timeline-header {
          margin-bottom: 1rem;
        }
        .timeline-header h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
        }
        .company {
          color: var(--accent-primary);
          font-weight: 600;
          display: block;
          margin-bottom: 0.25rem;
        }
        .date {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .timeline-list {
          list-style-type: none;
        }
        .timeline-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }
        .timeline-list li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--accent-primary);
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .education-card {
          background: var(--bg-secondary);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .education-card h3 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .degree {
          color: var(--accent-primary);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        .meta {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
      `}</style>
        </section>
    );
};

export default Experience;
