import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
  },

  default: {
    backgroundColor: '#e5e7eb',
  },
  text_default: {
    color: '#374151',
  },

  success: {
    backgroundColor: '#dcfce7',
  },
  text_success: {
    color: '#16a34a',
  },

  warning: {
    backgroundColor: '#fef3c7',
  },
  text_warning: {
    color: '#b45309',
  },

  danger: {
    backgroundColor: '#fee2e2',
  },
  text_danger: {
    color: '#dc2626',
  },

  info: {
    backgroundColor: '#dbeafe',
  },
  text_info: {
    color: '#2563eb',
  },
});

export default styles;