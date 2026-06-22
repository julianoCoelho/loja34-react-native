import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    width: '100%',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    marginTop: 10,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContent: {
    width: '100%',
    paddingBottom: 20,
  },

  filterContainer: {
    height: 46, 
    marginBottom: 16,
    width: '100%',
  },
  filterListContent: {
    alignItems: 'center',
    paddingRight: 20,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    height: 38, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButtonText: {
    fontWeight: '500',
    fontSize: 14,
  },
  filterButtonTextActive: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default styles;
