import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import styles from './styles';
import { updateProduct } from '../../services/api';

export default function EditProduct() {

  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const { produto } = route.params;

  const [title, setTitle] = useState(produto.nome);
  const [price, setPrice] = useState(String(produto.preco));
  const [category, setCategory] = useState(produto.categoria);

  const [loading, setLoading] = useState(false);

 async function handleUpdate() {
  try {

    if (!title || !price || !category) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    if (isNaN(Number(price))) {
      Alert.alert('Erro', 'Preço inválido');
      return;
    }

    setLoading(true);

      await updateProduct(produto.id, {
        nome: title,
        preco: Number(price),
        categoria: category
      });

      Alert.alert('Sucesso', 'Produto atualizado com sucesso!');

      navigation.goBack();

    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar o produto.');

    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Editar Produto
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
        title={loading ? 'Salvando...' : 'Salvar Alterações'}
        onPress={handleUpdate}
        disabled={loading}
      />

      <Button
        title="Cancelar"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}