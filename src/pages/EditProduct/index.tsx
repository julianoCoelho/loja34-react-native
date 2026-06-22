import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
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

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Editar Produto</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Atualize as informações do produto
        </Text>
        <View style={[styles.divider, { backgroundColor: colors.border }]} />
      </View>

      {/* Nome */}
      <View style={styles.fieldGroup}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>Nome *</Text>
        <TextInput
          style={inputStyle}
          placeholder="Nome do produto"
          placeholderTextColor={colors.textSecondary}
          value={nome}
          onChangeText={setNome}
          editable={!loading}
        />
      </View>

      {/* Preço */}
      <View style={styles.fieldGroup}>
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
      </View>

      {/* Categoria */}
      <View style={styles.fieldGroup}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>Categoria *</Text>
        <View style={styles.categoryRow}>
          {CATEGORIAS.map((cat) => {
            const isActive = categoria === cat;
            return (
              <TouchableOpacity
                key={cat}
                onPress={() => setCategoria(cat)}
                style={[
                  styles.catButton,
                  {
                    borderColor: isActive ? colors.primary : colors.border,
                    backgroundColor: isActive ? colors.primary : colors.card,
                  },
                ]}
                disabled={loading}
              >
                <Text style={[styles.catButtonText, { color: isActive ? '#fff' : colors.textSecondary }]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Descrição */}
      <View style={styles.fieldGroup}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>Descrição</Text>
        <TextInput
          style={[styles.inputMultiline, { backgroundColor: colors.input, color: colors.text, borderColor: colors.border }]}
          placeholder="Descreva o produto..."
          placeholderTextColor={colors.textSecondary}
          value={descricao}
          onChangeText={setDescricao}
          multiline
          editable={!loading}
        />
      </View>

      {/* URL da Imagem */}
      <View style={styles.fieldGroup}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>URL da Imagem</Text>
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
      </View>

      {/* Estoque */}
      <View style={styles.fieldGroup}>
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
      </View>

      {/* Botões */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: loading ? colors.textSecondary : colors.primary }]}
          onPress={handleUpdate}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <>
              <Ionicons name="checkmark-circle-outline" size={20} color="#fff" />
              <Text style={styles.buttonText}>Salvar Alterações</Text>
            </>
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
    </ScrollView>
  );
}