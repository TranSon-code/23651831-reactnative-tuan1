import React, { useState, ReactNode } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';

interface LoadingContainerProps {
  isLoading: boolean;
  children: ReactNode;
}

export const LoadingContainer = ({ isLoading, children }: LoadingContainerProps) => {
  if (isLoading) {
    return (
      <View style={styles.loadingBox}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  return <View>{children}</View>;
};

export const Bai6_LoadingDemo = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.toggleBtn}
        onPress={() => setLoading(!loading)}
      >
        <Text style={styles.toggleBtnText}>
          {loading ? 'Dừng tải (Xem nội dung)' : 'Bật tải (Hiện vòng quay)'}
        </Text>
      </TouchableOpacity>

      <LoadingContainer isLoading={loading}>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Nội dung đã tải xong!</Text>
          <Text style={styles.contentText}>Dữ liệu hiển thị thành công bên trong children.</Text>
        </View>
      </LoadingContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  toggleBtn: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
  },
  toggleBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loadingBox: {
    padding: 24,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 8,
    color: '#666',
  },
  content: {
    padding: 16,
    backgroundColor: '#e8f5e9',
    borderRadius: 6,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 4,
  },
  contentText: {
    color: '#333',
  },
});