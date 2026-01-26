import './Hero.css'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-orb hero-orb-3"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-greeting">
                        <span className="greeting-line"></span>
                        <span>Hello, I'm</span>
                    </div>

                    <h1 className="hero-name">
                        Ece Naz <span className="gradient-text">Gökalp</span>
                    </h1>

                    <h2 className="hero-title">
                        <span className="title-static">Software Developer</span>
                        <span className="title-dynamic">
                            <span className="title-item">& Computer Engineering Student</span>
                        </span>
                    </h2>

                    <p className="hero-description">
                        I'm a senior Computer Engineering student at Izmir University of Economics.
                        I'm passionate about full-stack development, AI/ML, and modern web technologies.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            <span>View Projects</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <span>Get in Touch</span>
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">4+</span>
                            <span className="stat-label">Years of Study</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">1</span>
                            <span className="stat-label">Internship</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-image-wrapper">
                        <div className="hero-image-glow"></div>
                        <div className="hero-image-container">
                            <img
                                src={import.meta.env.BASE_URL + "profile.jpg"}
                                alt="Ece Naz Gökalp"
                                className="hero-photo"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    )
}

export default Hero
