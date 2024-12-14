import client from '@/api/client';

export const getHealthCheck = async () => {
  try {
    const response = await client.get('/health_checks'); // エンドポイント
    return response.data; // 必要なデータを返す
  } catch (error) {
    console.error('Health Check API Error:', error);
    throw error;
  }
};
