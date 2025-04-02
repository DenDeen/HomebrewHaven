import React from 'react';
import { Link } from 'expo-router'; // Added Link and Stack
import { Text, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";


const PressableListItem = ({ item }: { item: Item }) => {
  if (!item) return null;

  return (
    <Link href={`/item/${item.id}`} asChild>
      <TouchableOpacity className="flex-row items-center mb-1 py-1 active:opacity-70">
          <Feather name={item.icon || 'help-circle'} size={16} color={item.color || '#3B82F6'} className="mr-2" />
          <Text className="text-text font-body text-sm flex-1">{item.name}</Text>
          <Feather name="chevron-right" size={16} color="#A0A0A0" />
      </TouchableOpacity>
    </Link>
  );
};

export default PressableListItem;