import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import * as THREE from 'three';

export const IridescentRing = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      // More dynamic rotation
      ringRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.3;
      ringRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.15) * 0.4;
      
      // Enhanced breathing effect
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.08;
      ringRef.current.scale.set(scale, scale, 1);
    }
  });

  return (
    <Torus
      ref={ringRef}
      args={[2.8, 0.4, 128, 256]} // Adjusted size for better proportion
      rotation={[0.5, 0, 0]}
    >
      <meshPhysicalMaterial
        roughness={0.1} // Reduced roughness for more shine
        metalness={0.9} // Slightly reduced metalness for better color visibility
        color={new THREE.Color("#3A7BD5").multiplyScalar(1.2)} // Metallic blue base color
        iridescence={0.8} // Slightly reduced for better base color visibility
        iridescenceIOR={2.2} // Adjusted for more natural color spread
        iridescenceThicknessRange={[200, 1400]} // Wider range for more color variation
        envMapIntensity={2} // Increased for more dramatic reflections
        clearcoat={0.8} // Reduced slightly for better color visibility
        clearcoatRoughness={0.2} // Increased slightly for softer reflections
        toneMapped={false} // Prevents color clamping for brighter highlights
      />
    </Torus>
  );
};