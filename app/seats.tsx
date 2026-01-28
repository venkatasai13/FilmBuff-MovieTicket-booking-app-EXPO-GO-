import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useState } from 'react';

const seats = Array.from({ length: 30 }, (_, i) => `A${i + 1}`);

export default function Seats() {
  const { theatre, screen } = useLocalSearchParams<{
    theatre?: string;
    screen?: string;
  }>();

  const [selected, setSelected] = useState<string[]>([]);

  const toggleSeat = (seat: string) => {
    setSelected((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : prev.length < 6
        ? [...prev, seat]
        : prev
    );
  };

  return (
    <View style={styles.container}>
      {/* Theatre Info */}
      <Text style={styles.theatre}>{theatre ?? 'PVR Cinemas'}</Text>
      <Text style={styles.screen}>{screen ?? 'Screen 1'}</Text>

      <Text style={styles.title}>Select Seats</Text>

      <FlatList
        data={seats}
        numColumns={5}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.seat,
              selected.includes(item) && styles.selectedSeat,
            ]}
            onPress={() => toggleSeat(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.total}>Total: ₹{selected.length * 200}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
  router.push({
    pathname: '../payment',
    params: {
      seats: selected.join(','),
      amount: String(selected.length * 200),
      theatre,
      screen,
    },
  })
}

      >
        <Text style={styles.btnText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0f172a' },
  theatre: { color: '#38bdf8', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  screen: { color: '#cbd5e1', textAlign: 'center', marginBottom: 10 },

  title: { fontSize: 18, color: '#fff', textAlign: 'center', marginVertical: 10 },

  seat: {
    borderWidth: 1,
    borderColor: '#94a3b8',
    margin: 5,
    padding: 10,
    width: 50,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#1e293b',
  },
  selectedSeat: {
    backgroundColor: '#4ade80',
  },

  total: { color: '#fff', textAlign: 'center', marginTop: 10 },

  button: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 6,
    marginTop: 15,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: 'bold' },
});
