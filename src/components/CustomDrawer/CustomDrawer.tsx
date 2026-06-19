import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../styles/theme';
import { styles } from './styles';
import { useAuth } from '../../context/AuthContext'; 

export function CustomDrawer(props: DrawerContentComponentProps) {
  
  const { logout } = useAuth(); 

  // Função Simula logout
  const handleLogout = async() => {
    try{
      await logout();

      props.navigation.reset({
        index: 0,
        routes:[{name: 'Login'}],
      });
    }catch(error){
       console.log("Erro ao tentar deslogar o usuário:", error);
    }
  };

  const colors = theme.colors;

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
          <Feather name="log-out" size={16} color={colors.danger} />
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );
}