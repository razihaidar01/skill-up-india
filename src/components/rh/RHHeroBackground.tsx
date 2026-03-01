import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 800;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color("#22d3ee");
    const purple = new THREE.Color("#6366f1");
    const blue = new THREE.Color("#3b82f6");
    const teal = new THREE.Color("#14b8a6");
    const palette = [cyan, cyan, purple, blue, blue, teal];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 8;
      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi) - 4;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.008;
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.005) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function NetworkLines() {
  const groupRef = useRef<THREE.Group>(null);

  const linePositions = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < 30; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6 - 3
        )
      );
    }
    const lines: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 4.5) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lines.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    return new Float32Array(lines);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.012) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} count={linePositions.length / 3} />
        </bufferGeometry>
        <lineBasicMaterial color="#22d3ee" transparent opacity={0.035} />
      </lineSegments>
    </group>
  );
}

function AmbientGlow() {
  const ref = useRef<THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.02;
    ref.current.material.opacity = 0.03 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.01;
  });

  return (
    <mesh ref={ref} position={[0, 0, -5]}>
      <planeGeometry args={[20, 20]} />
      <meshBasicMaterial color="#6366f1" transparent opacity={0.03} />
    </mesh>
  );
}

export function RHHeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ParticleField />
        <NetworkLines />
        <AmbientGlow />
      </Canvas>
    </div>
  );
}
