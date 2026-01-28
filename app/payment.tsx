import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useState } from 'react';

export default function Payment() {
  const { seats, amount, theatre, screen } = useLocalSearchParams<any>();
  const [method, setMethod] = useState<string | null>(null);

  const payNow = () => {
    if (!method) return alert('Select payment method');
    router.replace({
      pathname: '../confirm',
      params: { seats, amount, theatre, screen },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Paytm Payment</Text>

      <Text style={styles.info}>🎬 {theatre} • {screen}</Text>
      <Text style={styles.info}>Seats: {seats}</Text>

      {/* UPI */}
      <TouchableOpacity
        style={[styles.option, method === 'upi' && styles.selected]}
        onPress={() => setMethod('upi')}
      >
        <Text style={styles.optionText}>📱 UPI (Paytm / GPay / PhonePe)</Text>
      </TouchableOpacity>

      {/* Card */}
      <TouchableOpacity
        style={[styles.option, method === 'card' && styles.selected]}
        onPress={() => setMethod('card')}
      >
        <Text style={styles.optionText}>💳 Credit / Debit Card</Text>
      </TouchableOpacity>

      {/* Wallet */}
      <TouchableOpacity
        style={[styles.option, method === 'wallet' && styles.selected]}
        onPress={() => setMethod('wallet')}
      >
        <Text style={styles.optionText}>👛 Wallet</Text>
      </TouchableOpacity>

      {/* Card Form */}
      {method === 'card' && (
        <View style={styles.cardForm}>
          <TextInput placeholder="Card Number" keyboardType="number-pad" style={styles.input} />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TextInput placeholder="MM/YY" style={[styles.input, { flex: 1 }]} />
            <TextInput placeholder="CVV" secureTextEntry style={[styles.input, { flex: 1 }]} />
          </View>
          <TextInput placeholder="Card Holder Name" style={styles.input} />
        </View>
      )}

      <Text style={styles.total}>Total: ₹{amount}</Text>

      <TouchableOpacity style={styles.payBtn} onPress={payNow}>
        <Text style={styles.payText}>Pay Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  info: {
    color: '#cbd5e1',
    textAlign: 'center',
    marginBottom: 6,
  },
  option: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#1e293b',
    marginBottom: 12,
  },
  selected: {
    borderWidth: 2,
    borderColor: '#22c55e',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  cardForm: {
    marginVertical: 10,
    backgroundColor: '#020617',
    padding: 12,
    borderRadius: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  total: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 15,
  },
  payBtn: {
    backgroundColor: '#22c55e',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  payText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
