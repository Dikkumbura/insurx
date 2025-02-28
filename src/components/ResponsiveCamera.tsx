import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export const ResponsiveCamera = () => {
  const { camera, size } = useThree();

  useEffect(() => {
    if (size.width < 768) {
      camera.position.set(0, 0, 15); // Move camera further away on mobile
    } else {
      camera.position.set(0, 0, 10);
    }
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}; 