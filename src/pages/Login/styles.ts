
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

