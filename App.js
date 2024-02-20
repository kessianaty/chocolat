import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ImageBackground, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <ImageBackground source={require('./assets/choco.png')} style={styles.back}>
        <ScrollView>
          <Text style={styles.titulo}>CHOCOLATE</Text>
        <Text style={styles.texto}>BIS</Text>
      <StatusBar style="auto" />
      <Image
        style={styles.image}
        source={require('./assets/bibi.png')}
        />
      <Text style={styles.texto}>Talento</Text>
      <Image
        style={styles.image}
        source={require('./assets/tata.png')}
        />
        <Text style={styles.texto}>Garoto</Text>
         <Image
        style={styles.image}
        source={require('./assets/gaga.png')}
        />
        </ScrollView>
        </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
  },
  image:{
    marginLeft: 40,
    margin: 0,
    display: 'flex',
    width: 300,
    height: 150,
  },
  titulo:{
    margin: 10,
    textAlign: 'center',
    color: '#DEB887',
    fontSize: 40,
  },
  texto:{
    padding: 10,
    margin: 10,
    textAlign: 'center',
    color: '#DCDCDC',
    fontSize: 30,
  },
  back: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    zIndex: -1,
    position: 'absolute',
  },
});
