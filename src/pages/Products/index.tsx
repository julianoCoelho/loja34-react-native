// Tela Esboço para teste de navegação
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Products({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Produtos</Text>
      <Button 
        title="Entrar no Sistema" 
        onPress={() => navigation.navigate('AppDrawer')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
},
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20 
}
});
