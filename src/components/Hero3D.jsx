// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Sphere, MeshDistortMaterial, Float, Stars, Environment } from '@react-three/drei';

// const AnimatedSphere = () => {
//   const sphereRef = useRef();

//   useFrame((state) => {
//     if (sphereRef.current) {
//       sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
//       sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={1} floatIntensity={1}>
//       <Sphere args={[1, 100, 100]} scale={2.4} ref={sphereRef}>
//         <MeshDistortMaterial
//           color="#1e293b"      // Changed from black to Slate-800 to catch light
//           emissive="#00f0ff"   // Cyan glow
//           emissiveIntensity={0.5} // INCREASED: Makes it glow in the dark
//           attach="material"
//           distort={0.5}        // INCREASED: More visible movement
//           speed={2}            // INCREASED: Faster animation
//           roughness={0.2}      // Increased slightly to catch more diffuse light
//           metalness={0.8}      // Lowered slightly so it's not a perfect mirror
//           bumpScale={0.01}
//         />
//       </Sphere>
//     </Float>
//   );
// };

// const Hero3D = () => {
//   return (
//     <div className="absolute inset-0 z-0"> {/* Removed -z-10, changed to z-0 */}
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         {/* Lights */}
//         <ambientLight intensity={1} />
//         <pointLight position={[10, 10, 10]} intensity={2} color="#00f0ff" />
//         <pointLight position={[-10, -10, -10]} intensity={2} color="#ff00ff" />
        
//         {/* Environment is CRITICAL for metal materials to look 3D */}
//         <Environment preset="city" /> 

//         <Stars 
//           radius={100} 
//           depth={50} 
//           count={3000} 
//           factor={4} 
//           saturation={0} 
//           fade 
//           speed={1.5} 
//         />
        
//         <AnimatedSphere />
//       </Canvas>
//     </div>
//   );
// };

// export { Hero3D };

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Torus, Float, Stars, Environment, Sparkles } from '@react-three/drei';

const HolographicCore = () => {
  const coreRef = useRef();
  const wireframeRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Rotate the central core (The "Vault")
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.1;
      coreRef.current.rotation.z = t * 0.05;
    }
    
    // Rotate wireframe slightly faster for a "layered" effect
    if (wireframeRef.current) {
       wireframeRef.current.rotation.y = t * 0.1;
       wireframeRef.current.rotation.z = t * 0.05;
    }

    // Gyroscope Ring 1 (Cyan)
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.4;
      ring1Ref.current.rotation.y = t * 0.2;
    }

    // Gyroscope Ring 2 (Purple) - rotates opposite
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * 0.3;
      ring2Ref.current.rotation.y = -t * 0.2;
    }
  });

  return (
    <group scale={1.8}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        
        {/* 1. The Solid Inner Core (Stability/Security) */}
        <Icosahedron args={[1, 0]} ref={coreRef}>
          <meshStandardMaterial 
            color="#050A14" 
            roughness={0.1} 
            metalness={1} 
            emissive="#00f0ff"
            emissiveIntensity={0.1}
            flatShading={true} // Critical for the "Crypto/Gem" look
          />
        </Icosahedron>

        {/* 2. The Wireframe Overlay (Tech/Data Layer) */}
        <Icosahedron args={[1.02, 0]} ref={wireframeRef}>
          <meshBasicMaterial 
            color="#00f0ff" 
            wireframe={true} 
            transparent 
            opacity={0.3} 
          />
        </Icosahedron>

      </Float>

      {/* 3. Orbital Ring 1 (Global Reach) */}
      <group ref={ring1Ref}>
        <Torus args={[1.6, 0.02, 16, 100]}>
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.6} />
        </Torus>
      </group>

      {/* 4. Orbital Ring 2 (Transaction Flow) */}
      <group ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <Torus args={[2, 0.01, 16, 100]}>
          <meshBasicMaterial color="#7000ff" transparent opacity={0.4} />
        </Torus>
      </group>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#7000ff" />
        
        {/* Environment reflects city lights on the black metal core */}
        <Environment preset="city" /> 

        {/* Deep space background */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Floating Data Particles */}
        <Sparkles count={50} scale={6} size={2} speed={0.4} opacity={0.5} color="#00f0ff" />

        <HolographicCore />
      </Canvas>
    </div>
  );
};

export { Hero3D };