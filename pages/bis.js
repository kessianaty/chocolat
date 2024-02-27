import{Text, ScrollView, StyleSheet, View, Image, SafeAreaView} from 'react-native';
import * as React from 'react';

export default function Bis(){
    return(
        <SafeAreaView style ={styles.container}>
            <Text style= {styles.texto} >O Bis é um chocolate brasileiro produzido pela Lacta, uma marca pertencente ao grupo Mondelez International.
             Lançado em 1942, o Bis é conhecido por suas camadas de wafer crocante cobertas por uma camada de chocolate ao leite.
              Com seu formato retangular e tamanho pequeno, o doce se tornou extremamente popular no Brasil.
               Além do sabor clássico, o Bis também oferece variações, como Bis Chocolate Branco, Bis Oreo e Bis Xtra.
                O chocolate recebeu avaliações positivas, sendo apreciado por muitos consumidores devido à sua textura crocante e equilíbrio entre wafer e chocolate.
                 O Bis é considerado uma marca de destaque na indústria de chocolates brasileira e é frequentemente utilizado como ingrediente em diversas receitas.
                  No entanto, a avaliação do doce pode variar de pessoa para pessoa, sendo recomendado experimentá-lo para formar sua própria opinião.</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        flex: 1,
        backgroundColor: '#191970',
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
        color: '#B0C4DE'
    }
});