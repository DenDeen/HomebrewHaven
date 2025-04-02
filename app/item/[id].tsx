import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { Feather } from "@expo/vector-icons";

import { getItemById } from '@/assets/data/gameData';


export default function ItemDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const item = getItemById(id);

  if (!item) {
    return (
      <View className="flex-1 justify-center items-center bg-background p-4">
         <Stack.Screen options={{ title: "Not Found" }} />
         <Text className="text-danger text-lg font-body-bold mb-4">Item Not Found!</Text>
         <Text className="text-text text-center font-body mb-4">Could not find details for ID: {id}</Text>
         <Text onPress={() => router.back()} className="text-secondary font-body-bold p-2 border border-secondary rounded">
            Go Back
         </Text>
      </View>
    );
  }

  // Determine color based on type for the header/icon, default to info
  const typeColor = item.color || '#3B82F6';

  return (
    <View className="flex-1 bg-background">
       {/* Set the header title dynamically */}
      <Stack.Screen options={{ title: `${item.type} Details` }} />
      <ScrollView
        className="flex-1 px-5 pt-6" // Add padding top
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* Detail Card */}
        <View className="bg-primary/90 rounded-xl p-5 border border-border shadow-lg">

          {/* Header with Icon and Name */}
          <View className="flex-row items-center mb-4 border-b border-border pb-3">
            <Feather name={item.icon || 'help-circle'} size={32} color={typeColor} className="mr-4" />
            <View>
              <Text className="text-accent font-display-bold text-2xl">{item.name}</Text>
              <Text style={{ color: typeColor }} className="font-body-bold text-base">{item.type}</Text>
            </View>
          </View>

          {/* Description */}
          <View className="mb-4">
            <Text className="text-beige font-body-bold text-lg mb-1">Description</Text>
            <Text className="text-text/90 font-body text-base italic">"{item.description}"</Text>
          </View>

          {/* Functionality */}
          <View className="mb-4">
            <Text className="text-beige font-body-bold text-lg mb-1">Functionality</Text>
            <Text className="text-text/90 font-body text-base">{item.functionality}</Text>
          </View>

          {/* Usage */}
          {item.usage && (
            <View>
              <Text className="text-beige font-body-bold text-lg mb-1">Usage / Duration</Text>
              <Text className="text-text/90 font-body text-base">{item.usage}</Text>
            </View>
          )}

        </View>
      </ScrollView>
    </View>
  );
}