import './About.css'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">
                    About
                </h2>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            I'm <strong>Ece Naz Gökalp</strong>, a senior Computer Engineering student
                            at Izmir University of Economics. I'm constantly developing myself in
                            software development, artificial intelligence, and web technologies.
                        </p>

                        <p>
                            During the fall semester of 2024-2025, I continued my education as an Erasmus
                            student at <strong>Clausthal Technical University</strong>. During this process, I had the
                            opportunity to work with different cultures and gain international experience.
                        </p>

                        <p>
                            I've developed projects in full-stack development, .NET ecosystem, AI/ML applications
                            with Python, and modern JavaScript frameworks. I'm a developer who is open to
                            continuous learning and exploring new technologies.
                        </p>
                    </div>

                    <div className="about-education">
                        <div className="education-card">
                            <div className="education-header">
                                <h3>Education History</h3>
                            </div>

                            <div className="education-timeline">
                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">Oct 2021 - June 2026</span>
                                        <h4>Izmir University of Economics</h4>
                                        <p>B.S. in Computer Engineering</p>
                                        <span className="timeline-note">Merit Scholarship • GPA: 2.96</span>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">Oct 2024 - Mar 2025</span>
                                        <h4>Clausthal Technical University</h4>
                                        <p>B.S. Informatik (Erasmus)</p>
                                        <span className="timeline-note">Exchange Student • Germany</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
