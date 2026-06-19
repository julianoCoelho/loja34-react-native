import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import { AuthProvider } from './src/context/AuthContext'; 

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
       <AuthProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>  
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
