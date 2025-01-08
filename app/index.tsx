import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DevToolsBubble } from "react-native-react-query-devtools";
import Header from '@/components/Header';
import { View, StyleSheet, FlatList } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Searchbar, Card, BottomNavigation, Text } from 'react-native-paper';

const HomeScreen = () => {
  const queryClient = new QueryClient();
  const [searchQuery, setSearchQuery] = React.useState('');

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'explore', title: 'Explore', icon: 'map' },
    { key: 'profile', title: 'Profile', icon: 'account' },
  ]);

  // Define your copy function based on your platform
  const onCopy = async (text: string) => {
    try {
      await Clipboard.setStringAsync(text);
      return true;
    } catch {
      return false;
    }
  };

  const features = [
    { id: '1', title: 'Search Destination', description: 'Find your next adventure' },
    { id: '2', title: 'Safety Info', description: 'Stay informed on safety levels' },
    { id: '3', title: 'Connect with Travelers', description: 'Meet like-minded explorers' },
  ];

  const renderFeature = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text>{item.description}</Text>
      </Card.Content>
    </Card>
  );

  const renderScene = () => (
    <View style={styles.body}>
      <Searchbar
        placeholder="Search by country or region"
        value={searchQuery}
        onChangeText={(query) => setSearchQuery(query)}
        style={styles.searchbar}
      />
      <FlatList
        data={features}
        keyExtractor={(item) => item.id}
        renderItem={renderFeature}
        style={styles.list}
      />
    </View>
  );

  return (
    <QueryClientProvider client={queryClient} >
      <Header />
      <View style={styles.container}>
        {/* Body */}
        {renderScene()}

        {/* Footer */}
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </View>
      <DevToolsBubble onCopy={onCopy} />
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  searchbar: {
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
  card: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});  

export default HomeScreen;
