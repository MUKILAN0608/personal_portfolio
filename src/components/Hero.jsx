import { useEffect, useState } from 'react'
import StormCanvas from './StormCanvas'
import PhoenixModel from './PhoenixModel'
import LoadingScreen from './LoadingScreen'
import './Hero.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedName, setDisplayedName] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [modelLoaded, setModelLoaded] = useState(false)

  const fullName = 'Mukilan'

  useEffect(() => {
    // Simulate loading progress - faster speed
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 10 + 3
      })
    }, 150)

    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    // Complete loading when progress is ready - faster completion
    if (loadingProgress >= 90) {
      const timer = setTimeout(() => {
        setLoadingProgress(100)
        setTimeout(() => {
          setIsLoading(false)
          setIsVisible(true)
        }, 250)
      }, modelLoaded ? 100 : 300)
      
      return () => clearTimeout(timer)
    }
  }, [modelLoaded, loadingProgress])

  const handleModelLoad = (success) => {
    setModelLoaded(success)
    if (success) {
      setLoadingProgress(prev => Math.max(prev, 85))
    }
  }

  useEffect(() => {
    if (!isLoading) {
      // Typing animation for name
      let nameIndex = 0
      const nameInterval = setInterval(() => {
        if (nameIndex < fullName.length) {
          setDisplayedName(fullName.slice(0, nameIndex + 1))
          nameIndex++
        } else {
          clearInterval(nameInterval)
          setTimeout(() => setIsTyping(false), 500)
        }
      }, 150)
      
      return () => clearInterval(nameInterval)
    }
  }, [isLoading])

  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} />
  }

  return (
    <section className="hero" id="home">
      <StormCanvas />
      <PhoenixModel onModelLoad={handleModelLoad} />
      <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-text">
          <div className="greeting-text">
            <span className="gradient-text">The one chosen to build what the future hasn't dared to imagine.</span>
          </div>
          <h1 className="hero-title">
            <span className="name-text typing">
              {displayedName}
              {isTyping && <span className="cursor">|</span>}
            </span>
          </h1>
          <p className="hero-subtitle">
            <span className="highlight-text">AI/ML Engineer</span>
            <span className="separator"> & </span>
            <span className="highlight-text">Aspiring AI Researcher</span>
          </p>
          <div className="hero-description-wrapper">
            <p className="hero-description">
              Transforming cutting-edge AI research into production-ready solutions that deliver real business value.
              <br />
              Building intelligent systems that learn, adapt, and evolve—turning complex algorithms into scalable frameworks.
            </p>
            <p className="hero-description">
              Research-driven engineer crafting adaptive algorithms and distributed AI systems.
              <br />
              Combining theoretical excellence with practical engineering for robust, enterprise-scale solutions.
            </p>
          </div>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  )
}
