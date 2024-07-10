import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface SearchProps {
  onChange: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleTextChange = (text: string) => {
    setInputValue(text);
    onChange(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleTextChange}
        placeholder="Search..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});

export default Search;