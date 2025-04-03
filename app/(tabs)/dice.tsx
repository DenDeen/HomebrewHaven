// app/dice.js
import React, { useState, Suspense, useCallback } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Canvas } from '@react-three/fiber/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
// Only import OrbitControls if you want manual rotation when stopped
// import { OrbitControls } from '@react-three/drei/native';

import D20Model from '@/components/D20Model'; // Adjust path if needed
import { images } from "@/constants/images";

export default function Dice() {
  const insets = useSafeAreaInsets();
  const [result, setResult] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const [showTapPrompt, setShowTapPrompt] = useState(true); // State for initial prompt

  // Use useCallback to memoize the roll function
  const handleRoll = useCallback(() => {
    if (isRolling) return;

    setIsRolling(true);
    setResult(null); // Clear previous result
    setShowTapPrompt(false); // Hide prompt once first roll starts

    // Simulate roll duration
    const rollDuration = 1800; // Adjust duration (e.g., 1.8 seconds)
    setTimeout(() => {
      const rollResult = Math.floor(Math.random() * 20) + 1;
      setResult(rollResult);
      setIsRolling(false);
    }, rollDuration);
  }, [isRolling]); // Dependency array includes isRolling

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]} className="bg-background">
      {/* Background Image (Optional) */}
      <Image source={images.bg} className="absolute w-full h-full z-0 opacity-30" resizeMode="cover"/>

      {/* Use safe area for top padding */}
      <View style={[styles.contentContainer, { paddingTop: insets.top }]}>

        <Text className="text-secondary text-2xl font-display-bold text-center mb-5 mt-4">
          Roll the D20!
        </Text>

        {/* Canvas Container */}
        <View style={styles.canvasContainer}>
          <Canvas camera={{ position: [0, 1.5, 7], fov: 55 }}>{/* Adjusted camera slightly */}
            <ambientLight intensity={1.8} /> {/* Slightly more ambient light */}
            <directionalLight position={[6, 6, 4]} intensity={2.5} color="#FFFAE8" />{/* Slightly warmer directional light */}
            <directionalLight position={[-6, 3, -4]} intensity={1.0} color="#E0E8FF" />{/* Cooler fill light */}

            <Suspense fallback={<ActivityIndicator style={StyleSheet.absoluteFill} size="large" color={colors.text.DEFAULT || "#EAEAEA"} />}>
              <D20Model isRolling={isRolling} />
              {/* Add OrbitControls ONLY if desired - might interfere with tap */}
              {/* {!isRolling && <OrbitControls enableZoom={true} />} */}
            </Suspense>
          </Canvas>
          {/* Touchable Overlay */}
          <TouchableOpacity
              style={StyleSheet.absoluteFillObject}
              onPress={handleRoll}
              activeOpacity={isRolling ? 1 : 0.6} // Less feedback while rolling
              disabled={isRolling}
          />
        </View>

        {/* Result Display Area */}
        <View className="mt-6 h-24 items-center justify-center">
          {isRolling && (
            <View className="items-center">
              <ActivityIndicator size="large" color="#EAEAEA" />
              <Text className="text-text/70 font-body text-sm mt-2 italic">Rolling...</Text>
            </View>
          )}
          {!isRolling && result !== null && (
            // Added simple fade-in feel with opacity change (real animation library needed for true fade)
            <View className="flex-row items-center bg-primary/90 p-5 rounded-xl border border-border shadow-lg">
               <Feather name="target" size={28} color="#EAEAEA" className="mr-4" />
               <Text className="text-accent font-display-bold text-5xl">{result}</Text>
            </View>
          )}
           {!isRolling && showTapPrompt && ( // Only show prompt initially
             <Text className="text-text/70 font-body text-lg italic">Tap the dice to roll</Text>
           )}
        </View>
      </View>
    </View>
  );
}

// Re-usable styles
const colors = { // Define colors here or import from theme config resolution if needed outside Tabs
    text: { DEFAULT: '#EAEAEA' }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  canvasContainer: {
    width: '95%', // Slightly less than full width
    aspectRatio: 1, // Square
    borderRadius: 25, // More rounded
    overflow: 'hidden',
    backgroundColor: '#00000030', // Dark transparent background
    marginBottom: 15,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#FFFFFF20', // Subtle border
  },
});