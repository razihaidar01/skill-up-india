import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 800;

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);

    const navy = new THREE.Color("hsl(220, 56%, 23%)");
    const teal = new THREE.Color("hsl(166, 72%, 28%)");
    const gold = new THREE.Color("hsl(45, 70%, 47%)");
    const white = new THREE.Color("hsl(220, 20%, 80%)");
    const palette = [navy, navy, teal, teal, gold, white];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread in a sphere-like distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 4 + Math.random() * 8;
      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi) - 3;

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i3] = color.r;
      col[i3 + 1] = color.g;
      col[i3 + 2] = color.b;

      siz[i] = 0.02 + Math.random() * 0.06;
    }
    return [pos, col, siz];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.015;

    const posArr = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArr[i3 + 1] += Math.sin(time * 0.4 + i * 0.05) * 0.0008;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
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

function ConnectedNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const lineRef = useRef<THREE.LineSegments>(null);

  const [nodePositions, linePositions] = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const nodeCount = 30;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6 - 2
        )
      );
    }

    // Connect nearby nodes
    const lines: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 5) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lines.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }

    return [nodes, new Float32Array(lines)];
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.02) * 0.1;
    groupRef.current.rotation.x = Math.cos(t * 0.015) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={linePositions.length / 3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="hsl(166, 72%, 28%)" transparent opacity={0.06} />
      </lineSegments>

      {/* Node dots */}
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? "hsl(45, 70%, 47%)" : "hsl(166, 72%, 28%)"}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.03;
    group.current.rotation.z = Math.sin(t * 0.02) * 0.1;
  });

  return (
    <group ref={group}>
      <mesh position={[-4, 2, -4]} rotation={[0.5, 0.3, 0]}>
        <torusGeometry args={[1.5, 0.015, 8, 48]} />
        <meshBasicMaterial color="hsl(45, 70%, 47%)" transparent opacity={0.15} />
      </mesh>
      <mesh position={[4, -1.5, -5]} rotation={[1, 0.5, 0.3]}>
        <torusGeometry args={[2, 0.015, 8, 48]} />
        <meshBasicMaterial color="hsl(166, 72%, 28%)" transparent opacity={0.1} />
      </mesh>
      <mesh position={[0, 0, -6]} rotation={[0.8, 0, 0.5]}>
        <torusGeometry args={[3, 0.01, 8, 64]} />
        <meshBasicMaterial color="hsl(220, 56%, 23%)" transparent opacity={0.08} />
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
        <ConnectedNodes />
        <FloatingRings />
      </Canvas>
    </div>
  );
}
