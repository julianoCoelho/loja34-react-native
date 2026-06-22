import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator, RefreshControl, } from 'react-native';
import styles from './styles';
import { getProducts, getProductsByCategory } from '../../services/api';
import CardProduto, { Produto } from '../../components/CardProduto';
import EmptyList from '../../components/EmptyList';
import { useTheme } from '../../contexts/ThemeContext';

type ProductsProps = { navigation: any };

export default function Products({ navigation }: ProductsProps) {
  const { theme } = useTheme();
  const colors = theme.colors;
  const isDark = theme.mode === 'dark';
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

   const categorias = [
  { id: 'Todos', label: 'Todos', apiName: 'Todos' },
  { id: 'Plástico', label: 'Plástico', apiName: 'Plastic' },
  { id: 'Alumínio', label: 'Alumínio', apiName: 'Aluminum' },
  { id: 'Madeira', label: 'Madeira', apiName: 'Wooden' },
  { id: 'Granito', label: 'Granito', apiName: 'Granite' },
];

const carregarProdutos = useCallback(
  async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);
    setErro(null);

    try {
      let dados: Produto[] = [];
      
     
      const categoriaSelecionada = categorias.find(c => c.id === categoriaAtiva);

      if (categoriaAtiva === 'Todos' || !categoriaSelecionada) {
        const response = await getProducts();
        dados = response.data;
      } else {
      
        const response = await getProductsByCategory(categoriaSelecionada.apiName);
        dados = response.data;
      }
      setProdutos(dados);
      setProdutosFiltrados(dados);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setErro('Não foi possível carregar os produtos. Verifique sua conexão.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  },
  [categoriaAtiva]
);

  useEffect(() => {
    carregarProdutos();
  }, [carregarProdutos]);

  useEffect(() => {
    const removerAcentos = (texto: string) =>
      texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

    if (busca === '') {
      setProdutosFiltrados(produtos);
    } else {
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

      <View
        style={[
          styles.card,
          { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 },
        ]}
      >
        <TextInput
          style={{ fontSize: 16, color: colors.text }}
          placeholder="Buscar produto por nome..."
          placeholderTextColor={colors.textSecondary}
          value={busca}
          onChangeText={setBusca}
        />
      </View>




      <View style={styles.filterContainer}>
        <FlatList
          horizontal
          data={categorias}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterListContent}
          renderItem={({ item }) => {
            const isActive = categoriaAtiva === item.id;
            return (
              <TouchableOpacity
                onPress={() => {
                  setCategoriaAtiva(item.id);
                  setBusca('');
                }}
                style={[
                  styles.filterButton,
                  { borderColor: colors.border, backgroundColor: colors.card },
                  isActive && { backgroundColor: colors.primary, borderColor: colors.primary },
                ]}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.filterButtonText,
                    { color: isDark ? '#ffffff' : '#666666' },
                    isActive && styles.filterButtonTextActive,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 40 }} />
      ) : erro ? (
        <View style={{ alignItems: 'center', marginTop: 40, paddingHorizontal: 20 }}>
          <Text style={{ color: '#dc2626', fontSize: 15, textAlign: 'center', marginBottom: 16 }}>
            {erro}
          </Text>
          <TouchableOpacity
            onPress={() => carregarProdutos()}
            style={[styles.button, { backgroundColor: colors.primary }]}
          >
            <Text style={styles.buttonText}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.listContent}
          renderItem={renderItem}
          ListEmptyComponent={
            <EmptyList
              message={
                busca
                  ? `Nenhum produto encontrado para "${busca}"`
                  : 'Nenhum produto cadastrado'
              }
            />
          }
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => carregarProdutos(true)}
              colors={[colors.primary]}
              tintColor={colors.primary}
            />
          }
        />
      )}
    </View>
  );
}
