import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const movies = [
  {
    id: '1',
    title: 'Avengers: Endgame',
    theatre: 'PVR Cinemas',
    poster: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg',
  },
  {
    id: '2',
    title: 'Inception',
    theatre: 'INOX',
    poster: 'https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg',
  },
  {
    id: '3',
    title: 'Interstellar',
    theatre: 'Cinepolis',
    poster: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg',
  },
];

export default function MoviesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Now Showing</Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
           onPress={() =>
  router.push({
    pathname: '../seats',
    params: { theatre: item.theatre, screen: 'Screen 1' },
  })
}

          >
            <Image source={{ uri: item.poster }} style={styles.poster} />

            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.theatre}>{item.theatre}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#0f172a' },
  header: { fontSize: 22, color: '#fff', marginBottom: 15, textAlign: 'center' },

  card: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#1e293b',
    borderRadius: 10,
    overflow: 'hidden',
  },
  poster: { width: 80, height: 120 },
  info: { padding: 10, justifyContent: 'center' },
  title: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  theatre: { color: '#94a3b8', marginTop: 4 },
});
