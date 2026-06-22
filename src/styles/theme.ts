import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();
const isDark = colorScheme === 'dark';

export const theme = {
   colors: {
      primary: '#2563eb',
      danger: '#dc2626',
      background: isDark ? '#121212' : '#f5f5f5',
      card: isDark ? '#1e1e1e' : '#ffffff',
      text: isDark ? '#ffffff' : '#333333',
      textSecondary: isDark ? '#a1a1aa' : '#71717a',
      border: isDark ? '#333333' : '#e0e0e0',
      input: isDark ? '#2d2d2d' : '#f9f9f9',
   },
   radius: {
      sm: 6,
      md: 8,
      lg: 16,
   }
};
