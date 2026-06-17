import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { theme } from '../../styles/theme';
import { styles } from './styles';
import { loginSchema } from '../../utils/validations/loginSchema';
import { ControlledInput } from '../../components/ControlledInput/ControlledInput';
import Button from '../../components/Button';

export default function Login({ navigation }: any) {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<any>({
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

  return (
    <View style={[styles.page, { backgroundColor: theme.colors.background }]}>
      
      <View style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
        
        <View style={styles.top}>
          <Text style={styles.logoIcon}>🛍️</Text>
          <Text style={[styles.title, { color: theme.colors.text }]}>Loja 34</Text>
          <Text style={styles.subtitle}>Entre na sua conta para continuar</Text>
        </View>

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
          Dica: preencha os campos para testar a navegação
        </Text>

      </View>
    </View>
  );
}