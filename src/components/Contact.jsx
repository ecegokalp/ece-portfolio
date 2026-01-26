import './Contact.css'

const Contact = () => {
    const contactInfo = [
        {
            icon: '📧',
            label: 'Email',
            value: 'ecenazgokalp@hotmail.com',
            href: 'mailto:ecenazgokalp@hotmail.com'
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'linkedin.com/in/ece-naz-gökalp',
            href: 'https://www.linkedin.com/in/ece-naz-g%C3%B6kalp-8b245821b/'
        },
        {
            icon: '🐙',
            label: 'GitHub',
            value: 'github.com/ecegokalp',
            href: 'https://github.com/ecegokalp'
        }
    ]

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-content">
                        <h2 className="section-title">
                            Contact
                        </h2>

                        <p className="contact-intro">
                            I'm open to new opportunities and collaborations.
                            Have a project or just want to say hello?
                            Feel free to reach out!
                        </p>

                        <div className="contact-cards">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.href}
                                    target={info.href.startsWith('http') ? '_blank' : undefined}
                                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="contact-card"
                                >
                                    <span className="contact-icon">{info.icon}</span>
                                    <div className="contact-details">
                                        <span className="contact-label">{info.label}</span>
                                        <span className="contact-value">{info.value}</span>
                                    </div>
                                    <svg className="contact-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="contact-visual">
                        <div className="contact-decoration">
                            <div className="deco-circle deco-1"></div>
                            <div className="deco-circle deco-2"></div>
                            <div className="deco-circle deco-3"></div>
                        </div>

                        <div className="contact-cta">
                            <h3>Let's Work Together!</h3>
                            <p>
                                I'm always ready to connect for software development,
                                AI projects, or internship opportunities.
                            </p>
                            <a
                                href="mailto:ecenazgokalp@hotmail.com"
                                className="btn btn-primary"
                            >
                                <span>Send Email</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
