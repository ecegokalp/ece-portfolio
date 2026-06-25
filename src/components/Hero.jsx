import { useEffect, useRef, useState } from 'react'
import './Hero.css'

// Animates a number from 0 to its target once, on mount.
const CountUp = ({ value }) => {
    const match = String(value).match(/^(\d+)(.*)$/)
    const target = match ? parseInt(match[1], 10) : 0
    const suffix = match ? match[2] : ''
    const [count, setCount] = useState(0)
    const rafRef = useRef(null)

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setCount(target)
            return
        }
        const duration = 1200
        const start = performance.now()
        const tick = (now) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setCount(Math.round(target * eased))
            if (p < 1) rafRef.current = requestAnimationFrame(tick)
        }
        rafRef.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafRef.current)
    }, [target])

    return <span>{count}{suffix}</span>
}

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
                        <span className="title-static">Software Engineer · Full-Stack Developer</span>
                    </h2>

                    <p className="hero-description">
                        I'm a software developer who turns ideas into real, useful products — from
                        full-stack web platforms to AI-powered mobile apps. I'm especially passionate
                        about artificial intelligence, clean code, and building experiences that
                        genuinely help people.
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
                            <span className="stat-number"><CountUp value="4+" /></span>
                            <span className="stat-label">Years of Study</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number"><CountUp value="7+" /></span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number"><CountUp value="2" /></span>
                            <span className="stat-label">Internships</span>
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
