import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { updateProduct } from '../../services/api';
import { useTheme } from '../../contexts/ThemeContext';

export default function EditProduct() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { theme } = useTheme();
  const colors = theme.colors;

  const { produto } = route.params;

  const [title, setTitle] = useState(produto.nome);
  const [price, setPrice] = useState(String(produto.preco));
  const [category, setCategory] = useState(produto.categoria);
  const [loading, setLoading] = useState(false);

  async function handleUpdate() {
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
      await updateProduct(produto.id, {
        nome: title,
        preco: Number(price),
        categoria: category,
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
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Editar Produto</Text>

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
        onPress={handleUpdate}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Salvar Alterações</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonOutline, { borderColor: colors.border }]}
        onPress={() => navigation.goBack()}
        disabled={loading}
      >
        <Text style={[styles.buttonOutlineText, { color: colors.textSecondary }]}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
