import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Feather } from '@expo/vector-icons'; 

import { theme } from '../../styles/theme';
import {styles} from './styles';
import { loginSchema } from '../../utils/validations/loginSchema';
import { ControlledInput } from '../../components/ControlledInput/ControlledInput';

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
