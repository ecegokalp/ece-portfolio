import { useState } from 'react'
import { createPortal } from 'react-dom'
import './Projects.css'

const baseUrl = import.meta.env.BASE_URL

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            id: 1,
            title: 'Presentation to Lecture Video Generator',
            shortTitle: 'Video Generator',
            description: 'AI-powered desktop application that transforms PowerPoint presentations into dynamic lecture videos using Google Gemini AI. Features automatic video production pipeline with slide extraction, TTS synchronization, and rendering.',
            technologies: ['Python', 'Google Gemini AI', 'Google Cloud TTS', 'Flet', 'MoviePy', 'DeepL API'],
            github: 'https://github.com/ecegokalp/pptx_converter',
            image: 'projects/video-generator.png',
            highlights: [
                'Multidisciplinary Engineering Capstone Project',
                'Dual-service translation system for 10+ languages',
                'Modern GUI with drag-and-drop functionality'
            ]
        },
        {
            id: 2,
            title: 'IEU Course Intelligence',
            shortTitle: 'Course AI',
            description: 'Custom RAG pipeline that cleans university course data and embeds it into ChromaDB, generating context-aware AI responses. Flask backend processes natural language queries about prerequisites and departments.',
            technologies: ['Python', 'Flask', 'React', 'ChromaDB', 'Google Gemini AI'],
            github: 'https://github.com/ecegokalp/IUE-Course-Intelligence',
            image: 'projects/course-intelligence.png',
            highlights: [
                'Custom RAG (Retrieval-Augmented Generation) pipeline',
                'Intelligent query filtering and response visualization',
                'Modern React frontend'
            ]
        },
        {
            id: 3,
            title: 'Integrated Assignment Environment',
            shortTitle: 'IAE',
            description: 'Desktop tool that automates programming assignment evaluation. Multi-language compiler architecture with ZIP extraction and output comparison reduces manual grading time.',
            technologies: ['C#', 'WPF', '.NET 9', 'SQLite', 'XAML', 'JSON'],
            github: 'https://github.com/benhur-okur/The-Integrated-Assignment-Environment',
            image: 'projects/iae.png',
            highlights: [
                'Customizable multi-language compiler',
                'Modern WPF interface',
                'Persistent project and result storage'
            ]
        },
        {
            id: 4,
            title: 'Library Management System',
            shortTitle: 'Library App',
            description: 'Desktop application with full CRUD functionality and JSON-based persistence for personal book collection management. User-friendly GUI with JavaFX and multi-criteria search algorithms.',
            technologies: ['Java 20', 'JavaFX 22', 'Gradle', 'FXML', 'Google Gson'],
            github: 'https://github.com/sudedaka/LibraryManagement',
            image: 'projects/library-management.png',
            highlights: [
                'Multi-criteria search algorithms',
                'Efficient data storage with Google Gson',
                'Modern interface design with FXML'
            ]
        },
        {
            id: 5,
            title: 'ExamTable Manager',
            shortTitle: 'Exam Scheduler',
            description: 'Desktop application designed to automate university exam scheduling. Uses constraint satisfaction algorithm to assign courses to classrooms and time slots while preventing student conflicts and respecting room capacities.',
            technologies: ['Python', 'Tkinter', 'SQLite', 'CSV/PDF Export'],
            github: 'https://github.com/ecegokalp/SE-302-Project',
            image: 'projects/exam-scheduler.png',
            highlights: [
                'Constraint satisfaction scheduling algorithm',
                'Multiple view modes: General, Daily, Student-based, Classroom-based',
                'CSV and PDF export functionality',
                'Database save/load with comparison feature'
            ]
        },
        {
            id: 6,
            title: 'Wander  Travel Companion',
            shortTitle: 'Wander',
            description: 'A cross-platform Flutter & Firebase travel app that pairs AI-powered trip planning with a social travel feed. Google Gemini builds day-by-day itineraries and even reads your tickets to auto-fill trips, while an interactive map, multi-currency budget tracker, and community stories round out the experience.',
            technologies: ['Flutter', 'Dart', 'Firebase', 'Google Gemini AI', 'REST API', 'OpenStreetMap'],
            github: 'https://github.com/ecegokalp/travellerApp',
            image: 'projects/wander.png',
            highlights: [
                'AI itineraries, checklists & blogs with Google Gemini',
                'Smart document scanning to auto-fill trips & calendar',
                'Interactive map with swipe-to-discover places',
                'Multi-currency budget planner with live rates',
                'Social feed: stories, following, likes & notifications'
            ]
        },
        {
            id: 7,
            title: 'MedTrack Plus: Senior Computer Engineering Capstone',
            shortTitle: 'MedTrack Plus',
            description: 'FENG 498 Project: a privacy-first Flutter health platform that uses on-device computer vision to verify a patient actually takes their medication, not just that it was dispensed. A scoring engine classifies each attempt as success, suspicious or rejected, uploading a short, auto-expiring clip for a caregiver to review only when the result is uncertain. Works with or without a custom ESP32 smart dispenser.',
            technologies: ['Flutter', 'Google ML Kit', 'Firebase', 'Dart', 'Computer Vision', 'Cloud Functions', 'TypeScript', 'Riverpod', 'FCM', 'ESP32'],
            github: 'https://github.com/efesrnn/medTrackPlus',
            image: 'projects/medtrack.png',
            highlights: [
                'Real-time on-device computer vision with Google ML Kit',
                'Three-way verification with caregiver review of uncertain cases',
                'Privacy-first: on-device inference, 24h auto-delete (KVKK)',
                'Device-Free Mode with multi-patient dashboards & bulk controls',
                'Serverless Firebase backend with optional ESP32 smart dispenser'
            ]
        }
    ]

    const closeModal = () => setSelectedProject(null)

    const Modal = () => {
        if (!selectedProject) return null

        return createPortal(
            <div className="project-modal-overlay" onClick={closeModal}>
                <div className="project-modal" onClick={e => e.stopPropagation()}>
                    <button className="modal-close" onClick={closeModal}>✕</button>

                    <div className="modal-image-container">
                        <img
                            src={baseUrl + selectedProject.image}
                            alt={selectedProject.title}
                            className="modal-image"
                        />
                    </div>

                    <div className="modal-content">
                        <h2 className="modal-title">{selectedProject.title}</h2>
                        <p className="modal-description">{selectedProject.description}</p>

                        <div className="modal-section">
                            <h4>Key Features</h4>
                            <ul className="modal-list">
                                {selectedProject.highlights.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal-section">
                            <h4>Technologies</h4>
                            <div className="modal-tech-list">
                                {selectedProject.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary github-btn"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            <span>View on GitHub</span>
                        </a>
                    </div>
                </div>
            </div>,
            document.body
        )
    }

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">
                    Projects
                </h2>

                <div className="projects-grid">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className="project-card"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-image-wrapper">
                                <img
                                    src={baseUrl + project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="project-overlay">
                                    <span className="view-btn">View Details</span>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.shortTitle}</h3>
                                <div className="project-tech-preview">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="tech-mini">{tech}</span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="tech-mini more">+{project.technologies.length - 3}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal />
        </section>
    )
}

export default Projects
