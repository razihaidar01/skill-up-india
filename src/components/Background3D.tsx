import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 600;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    // SIAT brand colors in RGB
    const navy = new THREE.Color("hsl(220, 56%, 23%)");
    const teal = new THREE.Color("hsl(166, 72%, 28%)");
    const gold = new THREE.Color("hsl(45, 70%, 47%)");
    const palette = [navy, teal, gold];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread particles in a wide area
      pos[i3] = (Math.random() - 0.5) * 20;
      pos[i3 + 1] = (Math.random() - 0.5) * 14;
      pos[i3 + 2] = (Math.random() - 0.5) * 10;

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i3] = color.r;
      col[i3 + 1] = color.g;
      col[i3 + 2] = color.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.02;
    meshRef.current.rotation.x = Math.sin(time * 0.015) * 0.1;

    const posArr = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArr[i3 + 1] += Math.sin(time * 0.3 + i * 0.1) * 0.001;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGeometry() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.05;
    group.current.rotation.x = Math.sin(t * 0.03) * 0.15;
  });

  return (
    <group ref={group}>
      {/* Circuit-like wireframe shapes representing technology */}
      <mesh position={[-3, 1.5, -2]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshBasicMaterial
          color="hsl(166, 72%, 28%)"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
      <mesh position={[3.5, -1, -3]}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial
          color="hsl(220, 56%, 23%)"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
      <mesh position={[0, -2.5, -1.5]}>
        <torusGeometry args={[1.2, 0.02, 8, 32]} />
        <meshBasicMaterial
          color="hsl(45, 70%, 47%)"
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh position={[-4, -1.5, -4]}>
        <dodecahedronGeometry args={[0.6, 0]} />
        <meshBasicMaterial
          color="hsl(45, 70%, 47%)"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
      <mesh position={[4.5, 2, -5]}>
        <tetrahedronGeometry args={[0.7, 0]} />
        <meshBasicMaterial
          color="hsl(166, 72%, 28%)"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}

export function Background3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <Particles />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
