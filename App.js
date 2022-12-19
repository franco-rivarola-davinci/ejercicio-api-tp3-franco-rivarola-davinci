import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import InicioScreen from './screens/InicioScreen';
import ApiScreen from './screens/ApiScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator
           screenOptions={{
            headerTintColor:'black',
            headerTitleAlign: 'center',
              headerStyle:{
                backgroundColor: '#5FEFB5',
                
               },
               headerTitleStyle: {
                fontWeight: 'bold',
              },
               
             }}
             >
          <Drawer.Screen
           name="Inicio" 
           component={InicioScreen}
          />
          <Drawer.Screen
           name="Gatos"
           component={ApiScreen}
           
           />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

