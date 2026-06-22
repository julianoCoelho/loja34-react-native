import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    fontSize: 15,
  },
  button: {
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutline: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 14,
    alignItems: 'center',
  },
  buttonOutlineText: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;
