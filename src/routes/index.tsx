import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParamList, DrawerParamList } from './types';
import { CustomDrawer } from '../components/CustomDrawer/CustomDrawer';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import AddProduct from '../pages/AddProduct';
import Sobre from '../pages/Sobre';
import EditProduct from '../pages/EditProduct';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerRoutes() {
  const { theme } = useTheme();
  const colors = theme.colors;

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
        drawerInactiveTintColor: colors.textSecondary,
        drawerLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
        drawerStyle: {
          backgroundColor: colors.card,
          width: 260,
        },
        headerStyle: {
          backgroundColor: colors.card,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        } as any,
        headerTintColor: '#2563eb',
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 16,
          color: colors.text,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Products} options={{ title: '🛍️ Produtos' }} />
      <Drawer.Screen
        name="Adicionar Produto"
        component={AddProduct}
        options={{ title: '➕ Adicionar Produto' }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{ title: 'ℹ️ Sobre o Grupo' }}
      />
    </Drawer.Navigator>
  );
}

export default function Routes() {
  const { user, isLoading } = useAuth();
  const { theme } = useTheme();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name="AppDrawer" component={DrawerRoutes} />
          <Stack.Screen
            name="Detalhes"
            component={ProductDetails}
            options={{ headerShown: true, title: 'Visualizar Produto' }}
          />
          <Stack.Screen
            name="EditProduct"
            component={EditProduct}
            options={{ headerShown: true, title: 'Editar Produto' }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: true, title: 'Criar Conta' }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
