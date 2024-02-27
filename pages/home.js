import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View,Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

export default function Home(props) {
  return (

    <SafeAreaView style={styles.container}>
       {<ImageBackground source={require('../assets/choco.png')} style={styles.back}>
        <ScrollView>
          <Text style={styles.titulo}>CHOCOLATE</Text>
        <Text style={styles.texto}>BIS</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.botao} onPress={()=>{props.navigation.navigate('Bis')}}>
      <Image
        style={styles.image}
        source={require('../assets/bibi.png')}
        />
        </TouchableOpacity>
      <Text style={styles.texto}>Talento</Text>
      <TouchableOpacity style={styles.botao} onPress={()=>{props.navigation.navigate('Talento')}}>
      <Image
        style={styles.image}
        source={require('../assets/tata.png')}
        />
        </TouchableOpacity>
        <Text style={styles.texto}>Garoto</Text>
        <TouchableOpacity style={styles.botao} onPress={()=>{props.navigation.navigate('Garoto')}}>
         <Image
        style={styles.image}
        source={require('../assets/gaga.png')}
        />
        </TouchableOpacity>
        </ScrollView>
        </ImageBackground>}
    </SafeAreaView>
    
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
