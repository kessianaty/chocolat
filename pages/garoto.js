import{Text, ScrollView, StyleSheet, View, Image, SafeAreaView} from 'react-native';
import * as React from 'react';

export default function Garoto(){
    return(
        <SafeAreaView style ={styles.container}>
            <Text style= {styles.texto} >O Chocolate Garoto é uma importante marca brasileira de chocolates que existe desde 1929.
             Com uma ampla variedade de produtos, a Garoto oferece opções como barras de chocolate, bombons e trufas.
              Entre os produtos mais populares estão o Baton, uma barra de chocolate ao leite com textura macia, o Talento,
               uma barra de chocolate com diversos sabores, e os bombons Serenata de Amor, com formato de coração e recheio cremoso de castanha-de-caju.
A Garoto é reconhecida pela qualidade e sabor de seus chocolates, conquistando a preferência dos consumidores ao longo dos anos.
 Além disso, a marca tem tradição na produção de ovos de Páscoa, que são aguardados ansiosamente durante a época festiva.</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        flex: 1,
        backgroundColor: '#D2691E',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 20,
    },
    texto:{
        flex: 1,
        margin: 5,
        padding: 10,
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 20,
        color: '#F5DEB3'
    }
});