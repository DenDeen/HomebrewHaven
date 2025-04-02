import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from "@/constants/images"; // Assuming path is correct
import AttributeItem from '@/components/AttributeItem'; // Assuming path is correct

import { GAME_ITEMS } from '@/assets/data/gameData'; // Adjust path if needed
import PressableListItem from '@/components/PressableListItem';

export const getItemByName = (name: string) => {
  const searchTerm = name.toLowerCase();
  const item = GAME_ITEMS.find(item => item.name.toLowerCase() === searchTerm);
  if (!item) {
    throw new Error(`Item with name "${name}" not found.`);
  }
  return item;
};

// Use the updated player mock data from above
const player = {
  username: "Mikkel",
  name: "Sir Drunkalot",
  class: "Barbarian",
  level: 3,
  description: "A fierce warrior known more for his capacity for ale than his tactical genius, yet surprisingly effective in a brawl.",
  profileImage: "https://i.imgur.com/Weyf2yQ.png",
  currentXP: 65,
  nextXP: 100,
  stats: { strength: 16, intelligence: 8, charisma: 9 },
  buffs: ["Blessing of Boldness", "Potion of Giant Strength (1 Hour)"],
  debuffs: ["Minor Curse of Clumsiness", "Intoxicated"],
  items: ["Magic Flask (3/3 charges)", "Scroll of Fireball", "+1 Greataxe", "50 ft. Hempen Rope"],
  challengesWon: 4,
  challengesLost: 1,
};


export default function ProfileScreen() { // Renamed component function for clarity
  return (
    <View className="flex-1 bg-background">
      {/* Background Image */}
      <Image
         source={images.bg} // Use your background image
         className="absolute w-full h-full z-0 opacity-30"
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
          {/* Profile Header */}
          <View className="items-center mb-6">
            <Image
              source={{ uri: player.profileImage }}
              className="w-28 h-28 rounded-full border-2 border-accent mb-3" // Use accent color for border
            />
            <Text className="text-accent font-display-bold text-3xl text-center">
              {player.name}
            </Text>
            <Text className="text-text font-body text-lg text-center">
              Level {player.level} {player.class}
            </Text>
          </View>

          {/* Character Info Card */}
          <View className="bg-primary/80 rounded-xl p-4 border border-border mb-4 shadow-md">
              <Text className="text-secondary font-display-bold text-xl mb-3 border-b border-border pb-1">Character Info</Text>
              {/* Description */}
              <Text className="text-text/90 font-body text-sm mt-3 italic">
                  "{player.description}"
              </Text>
          </View>

          {/* Attributes Card */}
          <View className="bg-primary/80 rounded-xl p-4 border border-border mb-4 shadow-md">
              <Text className="text-secondary font-display-bold text-xl mb-3 border-b border-border pb-1">Attributes</Text>
              <View className="space-y-1">
                  <AttributeItem label="Strength" value={player.stats.strength} />
                  <AttributeItem label="Intelligence" value={player.stats.intelligence} />
                  <AttributeItem label="Charisma" value={player.stats.charisma} />
              </View>
          </View>

          {/* Conditions Card */}
          <View className="bg-primary/80 rounded-xl p-4 border border-border mb-4 shadow-md">
              <Text className="text-secondary font-display-bold text-xl mb-3 border-b border-border pb-1">Conditions</Text>
              {/* Buffs */}
              <View className="mb-3">
                  <Text className="text-success font-body-bold text-lg mb-1">Buffs</Text>
                  {player.buffs.length > 0 ? (
                      player.buffs.map((buffName, index) => {
                          const buffItem = getItemByName(buffName); // Lookup by name
                          return <PressableListItem key={`buff-${index}`} item={buffItem} />;
                      })
                  ) : ( <Text className="text-text/70 font-body text-sm italic">None active.</Text> )}
              </View>
              {/* Debuffs */}
              <View>
                  <Text className="text-danger font-body-bold text-lg mb-1">Debuffs</Text>
                  {player.debuffs.length > 0 ? (
                      player.debuffs.map((debuffName, index) => {
                        const debuffItem = getItemByName(debuffName); // Lookup by name
                        return <PressableListItem key={`debuff-${index}`} item={debuffItem} />;
                      })
                  ) : ( <Text className="text-text/70 font-body text-sm italic">None active.</Text> )}
              </View>
          </View>

          {/* Inventory Card */}
          <View className="bg-primary/80 rounded-xl p-4 border border-border mb-4 shadow-md">
              <Text className="text-secondary font-display-bold text-xl mb-3 border-b border-border pb-1">Inventory</Text>
              {player.items.length > 0 ? (
                  player.items.map((itemName, index) => {
                    itemName = itemName.split('(')[0].trim(); // Remove charges
                    const artifactItem = getItemByName(itemName); // Lookup by name
                    return <PressableListItem key={`artifact-${index}`} item={artifactItem} />;
                  })
              ) : ( <Text className="text-text/70 font-body text-sm italic">Inventory is empty.</Text> )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}