import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { theme } from '../../styles/theme';
import { styles } from './styles';
import { loginSchema } from '../../utils/validations/loginSchema';
import { ControlledInput } from '../../components/ControlledInput/ControlledInput';
import Button from '../../components/Button';
import { loginUser } from '../../services/api';
import { useAuth } from '../../context/AuthContext'; 

export default function Login({ navigation }: any) {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  // Função de login que salva no storage
  const {login} = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm<any>({
    resolver: yupResolver(loginSchema),
  });

  // Disparado ao clicar em entrar se os campos estiverem validados
  async function onSubmit(data: any) {
    setLoading(true);
    setApiError(''); 
    
    try{
      // Efetua a requisição 
      const response = await loginUser({
        username: data.username,
        password: data.password
      });
      // Caso ok retorna um objeto com o token
      // Armazenamos o nome e token (AsyncStorage)
      await login({
        username: data.username,
        token: response.data.token
      })
      // Acessa a navegação
      navigation.navigate('AppDrawer');
    } catch (error: any) {
      console.log("Erro ao fazer login:", error);
      
      // Em caso de usuario e-ou senha errada
      setApiError('Usuário ou senha incorretos. Tente: mor_2314 / 83r5^_');
    } finally {
      setLoading(false); 
    }
  }
    
  return (
    <View style={[styles.page, { backgroundColor: theme.colors.background }]}>
      
      <View style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
        
        <View style={styles.top}>
          <Text style={styles.logoIcon}>🛍️</Text>
          <Text style={[styles.title, { color: theme.colors.text }]}>Loja 34</Text>
          <Text style={styles.subtitle}>Entre na sua conta para continuar</Text>
        </View>

   
        { apiError ? (
          <View style={styles.apiErrorBox}>
            <Text style={styles.apiErrorText}>{apiError}</Text>
          </View>
        ) : null}

        <ControlledInput 
          control={control}
          name="username"
          icon="user"
          placeholder="Usuário"
          error={errors.username?.message as string}
        />

        <ControlledInput 
          control={control}
          name="password"
          icon="lock"
          placeholder="Senha"
          secureTextEntry
          error={errors.password?.message as string}
        />

        <Button 
          variant="default"
          loading={loading}
          onPress={handleSubmit(onSubmit)}
          style={{ marginTop: 16 }}
        >
          Entrar
        </Button>

        <Text style={styles.hint}>
          Dica: usuário mor_2314 / senha 83r5^_
        </Text>

      </View>
    </View>
  );

}


