import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { getHealthCheck } from '@/api/healthCheck';

export default function Index() {
  const [responseText, setResponseText] = useState('Loading...'); // 初期値を設定

  useEffect(() => {
    (async () => {
      try {
        const data = (await getHealthCheck()) as { message: string }; // API呼び出し
        setResponseText(data.message || 'Unknown Status'); // レスポンスをstateに保存
      } catch (error) {
        console.error('Error fetching health check:', error);
        setResponseText('Error'); // エラーメッセージ
      }
    })();
  }, []); // 初回レンダリング時に一度だけ実行

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 18 }}>Health Check Result:</Text>
      <Text style={{ fontSize: 24, marginTop: 10 }}>{responseText}</Text>
    </View>
  );
}
