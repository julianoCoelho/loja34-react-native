import React from 'react';
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Badge from '../Badge';
import styles from './styles';
import { useTheme } from '../../contexts/ThemeContext';

export interface Produto {
    id: number;
    nome: string;
    preco: number;
    imagem?: string;
    categoria?: string;
    descricao?: string;
    estoque?: number;
}

interface CardProdutoProps extends TouchableOpacityProps {
    produto: Produto;
    onPress: () => void;
    onAddPress?: () => void;
}

export default function CardProduto({ produto, onPress, onAddPress, style, ...props }: CardProdutoProps) {
    const { theme } = useTheme();
    const colors = theme.colors;

    const precoFormatado = produto.preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }, style]}
            onPress={onPress}
            activeOpacity={0.8}
            {...props}
        >
            {produto.imagem ? (
                <Image source={{ uri: produto.imagem }} style={styles.image} resizeMode="cover" />
            ) : (
                <View style={[styles.imagePlaceholder, { backgroundColor: colors.input }]}>
                    <Ionicons name="image-outline" size={28} color={colors.textSecondary} />
                </View>
            )}

            <View style={styles.info}>
                <View style={styles.topRow}>
                    <Text style={[styles.nome, { color: colors.text }]} numberOfLines={2}>
                        {produto.nome}
                    </Text>
                    {produto.categoria && <Badge label={produto.categoria} variant="info" />}
                </View>

                <View style={styles.footer}>
                    <Text style={[styles.preco, { color: colors.primary }]}>{precoFormatado}</Text>

                    {onAddPress && (
                        <TouchableOpacity
                            style={[styles.addButton, { backgroundColor: colors.primary }]}
                            onPress={onAddPress}
                            activeOpacity={0.7}
                        >
                            <Ionicons name="add" size={18} color="#ffffff" />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}
