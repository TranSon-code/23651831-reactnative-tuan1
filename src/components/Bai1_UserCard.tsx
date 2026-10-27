import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UserCardProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

export const Bai1_UserCard = ({ name, age, isAdmin }: UserCardProps) => {
  return (
    <View style={[styles.card, isAdmin ? styles.adminCard : styles.userCard]}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>Tuổi: {age}</Text>
      <Text style={styles.role}>Vai trò: {isAdmin ? 'Quản trị viên (Admin)' : 'Thành viên thường'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
  },
  userCard: {
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
  },
  adminCard: {
    backgroundColor: '#fff3cd',
    borderColor: '#ffeeba',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
  role: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: '500',
  },
});