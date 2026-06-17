import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { RootStackParamList, DrawerParamList } from './types';
import { CustomDrawer } from '../components/CustomDrawer'; 

// Importação de Telas
import Login from '../pages/Login';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import AddProduct from '../pages/AddProduct'; 
import Sobre from '../pages/Sobre';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerRoutes() {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerItemStyle: {
          borderRadius: 8,
          marginVertical: 4,
          paddingHorizontal: 8,
        },
        drawerActiveBackgroundColor: '#2563eb', 
        drawerActiveTintColor: '#ffffff',
        drawerInactiveBackgroundColor: 'transparent',
        drawerInactiveTintColor: '#4b5563',
        drawerLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
        drawerStyle: {
          backgroundColor: '#f8fafc', 
          width: 260,
        },
        headerStyle: {
          backgroundColor: '#ffffff',
          borderBottomWidth: 1,
          borderBottomColor: '#e2e8f0',
        },
        headerTintColor: '#2563eb',
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Products} options={{ title: '🛍️ Produtos' }} />
      <Drawer.Screen name="Adicionar Produto" component={AddProduct} options={{ title: '➕ Adicionar Produto' }} />
      <Drawer.Screen name="Sobre" component={Sobre} options={{ title: 'ℹ️ Sobre o Grupo' }} />
    </Drawer.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AppDrawer" component={DrawerRoutes} />
      <Stack.Screen name="Detalhes" component={ProductDetails} options={{ headerShown: true, title: 'Visualizar Produto' }} />
    </Stack.Navigator>
  );
}
