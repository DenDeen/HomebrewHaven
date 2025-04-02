import React from 'react';
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";


const StatItem: React.FC<StatItem> = ({ iconName, label, value, color = "text-text", iconColor = "#EAEAEA" }) => (
  <View className="flex-row items-center bg-primary/80 p-3 rounded-xl mb-3 border border-border">
    <Feather name={iconName} size={20} color={iconColor} className="mr-3" />
    <Text className={`text-base ${color} font-body flex-1`}>{label}:</Text>
    <Text className={`text-base ${color} font-body-bold`}>{value}</Text>
  </View>
);

export default StatItem;