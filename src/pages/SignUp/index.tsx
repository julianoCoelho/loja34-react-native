import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { styles } from './styles';
import { ControlledInput } from '../../components/ControlledInput/ControlledInput';
import Button from '../../components/Button';
import { signUpUser } from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

const signUpSchema = yup.object({
  name: yup.string().required('Nome obrigatório').min(2, 'Mínimo 2 caracteres'),
  username: yup.string().required('Usuário obrigatório').min(3, 'Mínimo 3 caracteres'),
  password: yup.string().required('Senha obrigatória').min(4, 'Mínimo 4 caracteres'),
  confirmPassword: yup
    .string()
    .required('Confirmação obrigatória')
    .oneOf([yup.ref('password')], 'As senhas não coincidem'),
});

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp({ navigation }: any) {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const { login } = useAuth();
  const { theme } = useTheme();
  const colors = theme.colors;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
  });

  async function onSubmit(data: SignUpFormData) {
    setLoading(true);
    setApiError('');
    try {
      const response = await signUpUser({
        name: data.name,
        username: data.username,
        password: data.password,
      });
      const newUser = response.data;
      await login({ username: newUser.username, token: `token_${newUser.id}` });
      Alert.alert('Conta criada!', `Bem-vindo(a), ${newUser.name || newUser.username}!`, [
        { text: 'OK', onPress: () => navigation.navigate('AppDrawer') },
      ]);
    } catch (error: any) {
      console.log('Erro ao criar conta:', error);
      setApiError('Não foi possível criar a conta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={[styles.page, { backgroundColor: colors.background }]}>
      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={styles.top}>
          <Text style={styles.logoIcon}>🛍️</Text>
          <Text style={[styles.title, { color: colors.text }]}>Criar Conta</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Preencha os dados para se cadastrar
          </Text>
        </View>

        {apiError ? (
          <View style={styles.apiErrorBox}>
            <Text style={styles.apiErrorText}>{apiError}</Text>
          </View>
        ) : null}

        <ControlledInput
          control={control}
          name="name"
          icon="user"
          placeholder="Nome"
          error={errors.name?.message}
        />

        <ControlledInput
          control={control}
          name="username"
          icon="at-sign"
          placeholder="Usuário"
          error={errors.username?.message}
        />

        <ControlledInput
          control={control}
          name="password"
          icon="lock"
          placeholder="Senha"
          secureTextEntry
          error={errors.password?.message}
        />

        <ControlledInput
          control={control}
          name="confirmPassword"
          icon="lock"
          placeholder="Confirmar Senha"
          secureTextEntry
          error={errors.confirmPassword?.message}
        />

        <Button
          variant="default"
          loading={loading}
          onPress={handleSubmit(onSubmit)}
          style={{ marginTop: 8 }}
        >
          Criar Conta
        </Button>

        <Button
          variant="outline"
          onPress={() => navigation.goBack()}
          style={{ marginTop: 10 }}
        >
          Já tenho conta
        </Button>
      </View>
    </View>
  );
}
