"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Edges, Grid, RoundedBox } from "@react-three/drei";

type SceneProps = {
  reduced?: boolean;
};

function seededRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Structure({ reduced = false }: SceneProps) {
  const group = useRef<THREE.Group>(null);
  const dust = useRef<THREE.Points>(null);
  const { width } = useThree((state) => state.size);

  const isDesktop = width >= 1024;
  const baseX = isDesktop ? 1.35 : 0;
  const baseY = isDesktop ? -0.05 : -0.15;
  const baseScale = isDesktop ? 1 : width >= 640 ? 0.88 : 0.72;
  const baseRotation = isDesktop ? -0.32 : -0.22;

  const dustPositions = useMemo(() => {
    const count = 240;
    const random = seededRandom(0x505049);
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (random() - 0.5) * 8;
      positions[i * 3 + 1] = (random() - 0.35) * 5.5;
      positions[i * 3 + 2] = (random() - 0.5) * 6;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (reduced || !group.current) return;
    const damp = 1 - Math.exp(-2.2 * delta);
    const pointer = state.pointer;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      baseRotation + pointer.x * 0.2,
      damp
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      0.02 - pointer.y * 0.07,
      damp
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      baseY + pointer.y * 0.06,
      damp
    );

    if (dust.current) {
      dust.current.rotation.y += delta * 0.018;
    }
  });

  return (
    <group ref={group} position={[baseX, baseY, 0]} scale={baseScale} rotation={[0.02, baseRotation, 0]}>
      <RoundedBox args={[4.7, 0.18, 3.3]} radius={0.025} smoothness={3} position={[0, -1.46, 0]}>
        <meshStandardMaterial color="#242b35" roughness={0.62} metalness={0.18} />
        <Edges color="#39434f" threshold={20} />
      </RoundedBox>

      <RoundedBox args={[4.0, 0.16, 2.7]} radius={0.02} smoothness={3} position={[-0.18, -1.02, 0.05]}>
        <meshStandardMaterial color="#2a323c" roughness={0.55} metalness={0.2} />
        <Edges color="#414b58" threshold={20} />
      </RoundedBox>

      <RoundedBox args={[3.25, 0.16, 2.15]} radius={0.02} smoothness={3} position={[0.16, -0.58, -0.02]}>
        <meshStandardMaterial color="#20262f" roughness={0.5} metalness={0.22} />
        <Edges color="#39434f" threshold={20} />
      </RoundedBox>

      <RoundedBox args={[1.85, 2.75, 1.45]} radius={0.035} smoothness={4} position={[0.02, 0.78, 0]}>
        <meshStandardMaterial color="#252d37" roughness={0.42} metalness={0.28} />
        <Edges color="#46515f" threshold={20} />
      </RoundedBox>

      <mesh position={[0.95, 0.78, 0.731]}>
        <boxGeometry args={[0.035, 2.35, 0.012]} />
        <meshStandardMaterial
          color="#e9a23b"
          emissive="#e9a23b"
          emissiveIntensity={0.45}
          metalness={0.55}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[0.02, 1.34, 0.731]}>
        <boxGeometry args={[1.55, 0.025, 0.012]} />
        <meshStandardMaterial
          color="#e9a23b"
          emissive="#e9a23b"
          emissiveIntensity={0.35}
          metalness={0.55}
          roughness={0.3}
        />
      </mesh>

      <RoundedBox
        args={[0.5, 3.15, 0.5]}
        radius={0.02}
        smoothness={3}
        position={[-0.92, 1.28, -0.42]}
        rotation={[0, 0, 0.035]}
      >
        <meshStandardMaterial color="#1d242d" roughness={0.48} metalness={0.3} />
        <Edges color="#3a4552" threshold={20} />
      </RoundedBox>

      <RoundedBox
        args={[0.08, 2.05, 1.28]}
        radius={0.012}
        smoothness={2}
        position={[1.12, 0.45, 0.12]}
        rotation={[0, 0, -0.02]}
      >
        <meshStandardMaterial color="#2f3843" roughness={0.4} metalness={0.35} />
        <Edges color="#4a5563" threshold={20} />
      </RoundedBox>

      <RoundedBox args={[2.15, 0.14, 1.2]} radius={0.02} smoothness={3} position={[0.02, 2.22, -0.08]}>
        <meshStandardMaterial color="#2c3540" roughness={0.45} metalness={0.28} />
        <Edges color="#47525f" threshold={20} />
      </RoundedBox>

      <mesh position={[-1.28, 0.55, 0.82]} rotation={[0, 0.32, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial
          color="#e9a23b"
          emissive="#b8791c"
          emissiveIntensity={0.18}
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>

      <mesh position={[-0.72, -0.02, 0.95]} rotation={[0, -0.18, 0]}>
        <boxGeometry args={[0.65, 0.32, 0.65]} />
        <meshStandardMaterial color="#1b222b" roughness={0.55} metalness={0.2} />
        <Edges color="#3a4552" threshold={20} />
      </mesh>

      <mesh position={[0, -1.34, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.1, 2.104, 128]} />
        <meshBasicMaterial color="#e9a23b" transparent opacity={0.28} side={THREE.DoubleSide} />
      </mesh>

      <Grid
        position={[0, -1.56, 0]}
        args={[14, 14]}
        cellSize={0.4}
        cellThickness={0.5}
        cellColor="#232e3d"
        sectionSize={2}
        sectionThickness={0.8}
        sectionColor="#33445a"
        fadeDistance={20}
        fadeStrength={1.4}
        infiniteGrid
      />

      <ContactShadows
        position={[0, -1.55, 0]}
        opacity={0.55}
        scale={13}
        blur={2.8}
        far={5}
        resolution={512}
        color="#000000"
      />

      <points ref={dust}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dustPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#e9a23b"
          size={0.022}
          sizeAttenuation
          transparent
          opacity={0.5}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default function StructureScene({ reduced = false }: SceneProps) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0.35, 7.2], fov: 34, near: 0.1, far: 60 }}
      frameloop={reduced ? "demand" : "always"}
    >
      <color attach="background" args={["#101c2c"]} />
      <fog attach="fog" args={["#101c2c", 9, 22]} />

      <ambientLight intensity={0.45} />
      <directionalLight color="#ffe2bc" intensity={2.6} position={[4.5, 6, 5]} />
      <directionalLight color="#8fb2e8" intensity={1.5} position={[-5, 2.5, -4]} />
      <pointLight color="#e9a23b" intensity={12} distance={9} position={[-1.5, 0.5, 2.6]} />
      <spotLight
        color="#ffffff"
        intensity={8}
        angle={0.5}
        penumbra={0.9}
        position={[2, 5, 3]}
        distance={12}
      />

      <Structure reduced={reduced} />
    </Canvas>
  );
}
