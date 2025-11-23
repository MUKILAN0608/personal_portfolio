import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useState } from 'react'
import PhoenixCharacter from './PhoenixCharacter'
import './NinjaModel.css'

export default function PhoenixModel({ onModelLoad }) {
  const [modelLoaded, setModelLoaded] = useState(false)

  const handleModelLoad = (success) => {
    setModelLoaded(success)
    if (onModelLoad) {
      onModelLoad(success)
    }
  }

  return (
    <div className="ninja-container">
      <Canvas
        camera={{ position: [0, 1, 7], fov: 45 }}
        gl={{ 
          alpha: true, 
          antialias: true, 
          preserveDrawingBuffer: true,
          toneMappingExposure: 1.2,
          shadowMap: false,
          powerPreference: 'high-performance',
          premultipliedAlpha: false
        }}
        className="ninja-canvas"
        dpr={[1, 2]}
        onCreated={(state) => {
          state.gl.setClearColor(0x000000, 0)
          const canvas = state.gl.domElement
          canvas.style.background = 'transparent'
          canvas.style.backgroundColor = 'transparent'
          // Force clear to transparent
          state.gl.clearColor(0, 0, 0, 0)
        }}
      >
        {/* Professional Three-Point Lighting Setup */}
        
        {/* Base Ambient Light - provides overall scene illumination */}
        <ambientLight intensity={0.4} color="#ffffff" />
        
        {/* Hemisphere Light - simulates natural sky and ground lighting */}
        <hemisphereLight 
          skyColor="#4a90e2" 
          groundColor="#1a1a2e" 
          intensity={0.6}
        />
        
        {/* Key Light - primary light source (main illumination) */}
        <directionalLight 
          position={[5, 8, 5]} 
          intensity={2.2}
          color="#ffffff"
          castShadow={false}
        />
        
        {/* Secondary Key Light - adds depth and dimension */}
        <directionalLight 
          position={[-5, 6, 3]} 
          intensity={1.0}
          color="#f5f5f5"
        />
        
        {/* Fill Light - softens shadows on the opposite side */}
        <directionalLight 
          position={[-4, 2, -3]} 
          intensity={0.7}
          color="#e8e8e8"
        />
        
        {/* Rim Light - creates edge definition and separation from background */}
        <directionalLight 
          position={[0, 4, -8]} 
          intensity={1.5}
          color="#4a90e2"
        />
        
        {/* Accent Point Lights - add highlights and visual interest */}
        <pointLight 
          position={[6, 4, 5]} 
          intensity={1.8} 
          color="#F4C95D" 
          distance={20} 
          decay={1.5} 
        />
        <pointLight 
          position={[-5, 3, 4]} 
          intensity={1.2} 
          color="#FFE7B3" 
          distance={18} 
          decay={1.5} 
        />
        <pointLight 
          position={[0, -1, 7]} 
          intensity={1.0} 
          color="#4a90e2" 
          distance={15} 
          decay={1.5} 
        />
        
        {/* Top-down Spotlight - provides dramatic focus */}
        <spotLight
          position={[0, 12, 0]}
          angle={0.6}
          penumbra={0.6}
          intensity={1.8}
          color="#ffffff"
          distance={25}
        />
        
        <Suspense fallback={null}>
          <PhoenixCharacter 
            scale={[2.5, 2.5, 2.5]} 
            position={[0, -4.5, 0]} 
            onLoad={handleModelLoad}
          />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          autoRotate={false}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI / 2.1}
          minAzimuthAngle={-Math.PI / 5}
          maxAzimuthAngle={Math.PI / 5}
          target={[0, -2, 0]}
        />
      </Canvas>
    </div>
  )
}

