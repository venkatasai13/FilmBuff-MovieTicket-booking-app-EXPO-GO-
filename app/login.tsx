import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 12, padding: 10, borderRadius: 6 },
  button: { backgroundColor: '#2563eb', padding: 12, borderRadius: 6 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
