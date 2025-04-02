import React from 'react';
import { View, Text } from 'react-native';


const XPBar = ({ currentXP, nextXP }) => {
  const percentage = Math.min((currentXP / nextXP) * 100, 100);
  return (
    <View className="bg-primary rounded-full h-5 border border-border my-2 shadow-sm">
      <View
        className="bg-secondary rounded-full"
        style={{ width: `${percentage}%` }}
      />
      <Text className="absolute text-center text-xs text-text font-body-bold top-[2px]">
        XP: {currentXP} / {nextXP}
      </Text>
    </View>
  );
};

export default XPBar;