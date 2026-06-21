import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator, ScrollView,} from 'react-native';
import styles from './styles';
import { getProducts, getProductsByCategory } from '../../services/api';
import CardProduto, { Produto } from '../../components/CardProduto';
import EmptyList from '../../components/EmptyList';

import { FlatList } from 'react-native';








const produtos: Produto[] = productsJson;


type ProductsProps = {
  navigation: any;
};

export default function Products({ navigation }: ProductsProps) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const categorias = ["Todos", "Calçados", "Vestuário", "Acessórios"];

  useEffect(() => {
    async function carregarDaAPi() {
      setLoading(true);
      try {
        let dados = [];

        if (categoriaAtiva === "Todos") {
          dados = (await getProducts()) as any;
        } else {
          dados = (await getProductsByCategory(categoriaAtiva)) as any;
        }

        setProdutos(dados);
        setProdutosFiltrados(dados);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }
    carregarDaAPi();
  }, [categoriaAtiva]);

  useEffect(() => {
    if (busca === "") {
      setProdutosFiltrados(produtos);
    } else {
      const removerAcentos = (texto: string) =>
        texto
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
      const textoBuscadoLimpo = removerAcentos(busca);
      const filtrado = produtos.filter((item) => {
        if (!item.nome) return false;
        const tituloProdutoLimpo = removerAcentos(item.nome);
        return tituloProdutoLimpo.includes(textoBuscadoLimpo);
      });
      setProdutosFiltrados(filtrado);
    }
  }, [busca, produtos]);

  const renderItem = ({ item }: { item: Produto }) => (
    <CardProduto
      produto={item}
      onPress={() => console.log("Clicou no produto", item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loja 34</Text>

      <View style={styles.card}>
        <TextInput
          style={{ fontSize: 16, color: "#333" }}
          placeholder="Buscar produto por nome..."
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      <View>
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
                categoriaAtiva === cat && styles.filterButtonActive
              ]}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  categoriaAtiva === cat && styles.filterButtonTextActive
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#2563eb"
          style={{ marginTop: 40 }}
        />
      ) : (
        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.listContent}
          renderItem={renderItem}
          ListEmptyComponent={
            <EmptyList message="Nenhum produto cadastrado" />
          }
        />
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AppDrawer")}
      >
        <Text style={styles.buttonText}>Ver Mais Produtos</Text>
      </TouchableOpacity>
    </View>
  );
}
