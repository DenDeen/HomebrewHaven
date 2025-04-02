import React from 'react';
import { Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import StatItem from '@/components/StatItem';


const player = {
  username: "Mikkel",
  name: "Sir Drunkalot",
  class: "Barbarian",
  level: 3,
  currentXP: 65,
  nextXP: 100,
  buffs: 3,
  debuffs: 2,
  items: 5,
  challengesWon: 4,
  challengesLost: 1,
};


export default function Index() {
  return (
    <View className="flex-1 bg-background">
      <Image
        source={images.bg}
        className="absolute w-full z-0 opacity-20"
        resizeMode="cover"
      />
      <Image
        source={images.dicebg}
        tintColor="#1F2122"
        className="absolute z-0 w-72 h-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        resizeMode="contain"
      />
      <SafeAreaView className="flex-1">
        <ScrollView
          className="flex-1 px-5"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ minHeight: "100%" }}
        >
          {/* Header Section */}
          <View className="mb-8 items-center">
            <Image
              source={icons.d20}
              className="w-16 h-14 mb-3"
              resizeMode="contain"
            />
            <Text className="text-text font-display text-3xl text-center mb-1">
              Welcome, {player.username}!
            </Text>
            <Text className="text-accent font-body text-lg text-center">
              {player.name} - Level {player.level} {player.class}
            </Text>
          </View>

          {/* Player Stats Section */}
          <View className="mb-4">
              <Text className="text-secondary text-xl font-display-bold text-center mb-4 border-b border-border pb-2">
                Current Status
              </Text>

              {/* XP Progress */}
              {/* <XPBar currentXP={player.xp} nextXP={player.nextXP} /> */}

              {/* Stats List */}
              <View className="mt-5 space-y-1">
                  {/* Using StatItem with semantic colors */}
                  <StatItem
                      iconName="shield"
                      label="Active Buffs"
                      value={player.buffs}
                      color="text-success" // Use semantic color class
                      iconColor="#22C55E" // Match icon color (can be derived from theme too)
                  />
                  <StatItem
                      iconName="alert-triangle"
                      label="Active Debuffs"
                      value={player.debuffs}
                      color="text-danger" // Use semantic color class
                      iconColor="#EF4444"
                  />
                  <StatItem
                      iconName="package"
                      label="Inventory Items"
                      value={player.items}
                      color="text-info" // Use semantic color class
                      iconColor="#3B82F6"
                  />
                  <StatItem
                      iconName="award"
                      label="Challenges Won"
                      value={player.challengesWon}
                      color="text-warning" // Use semantic color class
                      iconColor="#F59E0B"
                  />
                  <StatItem
                      iconName="slash"
                      label="Challenges Lost"
                      value={player.challengesLost}
                      color="text-neutral" // Use semantic color class
                      iconColor="#6B7280"
                  />
              </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};