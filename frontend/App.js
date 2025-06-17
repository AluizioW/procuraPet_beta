import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
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
    

    <ScrollView>
    <View style={styles.header}>
      <View style={{ flexDirection: 'column', alignItems: 'flex-start', backgroundColor: 'red', flex: 1, padding: 10 }}>
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>ProcuraPet</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>Encontre seu pet perdido</Text>
      </View>

      <View style={{ display: 'flex',backgroundColor: 'blue', flexDirection: 'column', alignItems: 'flex-end', justifyContent:'center', flex: .5, padding: 10}}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold'}}>Bem-vindo!</Text>
        <Text style={{display:'content' ,color: 'white', fontSize: 16}}>Usuário</Text>
      </View>
    </View>

      <View style={styles.box}>
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
    </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({

  header: {
    backgroundColor: 'green',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
  },

  box: {
    flex: 1,
    backgroundColor: '#1b2c5c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  //   borderRadius: 10,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  //   margin: 10,
  //   borderWidth: 1,
  //   borderColor: '#ddd',
  //   width: '90%',
  //   overflow: 'hidden',
  //   backgroundColor: '#fff',
  //   borderRadius: 10,
  //   padding: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginVertical: 20,
  //   marginHorizontal: 10,
  //   flexDirection: 'column',
  //   gap: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '90%',
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    flexDirection: 'column',
    gap: 10,

  },
  postContainer: {
    marginBottom: 20,
    alignItems: 'center',

        borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '90%',
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    flexDirection: 'column',
    gap: 10,
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