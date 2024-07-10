import { Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text } from 'react-native';


export default function Layout() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true, title: 'Todo',
        headerSearchBarOptions: { hideWhenScrolling: true, 
          onChangeText: (e) => setSearchQuery(e.nativeEvent.text)}
      }} />
    </Stack>
  );
}