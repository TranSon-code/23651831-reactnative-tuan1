import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Todo {
  id: string;
  title: string;
}

export const Bai3_TodoList = () => {
  const [todos] = useState<Todo[]>([
    { id: '1', title: 'Học React Native cơ bản' },
    { id: '2', title: 'Làm bài tập TypeScript' },
    { id: '3', title: 'Nộp bài tập lên GitHub' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Danh sách công việc:</Text>
      {todos.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.text}>• {item.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 15,
  },
});