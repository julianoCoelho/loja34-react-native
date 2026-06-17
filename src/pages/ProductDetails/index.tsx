import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import styles from './styles';

type ProductDetailsProps = NativeStackScreenProps<RootStackParamList, 'Detalhes'>;

export default function ProductDetails({ route, navigation }: ProductDetailsProps) {
  const { produto } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const semEstoque = produto.estoque !== undefined && produto.estoque <= 0;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {produto.imagemUrl ? (
          <Image source={{ uri: produto.imagemUrl }} style={styles.image} resizeMode="cover" />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Ionicons name="image-outline" size={48} color="#9ca3af" />
          </View>
        )}

        <View style={styles.info}>
          <View style={styles.topRow}>
            <Text style={styles.nome}>{produto.nome}</Text>
            {produto.categoria && <Badge label={produto.categoria} variant="info" />}
          </View>

          <Text style={styles.preco}>{precoFormatado}</Text>

          {produto.estoque !== undefined && (
            <Badge
              label={semEstoque ? 'Sem estoque' : `${produto.estoque} em estoque`}
              variant={semEstoque ? 'danger' : 'success'}
              style={styles.estoqueBadge}
            />
          )}

          <Text style={styles.descricaoLabel}>Descrição</Text>
          <Text style={styles.descricao}>
            {produto.descricao ?? 'Este produto ainda não possui uma descrição cadastrada.'}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button variant="outline" onPress={() => navigation.goBack()} style={styles.footerButton}>
          Voltar
        </Button>
        <Button
          variant="default"
          disabled={semEstoque}
          onPress={() => setModalVisible(true)}
          style={styles.footerButton}
        >
          Adicionar ao Carrinho
        </Button>
      </View>

      <Modal visible={modalVisible} onClose={() => setModalVisible(false)} title="Produto adicionado">
        <View style={styles.modalContent}>
          <Ionicons name="checkmark-circle" size={48} color="#16a34a" style={styles.modalIcon} />
          <Text style={styles.modalText}>
            {produto.nome} foi adicionado ao carrinho com sucesso.
          </Text>
          <Button variant="default" onPress={() => setModalVisible(false)} style={styles.modalButton}>
            OK
          </Button>
        </View>
      </Modal>
    </View>
  );
}
