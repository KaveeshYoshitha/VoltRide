import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

// Extend JSX for Three.js elements
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      primitive: any;
    }
  }
}

interface ScooterModelProps {
  scale?: number;
  position?: [number, number, number];
}

export function ScooterModel({
  scale = 1,
  position = [0, 0, 0],
}: ScooterModelProps) {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF("/models/scooter-optimized.glb");

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} scale={scale} position={position}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/scooter.glb");
