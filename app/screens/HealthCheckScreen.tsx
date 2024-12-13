import React, { useState, useEffect } from "react";
import { View, Text, Button, ActivityIndicator, StyleSheet } from "react-native";
import { healthCheck } from "../api/healthCheck";

export default function HealthCheckScreen() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const checkHealth = async () => {
    setLoading(true);
    try {
      const result = await healthCheck();
      setStatus(result); // APIのレスポンスに合わせる
    } catch (error) {
      setStatus("Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth(); // 初回ロード時にチェック
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Check</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text style={styles.status}>
          Status: {status || "No Data"}
        </Text>
      )}
      <Button title="Retry" onPress={checkHealth} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
  },
});

