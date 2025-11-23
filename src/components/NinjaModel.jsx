import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useState } from 'react'
import NinjaCharacter from './NinjaCharacter'
import './NinjaModel.css'

export default function NinjaModel({ onModelLoad }) {
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
          toneMappingExposure: 1.5,
          shadowMap: false,
          powerPreference: 'high-performance'
        }}
        className="ninja-canvas"
        dpr={[1, 2]}
        onCreated={(state) => {
          state.gl.setClearColor(0x000000, 0)
        }}
      >
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={1.2} />
        
        {/* Main Key Light */}
        <directionalLight 
          position={[8, 8, 6]} 
          intensity={2.0}
        />
        
        {/* Fill Light */}
        <directionalLight position={[-6, 4, -4]} intensity={0.8} />
        
        {/* Rim Light */}
        <directionalLight position={[0, 5, -8]} intensity={1.2} color="#1C4EEA" />
        
        {/* Accent Lights */}
        <pointLight position={[4, 3, 4]} intensity={1.5} color="#F4C95D" distance={15} decay={2} />
        <pointLight position={[-4, 2, 4]} intensity={1.0} color="#FFE7B3" distance={12} decay={2} />
        <pointLight position={[0, -2, 6]} intensity={0.8} color="#1C4EEA" distance={10} decay={2} />
        
        {/* Spot Light for Focus */}
        <spotLight
          position={[0, 10, 0]}
          angle={0.5}
          penumbra={0.5}
          intensity={1.5}
          color="#ffffff"
        />
        
        <Suspense fallback={null}>
          <NinjaCharacter 
            scale={[2.0, 2.0, 2.0]} 
            position={[0, -2, 0]} 
            onLoad={handleModelLoad}
          />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          autoRotate
          autoRotateSpeed={1.0}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI / 2.1}
          minAzimuthAngle={-Math.PI / 5}
          maxAzimuthAngle={Math.PI / 5}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  )
}

