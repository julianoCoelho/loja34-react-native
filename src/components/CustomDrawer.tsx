
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { theme } from '../styles/theme';

export function CustomDrawer(props: DrawerContentComponentProps) {
  
  // Função Simula logout
  const handleLogout = () => {
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

 
  const colors = theme.colors.light;

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollContainer}>
      

      <View style={[styles.headerContainer, { borderColor: colors.border }]}>
        <View style={styles.avatar}>
          <Feather name="user" size={24} color="#fff" />
        </View>
        <Text style={[styles.brandText, { color: colors.text }]}>🛍️ Loja 34</Text>
        <Text style={styles.userSubtitle}>Menu de Navegação</Text>
      </View>
      
  
      <View style={styles.listContainer}>
        <DrawerItemList {...props} />
      </View>

      <View style={[styles.logoutContainer, { borderColor: colors.border }]}>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Feather name="log-out" size={16} color={theme.colors.danger} />
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1, 
  },
  headerContainer: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  brandText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  listContainer: {
    flex: 1, 
    paddingHorizontal: 8,
  },
  logoutContainer: {
    padding: 16,
    borderTopWidth: 1,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    backgroundColor: '#fee2e2', 
    borderRadius: 8,
    width: '100%',
  },
  logoutText: {
    color: theme.colors.danger, 
    fontSize: 14,
    fontWeight: '600',
  },
});
