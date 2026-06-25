import './Experience.css'

const Experience = () => {
    const experiences = [
        {
            company: 'VakıfBank',
            role: 'Software Developer Intern',
            period: 'June 2025 - August 2025',
            location: 'IFM, Ataşehir, Istanbul',
            description: [
                'Architected a full-stack Interest Management System (.NET 8, Angular 19) with a modular React.js credit calculator component',
                'Implemented annuity-based algorithms and automated KKDF/BSMV tax compliance, improving calculation accuracy by 20%',
                'Designed a dynamic SQL Server database for multi-currency interest rates using JSON-based data seeding'
            ],
            technologies: ['.NET 8', 'C#', 'Angular 19', 'React.js', 'SQL Server', 'RESTful API']
        },
        {
            company: 'SCA Social',
            role: 'Project Management Intern (Remote)',
            period: 'October 2025 - November 2025',
            location: 'Remote',
            description: [
                'Authored project charters and scope definitions (objectives, deliverables, risks, stakeholders) for AI-focused product concepts',
                'Built project schedules and milestone tracking with Gantt charts',
                'Prepared organizational, process and OKR-based planning documentation'
            ],
            technologies: ['Project Management', 'Jira', 'Gantt Charts', 'OKR Planning']
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

            </div>
        </section>
    )
}

export default Experience
