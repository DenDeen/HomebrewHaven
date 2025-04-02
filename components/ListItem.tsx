import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';


const ListItem: React.FC<ListItem> = ({ text, iconName, iconColor }) => (
    <View className="flex-row items-center mb-1">
        <Feather name={iconName} size={16} color={iconColor} className="mr-2" />
        <Text className="text-text font-body text-sm">{text}</Text>
    </View>
);

export default ListItem;