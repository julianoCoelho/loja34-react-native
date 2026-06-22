import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, ScrollView, } from 'react-native';
import styles from './styles';
import { createProduct } from '../../services/api';
import { useTheme } from '../../contexts/ThemeContext';

const CATEGORIAS = ['Calçados', 'Vestuário', 'Acessórios'];

export default function AddProduct({ navigation }: any) {
  const { theme } = useTheme();
  const colors = theme.colors;
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [estoque, setEstoque] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleCreate() {
    if (!nome.trim() || !preco || !categoria) {
      Alert.alert('Campos obrigatórios', 'Preencha pelo menos nome, preço e categoria.');
      return;
    }
    const precoNum = Number(preco.replace(',', '.'));
    if (isNaN(precoNum) || precoNum <= 0) {
      Alert.alert('Preço inválido', 'Informe um valor numérico positivo.');
      return;
    }

    try {
      setLoading(true);

      await createProduct({
        nome: nome.trim(),
        preco: precoNum,
        categoria,
        descricao: descricao.trim() || undefined,
        imagem: imagem.trim() || undefined,
        estoque: estoque ? Number(estoque) : undefined,
      });

      Alert.alert('Sucesso', 'Produto cadastrado com sucesso!', [
        { text: 'OK', onPress: () => navigation?.goBack() },
      ]);

      setNome('');
      setPreco('');
      setDescricao('');
      setImagem('');
      setCategoria('');
      setEstoque('');

    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o produto. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = [
    styles.input,
    { backgroundColor: colors.input, color: colors.text, borderColor: colors.border },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ padding: 20 }}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={[styles.title, { color: colors.text }]}>Cadastro de Produto</Text>

      <Text style={[styles.label, { color: colors.textSecondary }]}>Nome *</Text>
      <TextInput
        style={inputStyle}
        placeholder="Ex: Tênis Runner"
        placeholderTextColor={colors.textSecondary}
        value={nome}
        onChangeText={setNome}
        editable={!loading}
      />

      <Text style={[styles.label, { color: colors.textSecondary }]}>Preço (R$) *</Text>
      <TextInput
        style={inputStyle}
        placeholder="Ex: 199.90"
        placeholderTextColor={colors.textSecondary}
        value={preco}
        onChangeText={setPreco}
        keyboardType="decimal-pad"
        editable={!loading}
      />

      <Text style={[styles.label, { color: colors.textSecondary }]}>Categoria *</Text>
      <View style={{ flexDirection: 'row', gap: 8, marginBottom: 15 }}>
        {CATEGORIAS.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setCategoria(cat)}
            style={[
              styles.catButton,
              {
                borderColor: categoria === cat ? colors.primary : colors.border,
                backgroundColor: categoria === cat ? colors.primary : colors.card,
              },
            ]}
          >
            <Text style={{ color: categoria === cat ? '#fff' : colors.textSecondary, fontSize: 13 }}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={[styles.label, { color: colors.textSecondary }]}>Descrição</Text>
      <TextInput
        style={[inputStyle, { height: 80, textAlignVertical: 'top' }]}
        placeholder="Descreva o produto..."
        placeholderTextColor={colors.textSecondary}
        value={descricao}
        onChangeText={setDescricao}
        multiline
        editable={!loading}
      />

      <Text style={[styles.label, { color: colors.textSecondary }]}>URL da Imagem</Text>
      <TextInput
        style={inputStyle}
        placeholder="https://..."
        placeholderTextColor={colors.textSecondary}
        value={imagem}
        onChangeText={setImagem}
        keyboardType="url"
        autoCapitalize="none"
        editable={!loading}
      />

      <Text style={[styles.label, { color: colors.textSecondary }]}>Estoque</Text>
      <TextInput
        style={inputStyle}
        placeholder="Ex: 10"
        placeholderTextColor={colors.textSecondary}
        value={estoque}
        onChangeText={setEstoque}
        keyboardType="number-pad"
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
    </ScrollView>
  );
}
