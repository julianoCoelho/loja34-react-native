import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  field: { marginBottom: 16, width: '100%' },
  label: { fontSize: 13, fontWeight: '600', color: '#666', marginBottom: 6 },
  inputWrap: { position: 'relative', justifyContent: 'center' },
  inputIcon: { position: 'absolute', left: 12, zIndex: 1 },
  input: { width: '100%', paddingVertical: 10, paddingLeft: 38, paddingRight: 14, borderWidth: 1, borderRadius: 8, fontSize: 14 },
  error: { fontSize: 12, color: '#dc2626', marginTop: 4 }
});
