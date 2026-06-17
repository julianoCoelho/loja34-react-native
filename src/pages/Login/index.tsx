import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Feather } from '@expo/vector-icons'; 

import { theme } from '../../styles/theme';
import { loginSchema } from '../../utils/validations/loginSchema';
import { ControlledInput } from '../../components/ControlledInput';

export default function Login({ navigation }: any) {
  // Controle de tema simulado
  const [currentThemeMode, setCurrentThemeMode] = useState<'light' | 'dark'>('light');
  const [loading, setLoading] = useState(false);


  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // Disparado ao clicar em entrar se os campos estiverem validados
  function onSubmit(data: any) {
    setLoading(true);
    
    // Simula a validação e redireciona 
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('AppDrawer'); 
    }, 800);
  }

  const toggleTheme = () => setCurrentThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  
  const isDark = currentThemeMode === 'dark';

  const colors = isDark ? theme.colors.dark : theme.colors.light;

  return (
    <View style={[styles.page, { backgroundColor: colors.background }]}>
      
   
      <TouchableOpacity style={[styles.themeToggle, { borderColor: colors.border }]} onPress={toggleTheme}>
        <Feather name={isDark ? "sun" : "moon"} size={20} color={isDark ? "#fff" : "#333"} />
      </TouchableOpacity>

   
      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        
      
        <View style={styles.top}>
          <Text style={styles.logoIcon}>🛍️</Text>
          <Text style={[styles.title, { color: colors.text }]}>Loja 34</Text>
          <Text style={styles.subtitle}>Entre na sua conta para continuar</Text>
        </View>

        <ControlledInput 
          control={control}
          name="username"
          icon="user"
          placeholder="Usuário"
          error={errors.username?.message}
          isDark={isDark}
        />


        <ControlledInput 
          control={control}
          name="password"
          icon="lock"
          placeholder="Senha"
          secureTextEntry
          error={errors.password?.message}
          isDark={isDark}
        />

          <TouchableOpacity 
          style={[styles.submitBtn, loading && { opacity: 0.7 }]} 
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.submitBtnText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.hint}>
          Dica: preencha os campos para testar a navegação
        </Text>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  page: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20 
  },
  themeToggle: { 
    position: 'absolute', 
    top: 40, 
    right: 20, 
    borderWidth: 1, 
    borderRadius: 8, 
    padding: 10 
  },
  card: { 
    borderWidth: 1, 
    borderRadius: 16, 
    padding: 30, 
    width: '100%', 
    maxWidth: 400 
  },
  top: { 
    alignItems: 'center', 
    marginBottom: 20 
  },
  logoIcon: { 
    fontSize: 40 
  },
  title: { 
    fontSize: 26, 
    fontWeight: '700', 
    marginTop: 8 
  },
  subtitle: { 
    fontSize: 14, 
    color: '#666', 
    marginTop: 6 
  },
  submitBtn: { 
    backgroundColor: theme.colors.primary, 
    borderRadius: 8, 
    padding: 12, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 10 
  },
  submitBtnText: { 
    color: '#ffffff', 
    fontSize: 15, 
    fontWeight: '600' 
  },
  hint: { 
    marginTop: 20, 
    fontSize: 12, 
    color: '#888', 
    textAlign: 'center' 
  }
});
