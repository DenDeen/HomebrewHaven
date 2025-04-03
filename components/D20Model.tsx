import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei/native'; // Use /native import!
import * as THREE from 'three';

// Preload the model for faster loading on mount
useGLTF.preload(require('@/d20_engraved.glb')); // <--- Adjust path to YOUR model!

const D20Model = ({ isRolling }) => {
  // Load the GLTF model using drei's hook
  const { scene } = useGLTF(require('../assets/data/d20_engraved.glb')); // <--- Adjust path!
  const modelRef = useRef(); // Reference to the main group/object

  // Refs to store animation state without causing re-renders
  const rotationAxis = useRef(new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize());
  const currentRotationSpeed = useRef(0); // Start speed at 0
  const targetRotationSpeed = 0.25; // Max speed during roll - Adjust as needed
  const dampingFactor = 0.08; // How quickly it slows down (0-1, lower is slower) - Adjust as needed

  // Update rotation axis when rolling starts
  useEffect(() => {
    if (isRolling) {
      // Set a new random axis for this roll
      rotationAxis.current.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      // Immediately set speed towards target (or instantly to target if preferred)
      // currentRotationSpeed.current = targetRotationSpeed; // Instant start
    }
  }, [isRolling]);

  useFrame((state, delta) => {
    if (!modelRef.current) return; // Model not loaded yet

    // Determine target speed based on rolling state
    const targetSpeed = isRolling ? targetRotationSpeed : 0;

    // Smoothly interpolate the current speed towards the target speed
    currentRotationSpeed.current = THREE.MathUtils.lerp(
      currentRotationSpeed.current,
      targetSpeed,
      dampingFactor // Adjust damping for desired start/stop smoothness
    );

    // Only apply rotation if speed is significant (prevents tiny rotations when stopped)
    if (Math.abs(currentRotationSpeed.current) > 0.001) {
      // Calculate rotation amount for this frame
      const rotationAmount = currentRotationSpeed.current * delta * 10; // Multiply by 10 or adjust for visible speed
      modelRef.current.rotateOnAxis(rotationAxis.current, rotationAmount);
    } else {
      // Ensure speed is exactly 0 when close enough to prevent drifting
      currentRotationSpeed.current = 0;
    }
  });

  // Note: The 'primitive' component directly renders the loaded scene graph.
  // If your GLB has multiple meshes, you might need to traverse inside `useEffect`
  // to apply materials or transformations if they weren't set correctly in Blender.
  return (
    <primitive
      ref={modelRef}
      object={scene} // Directly use the loaded scene
      scale={3.0} // Adjust scale to fit your scene view appropriately
    />
  );
};

export default D20Model;