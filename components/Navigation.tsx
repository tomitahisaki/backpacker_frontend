import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomNavigation, Text as PaperText } from 'react-native-paper';
import { ChoiceArea } from './ChoiceArea';

const HomeRoute = () => (
  <View style={styles.container}>
    <PaperText style={styles.text}>Home Screen</PaperText>
  </View>
);

const AreaRoute = () => (
  <ChoiceArea />
);

const Navigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'ホーム', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'choiceArea', title: '地域選択', focusedIcon: 'file-search', unfocusedIcon: 'file-search-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    choiceArea: AreaRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
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

export default Navigation;
