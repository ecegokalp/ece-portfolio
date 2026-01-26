import './Experience.css'

const Experience = () => {
    const experiences = [
        {
            company: 'VakıfBank',
            role: 'Software Developer Intern',
            period: 'June 2025 - August 2025',
            location: 'IFM, Ataşehir, Istanbul',
            description: [
                'Developed full-stack Interest Management System (.NET)',
                'Designed modular React.js credit calculator component',
                'Implemented annuity-based algorithms and KKDF/BSMV tax compliance',
                'JSON-based data seeding for multi-currency interest rates database design'
            ],
            technologies: ['.NET ', 'C#', 'Angular', 'React.js', 'SQL Server', 'RESTful API']
        }
    ]

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">
                    Experience
                </h2>

                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <div className="experience-content">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="experience-role">{exp.role}</h3>
                                        <p className="experience-company">{exp.company}</p>
                                    </div>
                                    <div className="experience-meta">
                                        <span className="experience-period">{exp.period}</span>
                                        <span className="experience-location">{exp.location}</span>
                                    </div>
                                </div>

                                <ul className="experience-description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <div className="experience-tech">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="experience-note">
                    <p>
                        As a developer starting my career, I focus on continuous learning and
                        gaining professional experience. Every project and internship experience
                        makes me a better developer.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Experience
