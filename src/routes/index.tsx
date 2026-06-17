import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { RootStackParamList, DrawerParamList } from './types';

import Login from '../pages/Login';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import AddProduct from '../pages/AddProduct.tsx';
import Sobre from '../pages/Sobre';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerTintColor: '#2563eb' }}>
      <Drawer.Screen name="Home" component={Products} options={{ title: '🛍️ Produtos' }} />
      <Drawer.Screen name="Adicionar Produto" component={AddProduct} options={{ title: '➕ Cadastrar' }} />
      <Drawer.Screen name="Sobre" component={Sobre} options={{ title: 'ℹ️ Sobre' }} />
    </Drawer.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="AppDrawer" component={DrawerRoutes} options={{ headerShown: false }} />
      <Stack.Screen name="Detalhes" component={ProductDetails} options={{ title: 'Detalhes do Produto' }} />
    </Stack.Navigator>
  );
}
