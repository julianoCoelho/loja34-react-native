import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingBottom: 24,
  },
  image: {
    width: '100%',
    height: 260,
    backgroundColor: '#f3f4f6',
  },
  imagePlaceholder: {
    width: '100%',
    height: 260,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  nome: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  preco: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2563eb',
    marginTop: 8,
  },
  estoqueBadge: {
    marginTop: 12,
  },
  descricaoLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    marginTop: 20,
    marginBottom: 6,
  },
  descricao: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4b5563',
  },
  footer: {
    flexDirection: 'row',
    gap: 12,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  footerButton: {
    flex: 1,
  },
  modalContent: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  modalIcon: {
    marginBottom: 12,
  },
  modalText: {
    fontSize: 15,
    color: '#374151',
    textAlign: 'center',
    marginBottom: 18,
  },
  modalButton: {
    width: '100%',
  },
});

export default styles;
