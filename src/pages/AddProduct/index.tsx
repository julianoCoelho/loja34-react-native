import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from './styles';

import { createProduct } from '../../services/api';

export default function AddProduct() {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleCreate() {

    try {

      if (!title || !price || !category) {
        Alert.alert('Erro', 'Preencha todos os campos');
        return;
      }

      if (isNaN(Number(price))) {
        Alert.alert('Erro', 'Preço inválido')
        return;
      }

      setLoading(true);

      await createProduct({
        title,
        price: Number(price),
        category
      });

      Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');

      setTitle('');
      setPrice('');
      setCategory('');

    } catch (error) {

      Alert.alert('Erro', 'Não foi possível cadastrar o produto');

    }finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Cadastro de Produto
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={title}
        onChangeText={setTitle}
        editable={!loading}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        editable={!loading}

      />

      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={category}
        onChangeText={setCategory}
        editable={!loading}
      />

      <Button
        title={loading ? 'Cadastrando...' : 'Cadastrar Produto' }
        onPress={handleCreate}
        disabled={loading}
      />

    </View>
  );
}