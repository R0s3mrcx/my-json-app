import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const items = require('../../data/pets.json');

export default function HomeScreen() {
  const getEmoji = (title: string) => {
    if (title.toLowerCase().includes('dog')) return '🐶';
    if (title.toLowerCase().includes('cat')) return '🐱';
    if (title.toLowerCase().includes('parrot')) return '🦜';
    if (title.toLowerCase().includes('rabbit')) return '🐰';
    if (title.toLowerCase().includes('hamster')) return '🐹';
    return '🐾';
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>🐾 Pets Collection</Text>
      <Text style={styles.count}>Total pets: {items.length}</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.emoji}>{getEmoji(item.title)}</Text>

            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.extra}>Age: {item.age}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f9fc',
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 4,
  },
  count: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  emoji: {
    fontSize: 32,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  extra: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
});