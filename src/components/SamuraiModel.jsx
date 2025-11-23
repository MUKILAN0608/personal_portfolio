import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useState } from 'react'
import CyberSamurai from './CyberSamurai'
import './SamuraiModel.css'

export default function SamuraiModel({ onModelLoad }) {
  const [modelLoaded, setModelLoaded] = useState(false)

  const handleModelLoad = (success) => {
    setModelLoaded(success)
    if (onModelLoad) {
      onModelLoad(success)
    }
  }

  return (
    <div className="samurai-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 40 }}
        gl={{ 
          alpha: true, 
          antialias: true, 
          preserveDrawingBuffer: true,
          toneMappingExposure: 1.5,
          shadowMap: true,
          powerPreference: 'high-performance'
        }}
        className="samurai-canvas"
        dpr={[1, 2]}
        onCreated={(state) => {
          state.gl.setClearColor(0x000000, 0)
        }}
      >
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={1.0} />
        
        {/* Main Key Light */}
        <directionalLight 
          position={[8, 8, 6]} 
          intensity={2.0} 
          castShadow={false}
        />
        
        {/* Fill Light */}
        <directionalLight position={[-6, 4, -4]} intensity={0.8} />
        
        {/* Rim Light */}
        <directionalLight position={[0, 5, -8]} intensity={1.0} color="#1C4EEA" />
        
        {/* Accent Lights */}
        <pointLight position={[4, 3, 4]} intensity={1.5} color="#F4C95D" distance={15} decay={2} />
        <pointLight position={[-4, 2, 4]} intensity={1.0} color="#FFE7B3" distance={12} decay={2} />
        <pointLight position={[0, -2, 6]} intensity={0.8} color="#1C4EEA" distance={10} decay={2} />
        
        {/* Spot Light for Focus */}
        <spotLight
          position={[0, 10, 0]}
          angle={0.4}
          penumbra={0.5}
          intensity={1.2}
          castShadow={false}
          color="#ffffff"
        />
        
        <Suspense fallback={null}>
          <CyberSamurai 
            scale={[2.5, 2.5, 2.5]} 
            position={[0, -2.5, 0]} 
            onLoad={handleModelLoad}
          />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          autoRotate
          autoRotateSpeed={1.2}
          minPolarAngle={Math.PI / 3.8}
          maxPolarAngle={Math.PI / 2.1}
          minAzimuthAngle={-Math.PI / 5}
          maxAzimuthAngle={Math.PI / 5}
          target={[0, -0.5, 0]}
        />
      </Canvas>
    </div>
  )
}

