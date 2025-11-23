import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span>
          About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate developer with a love for creating 
              exceptional digital experiences. I enjoy building everything from 
              small business sites to rich interactive web applications.
            </p>
            <p>
              My goal is to always build products that provide pixel-perfect, 
              performant experiences while writing clean, efficient code.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="tech-list">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Three.js</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <span>Your Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
