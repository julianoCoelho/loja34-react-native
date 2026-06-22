import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
import { createProduct } from '../../services/api';
import { useTheme } from '../../contexts/ThemeContext';

export default function AddProduct() {
  const { theme } = useTheme();
  const colors = theme.colors;

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [categoria, setCategoria] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleCreate() {
    if (!nome || !preco|| !categoria) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
    if (isNaN(Number(preco))) {
      Alert.alert('Erro', 'Preço inválido');
      return;
    }
    try {
      setLoading(true);
      await createProduct({ nome, preco: Number(preco), descricao, imagem, categoria});
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
      setNome('');
      setPreco('');
      setDescricao('');
      setImagem('');
      setCategoria('');
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
        placeholder="Nome "
        placeholderTextColor={colors.textSecondary}
        value={nome}
        onChangeText={setNome}
        editable={!loading}
      />

      <TextInput
        style={[styles.input, { backgroundColor: colors.input, color: colors.text, borderColor: colors.border }]}
        placeholder="Preço"
        placeholderTextColor={colors.textSecondary}
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
        editable={!loading}
      />

      <TextInput
        style={[styles.input, { backgroundColor: colors.input, color: colors.text, borderColor: colors.border }]}
        placeholder="Categoria"
        placeholderTextColor={colors.textSecondary}
        value={categoria}
        onChangeText={setCategoria}
        editable={!loading}
      />

      <TextInput
        style={[styles.input, { backgroundColor: colors.input, color: colors.text, borderColor: colors.border }]}
        placeholder="Descricao"
        placeholderTextColor={colors.textSecondary}
        value={descricao}
        onChangeText={setDescricao}
        editable={!loading}
      />

      <TextInput
        style={[styles.input, { backgroundColor: colors.input, color: colors.text, borderColor: colors.border }]}
        placeholder="URL da imagem"
        placeholderTextColor={colors.textSecondary}
        value={imagem}
        onChangeText={setImagem}
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
