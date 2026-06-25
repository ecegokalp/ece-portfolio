import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'Python', level: 85 },
                { name: 'C#', level: 85 },
                { name: 'Dart', level: 80 },
                { name: 'Java', level: 75 },
                { name: 'TypeScript', level: 75 }
            ]
        },
        {
            title: 'Frameworks & Libraries',
            skills: [
                { name: 'Flutter', level: 85 },
                { name: '.NET', level: 85 },
                { name: 'React', level: 80 },
                { name: 'Angular', level: 70 },
                { name: 'Flask', level: 75 },
                { name: 'WPF', level: 80 }
            ]
        },
        {
            title: 'Tools & Platforms',
            skills: [
                { name: 'Firebase', level: 80 },
                { name: 'Google Gemini AI', level: 85 },
                { name: 'Git & GitHub', level: 85 },
                { name: 'SQL / SQLite', level: 80 },
                { name: 'Google ML Kit', level: 70 }
            ]
        }
    ]

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">
                    Skills
                </h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <div className="category-header">
                                <h3 className="category-title">{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ '--progress': `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
