import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Bookings() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await AsyncStorage.getItem('bookings');
      if (res) setData(JSON.parse(res));
    };
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>

      <FlatList
        data={data}
        keyExtractor={(_, i) => String(i)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>{item.theatre} • {item.screen}</Text>
            <Text style={styles.text}>Seats: {item.seats}</Text>
            <Text style={styles.text}>₹{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 15 },
  title: { color: '#fff', fontSize: 20, marginBottom: 10, textAlign: 'center' },
  card: { backgroundColor: '#1e293b', padding: 10, marginBottom: 10, borderRadius: 6 },
  text: { color: '#e5e7eb' },
});
