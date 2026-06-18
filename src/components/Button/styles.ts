import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: theme.radius.md,
    minHeight: 44,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
  iconWrapper: {
    marginRight: 4,
  },
  disabled: {
    opacity: 0.5,
  },

  default: {
    backgroundColor: theme.colors.primary,
  },
  text_default: {
    color: '#ffffff',
  },

  secondary: {
    backgroundColor: theme.colors.input,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  text_secondary: {
    color: theme.colors.text,
  },

  danger: {
    backgroundColor: theme.colors.danger,
  },
  text_danger: {
    color: '#ffffff',
  },

  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: theme.colors.primary,
  },
  text_outline: {
    color: theme.colors.primary,
  },

  logout: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.danger,
    width: '100%',
  },
  text_logout: {
    color: theme.colors.danger,
  },
});

export default styles;