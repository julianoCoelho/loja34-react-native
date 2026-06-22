
import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
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
    color: theme.colors.muted || '#666',
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
    color: theme.colors.onPrimary || '#ffffff',
    fontSize: 15,
    fontWeight: '600'
  },
  hint: {
    marginTop: 20,
    fontSize: 12,
    color: theme.colors.muted || '#888',
    textAlign: 'center'
  },
  apiErrorBox: {
    backgroundColor: theme.colors.errorLight || '#fee2e2', // Fundo vermelho clarinho
    borderColor: theme.colors.error || '#fca5a5',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    width: '100%',
  },
  apiErrorText: {
    color: theme.colors.error || '#dc2626', // Texto vermelho de atenção
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
});