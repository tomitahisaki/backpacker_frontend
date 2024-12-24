import * as React from 'react';
import { useQuery } from '@tanstack/react-query'
import { getHealthCheck } from '@/api/healthCheck'
import { View, Text, StyleSheet } from 'react-native';
import { BottomNavigation, Text as PaperText } from 'react-native-paper';

export const ChoiceArea = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['healthCheck'],
    queryFn: getHealthCheck,
  });

  // if (isLoading) {
  //   return <PaperText>Loading...</PaperText>;
  // }

  // if (error) {
  //   return <PaperText>Error: {error.message}</PaperText>;
  // }

  return (
    <View style={styles.container}>
      <PaperText style={styles.text}>Choice area</PaperText>
      <PaperText>{data?.healthCheck}</PaperText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
