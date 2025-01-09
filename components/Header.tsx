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
      <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
        <Image source={require('@/assets/images/tabi-portal-header.webp')} style={styles.icon} />
      </TouchableOpacity>
      <Appbar.Content title="TabiPortal" titleStyle={styles.title} />
      <Appbar.Action icon="menu" onPress={handleMenuPress} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#B7CEB5', // ヘッダーの背景色（好みに応じて変更可能）
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 5, // アイコンの形状を丸くする
  },
  title: {
    fontSize: 20,
    fontFamily: 'Lora_700Bold',
  }
});

export default Header;