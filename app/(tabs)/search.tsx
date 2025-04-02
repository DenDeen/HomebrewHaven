import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Stack } from 'expo-router';
import { Feather } from "@expo/vector-icons";

import { GAME_ITEMS } from '@/assets/data/gameData'; // Adjust path if needed
import { images } from "@/constants/images";


const SearchResultItem = ({ item }) => (
  <Link href={`/item/${item.id}`} asChild>
    <TouchableOpacity className="flex-row items-center bg-primary/80 p-3 rounded-lg mb-2 border border-border active:bg-primary">
      <Feather name={item.icon || 'help-circle'} size={20} color={item.color || '#60A5FA'} className="mr-3" />
      <View className="flex-1">
         <Text className="text-text font-body-bold text-base">{item.name}</Text>
         <Text style={{ color: item.color || '#60A5FA' }} className="text-xs font-body">{item.type}</Text>
      </View>
      <Feather name="chevron-right" size={18} color="#A0A0A0" />
    </TouchableOpacity>
  </Link>
);


export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchQuery) {
      return GAME_ITEMS;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    return GAME_ITEMS.filter(item =>
      item.name.toLowerCase().includes(lowerCaseQuery) ||
      item.description.toLowerCase().includes(lowerCaseQuery) || 
      item.type.toLowerCase().includes(lowerCaseQuery) 
    );
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-background">
      <Stack.Screen options={{ title: "Search Database", headerTintColor: '#EAEAEA', headerStyle: { backgroundColor: '#1F2122' } }} />
      {/* Optional Background Image */}
      <Image
        source={images.bg}
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
        <View className="flex-1 px-5">
          {/* Search Input */}
          <View className="flex-row items-center bg-primary border border-border rounded-xl px-3 py-2 mb-4">
            <Feather name="search" size={20} color="#A0A0A0" className="mr-2" />
            <TextInput
              className="flex-1 text-text font-body text-base h-8" // Added h-8 for better height consistency
              placeholder="Search buffs, debuffs, items..."
              placeholderTextColor="#A0A0A0"
              value={searchQuery}
              onChangeText={setSearchQuery}
              clearButtonMode="while-editing" // iOS clear button
            />
          </View>

          {/* Results List */}
          <FlatList
            data={filteredItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <SearchResultItem item={item} />}
            ListEmptyComponent={() => (
              <View className="flex-1 items-center justify-center mt-10">
                  <Feather name="compass" size={40} color="#A0A0A0" />
                  <Text className="text-text/70 font-body text-center mt-2">
                      No matching entries found.{"\n"}Try a different search term.
                  </Text>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}