import{Text, ScrollView, StyleSheet, View, Image, SafeAreaView} from 'react-native';
import * as React from 'react';

export default function Talento(){
    return(
        <SafeAreaView style ={styles.container}>
            <Text style= {styles.texto} >O Chocolate Talento foi criado pela marca brasileira Garoto e lançado no mercado em 1971.
             Ele é conhecido por sua textura suave e sabor delicioso.
              Disponível em diversos sabores, como chocolate ao leite, chocolate branco, chocolate com amêndoas,
               chocolate com avelãs e chocolate com frutas vermelhas, o Talento proporciona uma experiência indulgente aos consumidores.
                Além das barras de chocolate, a linha Talento inclui bombons e ovos de Páscoa, mantendo a mesma qualidade e sabor característicos.
                 Desde seu lançamento, o Talento tem sido apreciado por sua consistência e é uma escolha popular entre os amantes de chocolate.</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        flex: 1,
        backgroundColor: '#2F4F4F',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 20,
    },
    texto:{
        flex: 1,
        margin: 10,
        padding: 20,
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 20,
        color: '#F5DEB3'
    }
});