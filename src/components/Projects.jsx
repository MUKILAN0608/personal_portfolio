import './Projects.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
    image: 'project1'
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather application with real-time data visualization. Built with React and Chart.js for beautiful data presentations.',
    tech: ['React', 'Chart.js', 'API Integration'],
    link: '#',
    github: '#',
    image: 'project2'
  },
  {
    title: '3D Portfolio Website',
    description: 'Immersive portfolio website with Three.js animations and interactive 3D elements. Showcasing modern web development techniques.',
    tech: ['React', 'Three.js', 'GLSL'],
    link: '#',
    github: '#',
    image: 'project3'
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span>
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">{project.image}</div>
                <div className="project-overlay">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a>
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
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
