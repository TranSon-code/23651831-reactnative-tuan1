import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export const Bai5_LiveInput = () => {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập nội dung vào đây..."
        value={text}
        onChangeText={(val: string) => setText(val)}
      />
      <Text style={styles.counter}>Số lượng ký tự: {text.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
  },
  counter: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
});