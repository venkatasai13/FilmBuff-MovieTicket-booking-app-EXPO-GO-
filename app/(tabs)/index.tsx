import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Movie Booking App</Text>
      <Text style={styles.subtitle}>React Native Project</Text>
      <Text style={styles.desc}>Welcome! Your app is ready to build 🚀</Text>

      {/* Book Tickets Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('../movies')}

      >
        <Text style={styles.buttonText}>Book Tickets</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#38bdf8',
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    color: '#cbd5e1',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
