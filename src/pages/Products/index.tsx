import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import productsJson from '../../../Products.json';
import CardProduto from '../../components/CardProduto';
import EmptyList from '../../components/EmptyList';
import { FlatList } from 'react-native';








const produtos: Produto[] = productsJson;

type ProductsProps = {
  navigation: any;
};


export default function Products({ navigation }: ProductsProps) {
  return (

    <View style={styles.container}>

      <Text style={styles.title}>Loja 34</Text>

      <View style={styles.card}>
        <Text style={styles.productName}>Produto Exemplo</Text>
      </View>
      <FlatList
        data={produtos}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <CardProduto
            produto={item}
            onPress={() =>
              navigation.navigate('Detalhes', { produto: item })
            }
          />
        )}

        ListEmptyComponent={
          <EmptyList message="Nenhum produto cadastrado" />
        }
      />
      

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AppDrawer')}
      >
        <Text style={styles.buttonText}>Ver Mais Produtos</Text>
      </TouchableOpacity>

    </View>
  );
}





