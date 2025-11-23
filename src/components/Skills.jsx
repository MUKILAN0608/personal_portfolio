import './Skills.css'

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'Node.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Python', level: 85 },
  { name: 'Three.js', level: 75 },
  { name: 'CSS/SCSS', level: 90 },
  { name: 'Git', level: 85 },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span>
          Skills & Expertise
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
