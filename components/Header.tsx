import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = () => {
  const handleMenuPress = () => {
    console.log('Menu pressed');
    // バーガーメニューのアクションをここに追加
  };

  return (
    <Appbar.Header style={styles.header}>
      {/* アプリのアイコン */}
      {/* <Appbar.Action icon="compass" onPress={() => {}} /> */}
      <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
        <Image source={require('@/assets/images/rounded-header-icon.png')} style={styles.icon} />
      </TouchableOpacity>
      {/* アプリ名 */}
      <Appbar.Content title="Pathfinder" style={styles.title} />
      {/* バーガーメニュー */}
      <Appbar.Action icon="menu" onPress={handleMenuPress} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#C8E6C9', // ヘッダーの背景色（好みに応じて変更可能）
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    flex: 1,
    textAlign: 'left',
  }
});

export default Header;
