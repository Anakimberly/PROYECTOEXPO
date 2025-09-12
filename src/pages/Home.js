import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image style={{ width: 100, height: 100,borderRadius: 50 }} source={{ uri: 'https://i.pinimg.com/474x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg' }} />
      <Text style={styles.holamundo}>Hola Mundo</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ac95ecff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  holamundo: {
    fontSize:30,
    borderRadius:40,
    backgroundColor: '#fff', 
    padding: 15, 
  }
});