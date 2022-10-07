import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Projetos from './src/screen/Projetos'
import Itens from './src/screen/Itens'
import AlterarProjeto from './src/screen/AlterarProjeto'
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Projetos' component={Projetos}/>
            <Stack.Screen name='Itens' component={Itens}/>
            <Stack.Screen name='Criar e alterar projeto' component={AlterarProjeto}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

