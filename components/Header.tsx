import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = () => {
  const handleMenuPress = () => {
    console.log('Menu pressed');
    // バーガーメニューのアクションをここに追加
  };

  return (
    <Appbar.Header style={styles.header}>
      {/* <Appbar.Action icon="compass" onPress={() => {}} /> */}
      <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
        <Image source={require('@/assets/images/rounded-header-icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <Appbar.Content title="Pathfinder" titleStyle={styles.title} />
      <Appbar.Action icon="menu" onPress={handleMenuPress} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#C8E6C9', // ヘッダーの背景色（好みに応じて変更可能）
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Lora_700Bold',
  }
});

export default Header;