import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Products({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loja 34</Text>

      <Text style={styles.subtitle}>
        Confira nossos produtos
      </Text>

      <View style={styles.card}>
        <Text style={styles.productName}>Produto Exemplo</Text>
        <Text style={styles.price}>R$ 99,90</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AppDrawer')}
      >
        <Text style={styles.buttonText}>Ver Mais Produtos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  }, 

  subtitle: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 30,
  },

  card: {
    width: '90%',
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },

  productName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },

  price: {
    fontSize: 18,
    color: '#4CAF50',
    marginTop: 10,
  },

  button: {
    backgroundColor: '#1372c0',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});