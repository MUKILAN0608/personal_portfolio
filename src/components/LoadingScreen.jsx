import { useMemo } from 'react'
import './LoadingScreen.css'
import Galaxy from './Galaxy/Galaxy'

export default function LoadingScreen({ progress }) {
  // Memoize Galaxy props to prevent unnecessary re-renders - more stars and faster animation
  // Stable props to prevent Galaxy from re-initializing
  const galaxyProps = useMemo(() => ({
    transparent: true,
    density: 2.0,
    starSpeed: 1.5,
    speed: 2.5,
    glowIntensity: 0.6,
    twinkleIntensity: 0.7,
    rotationSpeed: 0.4,
    hueShift: 0,
    saturation: 0.1,
    mouseInteraction: true,
    mouseRepulsion: true,
    repulsionStrength: 3,
    disableAnimation: false,
    focal: [0.5, 0.5],
    rotation: [1.0, 0.0]
  }), [])

  return (
    <div className="loading-screen">
      <div className="loading-galaxy-background">
        <Galaxy key="loading-galaxy" {...galaxyProps} />
      </div>
      <div className="loading-overlay"></div>
      <div className="loading-content">
        <div className="loading-text">
          <h2 className="loading-title">Hang tight, we're almost there!</h2>
          <div className="circular-progress-container">
            <svg className="circular-progress" viewBox="0 0 120 120">
              <defs>
                <linearGradient id="circularGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(28, 78, 234, 0.8)" />
                  <stop offset="25%" stopColor="rgba(74, 144, 226, 1)" />
                  <stop offset="50%" stopColor="rgba(135, 206, 250, 1)" />
                  <stop offset="75%" stopColor="rgba(74, 144, 226, 1)" />
                  <stop offset="100%" stopColor="rgba(28, 78, 234, 0.8)" />
                </linearGradient>
              </defs>
              <circle
                className="circular-progress-bg"
                cx="60"
                cy="60"
                r="54"
                fill="none"
                strokeWidth="8"
              />
              <circle
                className="circular-progress-bar"
                cx="60"
                cy="60"
                r="54"
                fill="none"
                strokeWidth="8"
                stroke="url(#circularGradient)"
                strokeDasharray={`${2 * Math.PI * 54}`}
                strokeDashoffset={`${2 * Math.PI * 54 * (1 - (progress || 0) / 100)}`}
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div className="circular-percentage">{Math.round(progress || 0)}%</div>
          </div>
          <p className="loading-message">Preparing something awesome for you...</p>
        </div>
      </div>
    </div>
  )
}

