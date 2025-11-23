import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function PhoenixCharacter({ onLoad, ...props }) {
  const group = useRef()
  // Using cyber_samurai.glb (Sketchfab model: CYBERNETIC SAMURAI - WRATH - 7 DEADLY SINS)
  // If you download the specific Sketchfab model, rename it to 'cybernetic_samurai.glb' and it will be used instead
  const modelPath = '/cyber_samurai.glb'
  const { scene, animations } = useGLTF(modelPath)
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    if (scene) {
      // Traverse and ensure all meshes have proper materials
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = false
          child.receiveShadow = false
          
          // Ensure material exists and is properly configured
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => {
                if (mat) {
                  mat.needsUpdate = true
                  // Ensure material is visible and properly lit
                  if (mat.emissive) mat.emissive.multiplyScalar(0)
                }
              })
            } else {
              child.material.needsUpdate = true
              if (child.material.emissive) child.material.emissive.multiplyScalar(0)
            }
          }
        }
      })

      // Notify parent that model is loaded
      if (onLoad) {
        setTimeout(() => onLoad(true), 100)
      }
    }
  }, [scene, onLoad])

  useEffect(() => {
    // Play all animations if they exist
    if (actions && Object.keys(actions).length > 0) {
      Object.values(actions).forEach((action) => {
        if (action) {
          action.reset().fadeIn(0.5).play()
          action.setEffectiveTimeScale(0.8)
        }
      })
    }
  }, [actions])

  // Stable position - only update animations
  useFrame((state) => {
    if (group.current && mixer) {
      mixer.update(state.clock.getDelta())
    }
  })

  if (!scene) {
    return null
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/cyber_samurai.glb')








