import React from 'react';
import { Link } from 'expo-router'; // Added Link and Stack
import { Text, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";


const PressableListArtifact = ({ item }: { item: Item }) => {
  if (!item) return null;

  return (
    <Link href={`/item/${item.id}`} asChild key={`item-${index}`}>
      <TouchableOpacity className="flex-row items-center mb-1 py-1 active:opacity-70">
          <Feather name={item.icon || 'package'} size={16} color={item.color || '#3B82F6'} className="mr-2" />
          <Text className="text-text font-body text-sm flex-1">{displayItem.name}</Text>{/* Display player's version */}
          <Feather name="chevron-right" size={16} color="#A0A0A0" />
      </TouchableOpacity>
    </Link>
  );
};

export default PressableListArtifact;