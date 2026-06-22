import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { styles } from './styles';
import { loginSchema } from '../../utils/validations/loginSchema';
import { ControlledInput } from '../../components/ControlledInput/ControlledInput';
import Button from '../../components/Button';
import { loginUser } from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

export default function Login({ navigation }: any) {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const { login } = useAuth();
  const { theme } = useTheme();
  const colors = theme.colors;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(loginSchema),
  });

  async function onSubmit(data: any) {
    setLoading(true);
    setApiError('');
    try {
      const response = await loginUser({
        username: data.username,
        password: data.password,
      });
      await login({
        username: response.data.username,
        token: response.data.token,
      });
      navigation.navigate('AppDrawer');
    } catch (error: any) {
      console.log('Erro ao fazer login:', error);
      setApiError('Usuário ou senha incorretos. Verifique seus dados ou crie uma conta.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={[styles.page, { backgroundColor: colors.background }]}>
      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={styles.top}>
          <Text style={styles.logoIcon}>🛍️</Text>
          <Text style={[styles.title, { color: colors.text }]}>Loja 34</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Entre na sua conta para continuar
          </Text>
        </View>

        {apiError ? (
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

        <Button
          variant="outline"
          onPress={() => navigation.navigate('SignUp')}
          style={{ marginTop: 10 }}
        >
          Criar nova conta
        </Button>
      </View>
    </View>
  );
}
