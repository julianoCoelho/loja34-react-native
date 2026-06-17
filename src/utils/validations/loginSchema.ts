// Schema de validação do login
import * as yup from 'yup';

export const loginSchema = yup.object({
  username: yup.string().required('Usuário obrigatório').min(2, 'Mínimo 2 caracteres'),
  password: yup.string().required('Senha obrigatória').min(4, 'Mínimo 4 caracteres'),
});
