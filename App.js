import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Projetos from './telas/Projetos'
import Itens from './telas/Itens'
import NovoProjeto from './telas/NovoProjeto'
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Projetos' component={Projetos/>
            <Stack.Screen name='Itens' component={Itens}/>
            <Stack.Screen name='Novo Projeto' component={NovoProjeto}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

