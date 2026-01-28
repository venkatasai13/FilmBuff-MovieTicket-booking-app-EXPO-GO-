import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Profile() {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>Profile</Text>

      {/* Name Row */}
      <TouchableOpacity style={styles.row}>
        <Text style={styles.rowText}>👤 Sai Kunchepu</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      {/* Email Row */}
      <TouchableOpacity style={styles.row}>
        <Text style={styles.rowText}>📧 saikunchepu@gmail.com</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      {/* Logout */}
      <TouchableOpacity
        style={styles.logoutRow}
        onPress={() => router.replace('/login')}
      >
        <Text style={styles.logoutText}>🚪 Logout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#1e293b',
    borderRadius: 8,
    marginBottom: 10,
  },
  rowText: {
    color: '#e5e7eb',
    fontSize: 16,
  },
  arrow: {
    color: '#94a3b8',
    fontSize: 22,
  },
  divider: {
    height: 1,
    backgroundColor: '#334155',
    marginVertical: 20,
  },
  logoutRow: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#7f1d1d',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
