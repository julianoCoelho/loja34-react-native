import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
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
    backgroundColor: '#2563eb',
  },
  text_default: {
    color: '#ffffff',
  },

  secondary: {
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  text_secondary: {
    color: '#374151',
  },

  danger: {
    backgroundColor: '#dc2626',
  },
  text_danger: {
    color: '#ffffff',
  },

  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#2563eb',
  },
  text_outline: {
    color: '#2563eb',
  },

  logout: {
    backgroundColor: '#fee2e2',
    borderWidth: 1,
    borderColor: '#fca5a5',
    width: '100%',
  },
  text_logout: {
    color: '#dc2626',
  },
});

export default styles;