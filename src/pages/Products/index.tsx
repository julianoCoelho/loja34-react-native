import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import styles from './styles';
import { getProducts, getProductsByCategory } from '../../services/api';
import CardProduto, { Produto } from '../../components/CardProduto';
import EmptyList from '../../components/EmptyList';
import { useTheme } from '../../contexts/ThemeContext';

type ProductsProps = { navigation: any; };

export default function Products({ navigation }: ProductsProps) {
  const { theme } = useTheme();
  const colors = theme.colors;

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const categorias = ['Todos', 'Calçados', 'Vestuário', 'Acessórios'];

  useEffect(() => {
    async function carregarDaApi() {
      setLoading(true);
      try {
        let dados = [];
        if (categoriaAtiva === 'Todos') {
          dados = (await getProducts()) as any;
        } else {
          dados = (await getProductsByCategory(categoriaAtiva)) as any;
        }
        setProdutos(dados);
        setProdutosFiltrados(dados);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      } finally {
        setLoading(false);
      }
    }
    carregarDaApi();
  }, [categoriaAtiva]);

  useEffect(() => {
    if (busca === '') {
      setProdutosFiltrados(produtos);
    } else {
      const removerAcentos = (texto: string) =>
        texto
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();
      const textoBuscadoLimpo = removerAcentos(busca);
      const filtrado = produtos.filter((item) => {
        if (!item.nome) return false;
        return removerAcentos(item.nome).includes(textoBuscadoLimpo);
      });
      setProdutosFiltrados(filtrado);
    }
  }, [busca, produtos]);

  const renderItem = ({ item }: { item: Produto }) => (
    <CardProduto
      produto={item}
      onPress={() => navigation.navigate('Detalhes', { produto: item })}
    />
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Loja 34</Text>

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
        <TextInput
          style={{ fontSize: 16, color: colors.text }}
          placeholder="Buscar produto por nome..."
          placeholderTextColor={colors.textSecondary}
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 20, marginBottom: 16 }}
      >
        {categorias.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setCategoriaAtiva(cat)}
            style={[
              styles.filterButton,
              { borderColor: colors.border, backgroundColor: colors.card },
              categoriaAtiva === cat && styles.filterButtonActive,
            ]}
          >
            <Text
              style={[
                styles.filterButtonText,
                { color: colors.textSecondary },
                categoriaAtiva === cat && styles.filterButtonTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 40 }} />
      ) : (
        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.listContent}
          renderItem={renderItem}
          ListEmptyComponent={<EmptyList message="Nenhum produto cadastrado" />}
        />
      )}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate('AppDrawer')}
      >
        <Text style={styles.buttonText}>Ver Mais Produtos</Text>
      </TouchableOpacity>
    </View>
  );
}
