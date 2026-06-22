import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

export function CustomDrawer(props: DrawerContentComponentProps) {
  const { logout } = useAuth();
  const { theme, isDark, toggleTheme } = useTheme();
  const colors = theme.colors;

  const handleLogout = async () => {
    try {
      await logout();
      props.navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.log('Erro ao tentar deslogar o usuário:', error);
    }
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={[
        styles.scrollContainer,
        { backgroundColor: colors.background },
      ]}
    >

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

      <View style={[styles.themeToggleContainer, { borderColor: colors.border }]}>
        <Feather
          name={isDark ? 'moon' : 'sun'}
          size={16}
          color={colors.textSecondary}
        />
        <Text style={[styles.themeToggleLabel, { color: colors.textSecondary }]}>
          {isDark ? 'Modo Escuro' : 'Modo Claro'}
        </Text>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          trackColor={{ false: '#d1d5db', true: '#2563eb' }}
          thumbColor={isDark ? '#ffffff' : '#ffffff'}
          style={styles.themeSwitch}
        />
      </View>

      <View style={[styles.logoutContainer, { borderColor: colors.border }]}>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Feather name="log-out" size={16} color={colors.danger} />
          <Text style={[styles.logoutText, { color: colors.danger }]}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}