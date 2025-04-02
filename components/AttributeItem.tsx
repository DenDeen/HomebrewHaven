import React from 'react';
import { View, Text } from 'react-native';


const AttributeItem: React.FC<AttributeItem> = ({ label, value }) => (
    <View className="flex-row justify-between items-center py-1 px-2 rounded bg-background mb-1">
        <Text className="text-text text-sm font-body flex-1">  {label}:</Text>
        <Text className="text-accent font-body-bold text-lg">{value}  </Text>
    </View>
);

export default AttributeItem;