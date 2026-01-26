import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'C#', level: 90 },
                { name: 'Python', level: 85 },
                { name: 'Java', level: 80 },
                { name: 'TypeScript', level: 75 }
            ]
        },
        {
            title: 'Frameworks & Technologies',
            skills: [
                { name: '.NET', level: 85 },
                { name: 'Angular', level: 75 },
                { name: 'React.js', level: 80 },
                { name: 'WPF', level: 85 },
                { name: 'Flask', level: 75 },
                { name: 'Tkinter', level: 80 }
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
