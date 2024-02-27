import * as React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Home from './home';
import Bis from './bis';
import Garoto from './garoto';
import Talento from './talento';

const Stack = createStackNavigator();

export default function Rotas(){
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Bis' component={Bis}/>
            <Stack.Screen name='Garoto' component={Garoto}/>
            <Stack.Screen name='Talento' component={Talento}/>
    </Stack.Navigator>
    </NavigationContainer>
    );
}