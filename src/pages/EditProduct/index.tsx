import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { updateProduct } from '../../services/api';
import { useTheme } from '../../contexts/ThemeContext';

const CATEGORIAS = ['Calçados', 'Vestuário', 'Acessórios'];

export default function EditProduct() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { theme } = useTheme();
  const colors = theme.colors;

  const { produto } = route.params;

  const [nome, setNome] = useState(produto.nome ?? '');
  const [preco, setPreco] = useState(String(produto.preco ?? ''));
  const [descricao, setDescricao] = useState(produto.descricao ?? '');
  const [imagemUrl, setImagemUrl] = useState(produto.imagem ?? '');
  const [categoria, setCategoria] = useState(produto.categoria ?? '');
  const [estoque, setEstoque] = useState(produto.estoque != null ? String(produto.estoque) : '');
  const [loading, setLoading] = useState(false);

  async function handleUpdate() {
    if (!nome.trim() || !preco.trim() || !categoria.trim()) {
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
      await updateProduct(produto.id, {
        nome: nome.trim(),
        preco: precoNum,
        categoria,
        descricao: descricao.trim() || undefined,
        imagem: imagemUrl.trim() || undefined,
        estoque: estoque ? Number(estoque) : undefined,
      });

      Alert.alert('Sucesso', 'Produto atualizado com sucesso!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar o produto.');
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = [
    styles.input,
    { backgroundColor: colors.input, color: colors.text, borderColor: colors.border },
  ];

  const labelStyle = { color: colors.textSecondary, marginBottom: 8, fontSize: 14 };
  const categoryButtonBase = {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 8,
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ padding: 20 }}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={[styles.title, { color: colors.text }]}>Editar Produto</Text>

      <Text style={labelStyle}>Nome *</Text>
      <TextInput
        style={inputStyle}
        placeholder="Nome do produto"
        placeholderTextColor={colors.textSecondary}
        value={nome}
        onChangeText={setNome}
        editable={!loading}
      />

      <Text style={labelStyle}>Preço (R$) *</Text>
      <TextInput
        style={inputStyle}
        placeholder="Ex: 199.90"
        placeholderTextColor={colors.textSecondary}
        value={preco}
        onChangeText={setPreco}
        keyboardType="decimal-pad"
        editable={!loading}
      />

      <Text style={labelStyle}>Categoria *</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 15 }}>
        {CATEGORIAS.map((cat) => {
          const isActive = categoria === cat;
          return (
            <TouchableOpacity
              key={cat}
              onPress={() => setCategoria(cat)}
              style={[
                categoryButtonBase,
                {
                  borderColor: isActive ? colors.primary : colors.border,
                  backgroundColor: isActive ? colors.primary : colors.card,
                },
              ]}
            >
              <Text style={{ color: isActive ? '#fff' : colors.textSecondary, fontSize: 13 }}>
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={labelStyle}>Descrição</Text>
      <TextInput
        style={[inputStyle, { height: 80, textAlignVertical: 'top' }]}
        placeholder="Descreva o produto..."
        placeholderTextColor={colors.textSecondary}
        value={descricao}
        onChangeText={setDescricao}
        multiline
        editable={!loading}
      />

      <Text style={labelStyle}>URL da Imagem</Text>
      <TextInput
        style={inputStyle}
        placeholder="https://..."
        placeholderTextColor={colors.textSecondary}
        value={imagemUrl}
        onChangeText={setImagemUrl}
        keyboardType="url"
        autoCapitalize="none"
        editable={!loading}
      />

      <Text style={labelStyle}>Estoque</Text>
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
    </ScrollView>
  );
}