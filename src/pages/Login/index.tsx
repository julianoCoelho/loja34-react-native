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
}
