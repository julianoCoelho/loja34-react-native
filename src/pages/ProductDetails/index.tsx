import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import styles from './styles';
import { deleteProduct } from '../../services/api';
import { useTheme } from '../../contexts/ThemeContext';

type ProductDetailsProps = NativeStackScreenProps<RootStackParamList, 'Detalhes'>;

export default function ProductDetails({ route, navigation }: ProductDetailsProps) {
  const { produto } = route.params;
  const { theme } = useTheme();
  const colors = theme.colors;

  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  async function handleDelete() {
    try {
      setLoading(true);
      await deleteProduct(produto.id);
      setDeleteModal(false);
      Alert.alert('Sucesso', 'Produto excluído com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir o produto.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {produto.imagemUrl? (
          <Image
            source={{ uri: produto.imagemUrl}}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.imagePlaceholder, { backgroundColor: colors.input }]}>
            <Ionicons name="image-outline" size={48} color={colors.textSecondary} />
          </View>
        )}

        <View style={styles.info}>
          <Text style={[styles.nome, { color: colors.text }]}>{produto.nome}</Text>

          {produto.categoria && <Badge label={produto.categoria} variant="info" />}

          <Text style={[styles.preco, { color: colors.primary }]}>{precoFormatado}</Text>

          <Text style={[styles.descricao, { color: colors.textSecondary }]}>
            {produto.descricao ?? 'Este produto ainda não possui uma descrição cadastrada.'}
          </Text>
        </View>
      </ScrollView>

      <View style={[styles.footer, { borderTopColor: colors.border }]}>
        <Button
          variant="outline"
          onPress={() => navigation.goBack()}
          style={styles.footerButton}
        >
          Voltar
        </Button>

        <Button
          variant="default"
          onPress={() => navigation.navigate('EditProduct', { produto })}
          style={styles.footerButton}
        >
          Editar
        </Button>

        <Button
          variant="danger"
          onPress={() => setDeleteModal(true)}
          style={styles.footerButton}
        >
          Excluir
        </Button>
      </View>

      <Modal
        visible={deleteModal}
        onClose={() => setDeleteModal(false)}
        title="Confirmar exclusão"
      >
        <View style={styles.modalContent}>
          <Ionicons name="warning" size={48} color="#dc2626" />

          <Text style={[styles.modalText, { color: colors.text }]}>
            Tem certeza que deseja excluir este produto?
          </Text>

          <Button variant="danger" onPress={handleDelete} disabled={loading}>
            {loading ? 'Excluindo...' : 'Sim, excluir'}
          </Button>

          <Button variant="outline" onPress={() => setDeleteModal(false)} disabled={loading}>
            Cancelar
          </Button>
        </View>
      </Modal>
    </View>
  );
}
