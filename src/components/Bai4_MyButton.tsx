import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface MyButtonProps {
  label: string;
  onPress: () => void;
  color?: string;
}

export const MyButton = ({ label, onPress, color = '#007AFF' }: MyButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export const Bai4_CustomButtonDemo = () => {
  const [message, setMessage] = useState<string>('');

  return (
    <View style={styles.container}>
      <MyButton
        label="Nút mặc định (Màu xanh)"
        onPress={() => setMessage('Bạn đã bấm nút mặc định')}
      />
      <MyButton
        label="Nút màu đỏ"
        color="#dc3545"
        onPress={() => setMessage('Bạn đã bấm nút màu đỏ')}
      />
      <MyButton
        label="Nút màu xanh lá"
        color="#28a745"
        onPress={() => setMessage('Bạn đã bấm nút màu xanh lá')}
      />
      {message !== '' && <Text style={styles.result}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
    color: '#333',
  },
});