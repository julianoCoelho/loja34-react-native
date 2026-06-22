import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
import { createProduct } from '../../services/api';
import { useTheme } from '../../contexts/ThemeContext';

export default function AddProduct() {
  const { theme } = useTheme();
  const colors = theme.colors;

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleCreate() {
    if (!title || !price || !category) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
    if (isNaN(Number(price))) {
      Alert.alert('Erro', 'Preço inválido');
      return;
    }
    try {
      setLoading(true);
      await createProduct({ title, price: Number(price), category });
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
      setTitle('');
      setPrice('');
      setCategory('');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o produto');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Cadastro de Produto</Text>

      <TextInput
        style={[styles.input, { backgroundColor: colors.input, color: colors.text, borderColor: colors.border }]}
        placeholder="Nome do produto"
        placeholderTextColor={colors.textSecondary}
        value={title}
        onChangeText={setTitle}
        editable={!loading}
      />

      <TextInput
        style={[styles.input, { backgroundColor: colors.input, color: colors.text, borderColor: colors.border }]}
        placeholder="Preço"
        placeholderTextColor={colors.textSecondary}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        editable={!loading}
      />

      <TextInput
        style={[styles.input, { backgroundColor: colors.input, color: colors.text, borderColor: colors.border }]}
        placeholder="Categoria"
        placeholderTextColor={colors.textSecondary}
        value={category}
        onChangeText={setCategory}
        editable={!loading}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: loading ? colors.textSecondary : colors.primary }]}
        onPress={handleCreate}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Cadastrar Produto</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
