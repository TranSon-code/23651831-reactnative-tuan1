import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Bai1_UserCard } from './src/components/Bai1_UserCard';
import { Bai2_Counter } from './src/components/Bai2_Counter';
import { Bai3_TodoList } from './src/components/Bai3_TodoList';
import { Bai4_CustomButtonDemo } from './src/components/Bai4_MyButton';
import { Bai5_LiveInput } from './src/components/Bai5_LiveInput';
import { Bai6_LoadingDemo } from './src/components/Bai6_LoadingContainer';

export default function App() {
  const [selectedLesson, setSelectedLesson] = useState<number>(1);

  const renderContent = () => {
    switch (selectedLesson) {
      case 1:
        return (
          <View>
            <Bai1_UserCard name="Nguyễn Văn A" age={20} isAdmin={false} />
            <Bai1_UserCard name="Trần Nam Sơn" age={21} isAdmin={true} />
          </View>
        );
      case 2:
        return <Bai2_Counter />;
      case 3:
        return <Bai3_TodoList />;
      case 4:
        return <Bai4_CustomButtonDemo />;
      case 5:
        return <Bai5_LiveInput />;
      case 6:
        return <Bai6_LoadingDemo />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bài tập React Native - Tuần 1</Text>
      </View>

      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabScroll}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <TouchableOpacity
              key={num}
              style={[styles.tabButton, selectedLesson === num && styles.tabButtonActive]}
              onPress={() => setSelectedLesson(num)}
            >
              <Text style={[styles.tabText, selectedLesson === num && styles.tabTextActive]}>
                Bài {num}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.body}>
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tabScroll: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  tabButtonActive: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    padding: 16,
  },
});