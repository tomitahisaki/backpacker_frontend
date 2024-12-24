import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { DevToolsBubble } from "react-native-react-query-devtools";
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Modal, Portal, Text, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from '@/components/Navigation';

const App = () => {
  const queryClient = new QueryClient();

  // Define your copy function based on your platform
  const onCopy = async (text: string) => {
    try {
      // For Expo:
      await Clipboard.setStringAsync(text);
      // OR for React Native CLI:
      // await Clipboard.setString(text);
      return true;
    } catch {
      return false;
    }
  };
  
  const [selectedRegion, setSelectedRegion] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const regions = [
    { label: 'Asia', value: 'asia' },
    { label: 'Europe', value: 'europe' },
    { label: 'Africa', value: 'africa' },
    { label: 'North America', value: 'north_america' },
    { label: 'South America', value: 'south_america' },
    { label: 'Oceania', value: 'oceania' },
    { label: 'Antarctica', value: 'antarctica' },
  ];

  // 地域を保存
  const saveRegion = async (region) => {
    try {
      await AsyncStorage.setItem('selectedRegion', region);
      setSelectedRegion(region);
    } catch (error) {
      console.error('Error saving region:', error);
    }
  };

  // 保存された地域を取得
  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const storedRegion = await AsyncStorage.getItem('selectedRegion');
        setSelectedRegion(storedRegion || ''); // デフォルト値を設定
      } catch (error) {
        console.error('Error retrieving region:', error);
      }
    };
    fetchRegion();
  }, []);

  // モーダル内で地域を選択
  const handleRegionSelect = (region) => {
    saveRegion(region);
    setModalVisible(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <DevToolsBubble onCopy={onCopy} />
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentRegionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  regionButton: {
    marginVertical: 5,
  },
});

export default App;

