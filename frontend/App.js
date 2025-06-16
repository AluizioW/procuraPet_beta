import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('http://localhost:3210');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      {data.map(post => (
        <View key={post.id} style={styles.postContainer}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.description}>{post.description}</Text>
          <Image 
            source={{ uri: post.image }} 
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  postContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});