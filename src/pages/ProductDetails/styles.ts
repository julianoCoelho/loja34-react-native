import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  image: {
    width: '100%',
    height: 260,
  },
  imagePlaceholder: {
    width: '100%',
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    padding: 20,
  },
  nome: {
    fontSize: 22,
    fontWeight: '700',
  },
  preco: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 8,
  },
  descricao: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
  },
  footer: {
    flexDirection: 'row',
    gap: 12,
    padding: 20,
    borderTopWidth: 1,
  },
  footerButton: {
    flex: 1,
  },
  modalContent: {
    alignItems: 'center',
    paddingVertical: 8,
    gap: 12,
  },
  modalText: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 6,
  },
});

export default styles;