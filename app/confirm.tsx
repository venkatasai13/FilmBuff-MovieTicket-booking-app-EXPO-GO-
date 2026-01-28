import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function Confirm() {
  const { seats, amount, theatre, screen } = useLocalSearchParams<any>();

  const ticketData = JSON.stringify({ seats, amount, theatre, screen });

  // ✅ Save booking to history
  useEffect(() => {
    const saveBooking = async () => {
      const old = await AsyncStorage.getItem('bookings');
      const bookings = old ? JSON.parse(old) : [];

      bookings.push({
        seats,
        amount,
        theatre,
        screen,
        time: new Date().toLocaleString(),
      });

      await AsyncStorage.setItem('bookings', JSON.stringify(bookings));
    };

    saveBooking();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎟 Booking Confirmed</Text>

      <Text style={styles.text}>{theatre} • {screen}</Text>
      <Text style={styles.text}>Seats: {seats}</Text>
      <Text style={styles.text}>Amount: ₹{amount}</Text>

      <View style={styles.qrBox}>
        <QRCode value={ticketData} size={160} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#22c55e',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    color: '#e5e7eb',
    marginBottom: 6,
    fontSize: 16,
  },
  qrBox: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
});
